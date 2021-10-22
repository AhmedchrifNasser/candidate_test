from django.db import models

class doc(models.Model):
    document = models.CharField(max_length=1000)
    annotation = models.CharField(max_length=1000)