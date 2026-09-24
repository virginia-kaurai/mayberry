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


class OrdersList(generics.ListCreateAPIView):
    serializer_class =  OrdersSerializers
    queryset = Order.objects.all()
    
class DeleteOrders(APIView):
    def delete(self,request,pk):
            orders= Order.objects.get(pk=pk)
            orders.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
    
    