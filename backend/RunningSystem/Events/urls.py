from .views import *
from django.urls import path

urlpatterns = [
    path('events_list', EventsView.as_view()),
    path('create_event', EventsView.as_view()),
]

