from django.db import models
from UserData.models import User


class Place(models.Model):
    name = models.CharField(max_length=1000)
    location = models.CharField(max_length=1000)

    class Meta:
        verbose_name = "Место проведения"

    def __str__(self):
        return self.name


class RegStatus(models.TextChoices):
    OPEN = "OP", "Открыта"
    CLOSED = "CL", "Закрыта"


class Event(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=1000)
    description = models.CharField(max_length=5000, blank=True)
    reg_status = models.CharField(max_length=2, choices=RegStatus.choices, default=RegStatus.OPEN)
    date = models.DateTimeField(auto_now_add=False, db_index=True)
    organizer = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    place = models.ForeignKey(Place, null=True, on_delete=models.SET_NULL)

    class Meta:
        verbose_name = "Мероприятие"

    def __str__(self):
        return self.name

class Roles(models.TextChoices):
    ORGANIZER = "ORG", "Организатор"
    VOLONTEER = "VOL", "Волонтер"
    PARTICIPANT = "PTC", "Участник"


class UserEvents(models.Model):
    event_id = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=3, choices=Roles.choices, default=Roles.PARTICIPANT)


