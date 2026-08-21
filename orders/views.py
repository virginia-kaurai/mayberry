from django.shortcuts import render

from django.shortcuts import render
from orders.models import Order
from accounts.models import User
from .serializers import OrdersSerializers
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, BasePermission,SAFE_METHODS


class OrdersList(generics.ListCreateAPIView):
    serializer_class =  OrdersSerializers
    queryset = Order.objects.all()
    
