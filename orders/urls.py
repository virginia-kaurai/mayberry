from django.urls import path
from .views import OrdersList


app_name = "orders"
urlpatterns =[


path("orderslist/", OrdersList.as_view(), name="orderslist")

]