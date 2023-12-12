from .models import *
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['username', 'surname', 'father_name', 'email', 'password']
        read_only_field = ['id', 'created_at']


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'surname', 'email', 'password']
        read_only_field = ['id', 'created_at']


# class LoginSerializer(TokenObtainPairSerializer):
#
#     def validate(self, attrs):
#         data = super().validate(attrs)
#
#         refresh = self.get_token(self.user)
#
#         data['user'] = UserSerializer(self.user).data
#         data['refresh'] = str(refresh)
#         data['access'] = str(refresh.access_token)
#
#         if api_settings.UPDATE_LAST_LOGIN:
#             update_last_login(None, self.user)
#
#         return data


