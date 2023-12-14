from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import *
from .models import User
from django.conf import settings
from datetime import datetime
import secrets
import jwt


class RegistrationView(APIView):
    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        key = secrets.token_urlsafe(16)
        email = EmailMessage(subject='Подтверждение регистрации в RunningSystem',
                             body='Здравствуйте!<br>'
                                  'Благодарим Вас за регистрацию на нашем портале.<br>'
                                  f'Для её завершения перейдите по <a href="http://localhost:8000/api/activation/?key={key}">ссылке</a>.<br>',
                             from_email=settings.EMAIL_HOST_USER,
                             to=[request.data['email']])
        email.content_subtype = "html"
        try:
            email.send()
        except Exception as e:
            raise e
        return Response(True)


class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed(f'Пользователь с {email} не найден')

        if not user.check_password(password):
            raise AuthenticationFailed('Неверный пароль')

        # generating a token for secure data transfer to the frontend
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256').decode('utf-8')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        return response


class UserView(APIView):
    serializer_class = UserSerializer

    def get(self, request):
        token = request.COOKIES.get('jwt')

        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Пользователь не авторизован')

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)
        return Response(serializer.data)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response


# @api_view(['GET', 'POST'])
# def users_list(request):
#     if request.method == 'GET':
#         data = User.objects.all()
#         serializer = UserSerializer(data, context={'request': request}, many=True)
#         return Response(serializer.data)
#     else:
#         print('post')