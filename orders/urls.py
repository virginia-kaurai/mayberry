from django.urls import path
from .views import OrdersList


app_name = "orders"
urlpatterns =[


path("admin/orderslist/", OrdersList.as_view(), name="orderslist")

]