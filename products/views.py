from django.shortcuts import render
from products.models import cakes ,flavour
from .serializers import CakeSerializer ,FlavourSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, BasePermission,SAFE_METHODS



class IsAdminUser(BasePermission):
      message = "Only admins can make changes"

      def has_permission(self, request, view):
        return request.user.is_authenticated

      def has_object_permission(self, request, view, obj):

          if request.method in SAFE_METHODS:
              return True
          return request.user.role == "admin"

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

