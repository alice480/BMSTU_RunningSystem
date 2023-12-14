from django.db import models
from UserData.models import User
from Event.model import Event, Place


class Club(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    creator = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    dislocation = models.ForeignKey(Place, null=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=1000)
    description = models.CharField(max_length=5000, blank=True)
