# Generated by Django 3.2.12 on 2023-12-13 20:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('UserData', '0007_alter_userevents_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='UserEvents',
        ),
    ]
