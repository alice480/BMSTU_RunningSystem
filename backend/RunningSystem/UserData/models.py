from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin


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
    REQUIRED_FIELDS = ['name', 'surname']

    class Meta:
        verbose_name = 'Пользователь'

    def get_username(self):
        return self.name

    def __str__(self):
        return str(self.email)

