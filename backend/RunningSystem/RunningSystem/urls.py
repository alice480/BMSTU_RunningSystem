from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView


urlpatterns = [
    re_path(r'^auth', include('djoser.urls.jwt')),
    re_path('^api/users/', include("UserData.urls")),
    re_path('^api/events/', include("Events.urls")),
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]