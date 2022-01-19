from __future__ import annotations
from django.db import models

class doc(models.Model):
    id =  models.AutoField(primary_key=True)
    document = models.CharField(max_length=1000)    
    annotation = models.CharField(max_length=1000)