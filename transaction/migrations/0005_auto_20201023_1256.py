# Generated by Django 3.1.2 on 2020-10-23 12:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('transaction', '0004_auto_20201022_2200'),
    ]

    operations = [
        migrations.RenameField(
            model_name='transaction',
            old_name='owner',
            new_name='subaccountowner',
        ),
        migrations.AddField(
            model_name='transaction',
            name='ownerID',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='subaccountid', to='jwt_auth.user'),
            preserve_default=False,
        ),
    ]
