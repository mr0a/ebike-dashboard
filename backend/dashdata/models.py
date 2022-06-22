from django.utils import timezone
from django.db import models

# Create your models here.
class DistanceTravelled(models.Model):
    distance = models.PositiveIntegerField(default=0, auto_created=True)
    time = timezone.localtime()