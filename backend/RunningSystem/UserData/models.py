from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import jwt


class UserManager(BaseUserManager):
    def create_user(self, username, surname, email, password, **kwargs):
        # Create and return a User with name, surname, email, password
        if username is None:
            raise TypeError('Users must have a username.')
        if surname is None:
            raise TypeError('Users must have a surname.')
        if email is None:
            raise TypeError('Users must have an email.')
        if password is None:
            raise TypeError('Users must have a password.')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_surname(surname)
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, email):
        # Create and return a User with superuser permissions
        if username is None:
            raise TypeError('Superusers must have a username.')
        if email is None:
            raise TypeError('Superusers must have an email.')

        user = self.create_user(username, email)
        user.is_staff = True
        user.save()

        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=1000, unique=True, db_index=True)
    name = models.CharField(db_index=True, max_length=255)
    surname = models.CharField(max_length=255)
    father_name = models.CharField(max_length=100, blank=True)
    birth_date = models.DateField(auto_now=False, auto_now_add=False, null=True)
    password = models.CharField(max_length=255)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    class Meta:
        verbose_name = 'Пользователь'

    def get_username(self):
        return self.name

    def __str__(self):
        return str(self.email)

