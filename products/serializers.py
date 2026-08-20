from rest_framework import serializers
from . models import cakes ,flavours 

class CakeSerializer(serializers.ModelSerializer):
    class Meta:
        model=cakes
        fields =('__all__')


class FlavourSerializer(serializers.ModelSerializer):
    class Meta:
        model=flavours
        fields =('__all__')        