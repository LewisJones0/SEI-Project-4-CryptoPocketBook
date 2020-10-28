# Generated by Django 3.1.2 on 2020-10-28 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transaction', '0002_auto_20201028_1014'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='amount_bought',
            field=models.DecimalField(decimal_places=18, max_digits=18),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='price_bought_at',
            field=models.DecimalField(decimal_places=18, max_digits=18),
        ),
    ]