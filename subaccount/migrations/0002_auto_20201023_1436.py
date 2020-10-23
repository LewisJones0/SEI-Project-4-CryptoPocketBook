# Generated by Django 3.1.2 on 2020-10-23 14:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('subaccount', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subaccount',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subaccounts', to=settings.AUTH_USER_MODEL),
        ),
    ]