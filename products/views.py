from django.shortcuts import render
from products.models import cakes ,flavour
from accounts.models import User
from .serializers import CakeSerializer ,FlavourSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, BasePermission,SAFE_METHODS



from rest_framework.permissions import BasePermission


class IsAdminUserOrReadOnly(BasePermission):

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True

        return request.user.is_authenticated and request.user.is_staff

class Createflavour(generics.CreateAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = FlavourSerializer
    queryset = flavour.objects.all()


class AdminFlavourDetail(generics.RetrieveAPIView):
     permission_classes = [IsAdminUser]
     serializer_class = FlavourSerializer
     queryset = flavour.objects.all()


class EditFlavour(generics.UpdateAPIView):
     permission_classes = [IsAdminUser]
     serializer_class = FlavourSerializer
     queryset = flavour.objects.all()

class DeleteFlavour(generics.RetrieveDestroyAPIView):
     permission_classes = [IsAdminUser]
     serializer_class = FlavourSerializer
     queryset = flavour.objects.all()     

class CreateCake(generics.CreateAPIView):
    permission_classes = [IsAdminUser]
    serializer_class = CakeSerializer
    queryset = cakes.objects.all()


class AdminCakeDetail(generics.RetrieveAPIView):
     permission_classes = [IsAdminUser]
     serializer_class = CakeSerializer
     queryset = cakes.objects.all()


class EditCake(generics.UpdateAPIView):
     permission_classes = [IsAdminUser]
     serializer_class = CakeSerializer
     queryset = cakes.objects.all()

class DeleteCake(generics.RetrieveDestroyAPIView):
     permission_classes = [IsAdminUser]
     serializer_class = CakeSerializer
     queryset = cakes.objects.all()     

