# Generated by Django 3.2.12 on 2023-11-23 00:18

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('UserData', '0002_auto_20231122_1943'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='surname',
            field=models.CharField(default=django.utils.timezone.now, max_length=255),
            preserve_default=False,
        ),
    ]
