from django.urls import path
from .views import *

urlpatterns = [
    path('', users_list, name='users'),
    path('/registration/', Registration.as_view())
]
