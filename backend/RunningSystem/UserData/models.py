from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import jwt


class User(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    father_name = models.CharField(max_length=100, blank=True)
    birth_date = models.DateField(auto_now=False, auto_now_add=False, null=True)
    email = models.EmailField(max_length=1000, unique=True, db_index=True)
    user_registration_date = models.DateTimeField(null=True, blank=True)

    class Meta:
        verbose_name = 'Пользователь'

    def __str__(self):
        return str(self.email)
