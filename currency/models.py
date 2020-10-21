from django.db import models

class currency(models.Model):
    name = models.CharField(max_length=15)