from django.db.models import fields
from rest_framework import serializers
from quickstart.models import doc

class docserializer(serializers.ModelSerializer):
    class Meta:
        model = doc
        fields = ('document','annotation')
