from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.jwt')),
    re_path('^api/', include("UserData.urls")),
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]