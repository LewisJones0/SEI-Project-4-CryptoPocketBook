# Generated by Django 3.1.2 on 2020-10-23 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transaction', '0010_auto_20201023_1453'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='date_bought_at',
            field=models.DateField(auto_now_add=True),
        ),
    ]
