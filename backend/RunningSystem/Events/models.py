from django.db import models


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
    name = models.CharField(max_length=1000)
    description = models.CharField(max_length=5000, blank=True)
    reg_status = models.CharField(max_length=2, choices=RegStatus.choices, default=RegStatus.OPEN)
    data = models.DateTimeField(auto_now_add=False, db_index=True)
    place = models.ForeignKey(Place, on_delete=models.SET_NULL, null=True)

    class Meta:
        verbose_name = "Мероприятие"

    def __str__(self):
        return self.name


