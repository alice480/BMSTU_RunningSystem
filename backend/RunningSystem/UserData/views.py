from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny
from .serializers import *


class LogOut(APIView):
    def get(self, request, format=None):
        pass


@api_view(['GET', 'POST'])
def users_list(request):
    if request.method == 'GET':
        data = User.objects.all()
        serializer = UserSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    else:
        print('post')


class Registration(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = UserSerializer

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(True)