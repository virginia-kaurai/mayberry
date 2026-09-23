from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Cake
from .serializers import CakeSerializer
from rest_framework import status


class CakeView(APIView):
    def get(self,request):
        cakes = Cake.objects.all()
        serializer = CakeSerializer(cakes, many=True)
        return Response(serializer.data)

    
    def post(self,request):
        serializer = CakeSerializer(data =request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self,request,pk):
        cakes= Cake.objects.get(pk=pk)
        serializer = CakeSerializer(cakes, data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response( serializer.errors, status= status.HTTP_400_BAD_REQUEST)




    def delete(self,request,pk):
        cakes= Cake.objects.get(pk=pk)
        cakes.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
