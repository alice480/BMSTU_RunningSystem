# Generated by Django 3.2.12 on 2023-12-13 18:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('UserData', '0005_rename_username_user_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserEvents',
            fields=[
                ('id', models.CharField(max_length=50, primary_key=True, serialize=False, verbose_name='id')),
                ('role', models.CharField(choices=[('ORG', 'Организатор'), ('VOL', 'Волонтер'), ('PTC', 'Участник')], default='PTC', max_length=3)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]