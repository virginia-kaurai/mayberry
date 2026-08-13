from rest_framework import serializers
from . models import cakes ,flavour 

class CakeSerializer(serializers.ModelSerializer):
    class Meta:
        model=cakes
        fields =('__all__')


class FlavourSerializer(serializers.ModelSerializer):
    class Meta:
        model=flavour
        fields =('__all__')        