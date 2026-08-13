from django.shortcuts import render
from products.models import cake ,flavour
from .serializers import CakeSerializer ,FlavourSerializer
from rest_framework import generics,permissions
from rest_framework import APIView



class Createflavour(generics.CreateAPIView):
    serializer_class = CakeSerializer
    queryset = flavour.objects.all()


class AdminFlavourDetail(generics.RetrieveAPIView):
     serializer_class = CakeSerializer
     queryset = flavour.objects.all()


class EditFlavour(generics.UpdateAPIView):
     serializer_class = CakeSerializer
     queryset = flavour.objects.all()

class DeleteFlavour(generics.RetrieveDestroyAPIView):
     serializer_class = CakeSerializer
     queryset = flavour.objects.all()     

class CreateCake(generics.CreateAPIView):
    serializer_class = CakeSerializer
    queryset = cake.objects.all()


class AdminCakeDetail(generics.RetrieveAPIView):
     serializer_class = CakeSerializer
     queryset = cake.objects.all()


class EditCake(generics.UpdateAPIView):
     serializer_class = CakeSerializer
     queryset = cake.objects.all()

class DeleteCake(generics.RetrieveDestroyAPIView):
     serializer_class = CakeSerializer
     queryset = cake.objects.all()     

