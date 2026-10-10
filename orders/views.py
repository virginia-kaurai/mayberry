from django.shortcuts import render

from django.shortcuts import render
from orders.models import Order
from accounts.models import User
from .serializers import OrdersSerializers
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, BasePermission,SAFE_METHODS
from rest_framework.response import Response
from rest_framework import status
from cakes.models import Cake


class OrdersList(generics.ListCreateAPIView):
    serializer_class =  OrdersSerializers
    queryset = Order.objects.all()


    def perform_create(self, serializer):
        cakename = self.request.data.get("cakename")
        quantity = int(self.request.data.get("quantity", 1))

        cake = Cake.objects.filter(name__iexact=cakename).first()
        total = cake.price * quantity if cake else 0

        serializer.save(total=total)
    
class DeleteOrders(APIView):
    def delete(self,request,pk):
            orders= Order.objects.get(pk=pk)
            orders.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
    
    