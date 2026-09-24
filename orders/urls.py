from django.urls import path
from .views import OrdersList,DeleteOrders


app_name = "orders"
urlpatterns =[


path("orderslist/", OrdersList.as_view(), name="orderslist"),
path("orders/delete/<int:pk>", DeleteOrders.as_view(), name="deleteorders")

]