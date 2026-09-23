from django.urls import path
from .views import CakeView


app_name = 'cakes'
urlpatterns = [
    path('cakeslist/', CakeView.as_view(), name='cake-list'),
    path('cakes/<int:pk>/', CakeView.as_view(), name='cake-detail'),
    path('cakes/add/',CakeView.as_view(), name='add-cake' ),
    path('cakes/delete/<int:pk>',CakeView.as_view(), name='delete-cake' )
]