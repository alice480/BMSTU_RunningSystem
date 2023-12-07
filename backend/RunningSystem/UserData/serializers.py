from .models import *
from rest_framework import serializers
from rest_framework_simplejwt.settings import api_settings
from django.contrib.auth.models import update_last_login
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.core.exceptions import ObjectDoesNotExist
from django.core.mail import EmailMessage
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
import secrets
import datetime


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'name', 'surname', 'father_name', 'birth_date', 'email', 'user_registration_date']

#     def create(self, validated_data):
#         user = User.objects.using(settings.BPLEX_DB_CONNECTION).create(**validated_data,
#                                                                        user_registration_date=datetime.datetime.now())
#         key = secrets.token_hex(16)
#         registration_key = user.registrationkey_set.create(key=key)
#         email = EmailMessage(
#             subject='Регистрация на платформе RunningSystem',
#             from_email=settings.EMAIL_HOST_USER,
#             to=[user.email],
#             body='Здравствуйте!\n'
#                  'Вас пригласили зарегистрироваться на портале.\n'
#                  f'Для её завершения перейдите по '
#                  f'<a href="{settings.BPLEX_URL}userRegister/?key={registration_key.key}">ссылке</a>'
#         )
#         email.content_subtype = "html"
#         try:
#             email.send()
#         except Exception as e:
#             raise e
#         return user


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username', 'surname', 'father_name', 'email', 'password']
        read_only_field = ['id', 'created_at']


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'surname', 'email', 'password']
        read_only_field = ['created_at']

    def create(self, validated_data):
        try:
            user = User.objects.get(email=validated_data['email'])
        except ObjectDoesNotExist:
            user = User.objects.create_user(**validated_data)
        return user


class LoginSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['user'] = UserSerializer(self.user).data
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)

        return data


