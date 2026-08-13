from rest_framework import serializers
from . models import cake ,flavour 

class CakeSerializer(serializers.ModelSerializer):
    class Meta:
        model=cake
        fields =('__all__')


class FlavourSerializer(serializers.ModelSerializer):
    class Meta:
        model=flavour
        fields =('__all__')        