from rest_framework import serializers
from .models import *
from django.core.mail import EmailMessage
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
import secrets
import datetime


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'surname', 'father_name', 'birth_date', 'email', 'user_registration_date']

    def create(self, validated_data):
        user = User.objects.using(settings.BPLEX_DB_CONNECTION).create(**validated_data,
                                                                       user_registration_date=datetime.datetime.now())
        key = secrets.token_hex(16)
        registration_key = user.registrationkey_set.create(key=key)
        email = EmailMessage(
            subject='Регистрация на платформе RunningSystem',
            from_email=settings.EMAIL_HOST_USER,
            to=[user.email],
            body='Здравствуйте!\n'
                 'Вас пригласили зарегистрироваться на портале.\n'
                 f'Для её завершения перейдите по '
                 f'<a href="{settings.BPLEX_URL}userRegister/?key={registration_key.key}">ссылке</a>'
        )
        email.content_subtype = "html"
        try:
            email.send()
        except Exception as e:
            raise e
        return user
