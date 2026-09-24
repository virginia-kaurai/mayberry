from django.shortcuts import render
from products.models import cakes ,flavours
from accounts.models import User
from .serializers import CakeSerializer ,FlavourSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, BasePermission,SAFE_METHODS
from rest_framework.response import Response
from rest_framework import status


from rest_framework.permissions import BasePermission


class IsAdminUserOrReadOnly(BasePermission):

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True

        return request.user.is_authenticated and request.user.is_staff

class Flavours(APIView):
  
    def get(self,request):
        flavours = flavours.objects.all()
        serializer = FlavourSerializer(flavours, many=True)
        return Response(serializer.data)

    
    def post(self,request):
        serializer = FlavourSerializer(data =request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self,request,pk):
        flavours= flavours.objects.get(pk=pk)
        serializer =FlavourSerializer(flavours, data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response( serializer.errors, status= status.HTTP_400_BAD_REQUEST)




def delete(self, request, pk):
    flavour = flavours.objects.get(pk=pk)
    flavour.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

class AdminFlavourDetail(generics.RetrieveAPIView):
     permission_classes = [IsAdminUserOrReadOnly]
     serializer_class = FlavourSerializer
     queryset = flavours.objects.all()


class EditFlavour(generics.UpdateAPIView):
     permission_classes = [IsAdminUser]
     serializer_class = FlavourSerializer
     queryset = flavours.objects.all()

class DeleteFlavour(generics.RetrieveDestroyAPIView):
    
     serializer_class = FlavourSerializer
     queryset = flavours.objects.all()     

class CreateCake(generics.CreateAPIView):
   
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
    
     serializer_class = CakeSerializer
     queryset = cakes.objects.all()     

class Flavourlist(generics.ListAPIView):
     permission_classes = [IsAdminUserOrReadOnly]
     serializer_class= FlavourSerializer
     queryset= flavours.objects.all()