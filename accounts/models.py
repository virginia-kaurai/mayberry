from django.db import models
from django.contrib.auth.models import AbstractUser 
from django.conf import settings
from orders.models import Order




   

class User(AbstractUser):
    ROLE_CHOICES = [
         (
        'customer','Customer'
         ),
        ('admin', 'Admin'),
    ]

    role = models.CharField(
        max_length=50,
        choices=ROLE_CHOICES,
        default='customer'
    )
    email = models.EmailField(unique=True)
    username=None
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name']


    def __str__(self):
        return self.email






   