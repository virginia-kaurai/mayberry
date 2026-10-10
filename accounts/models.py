from django.db import models
from django.contrib.auth.models import AbstractUser 
from django.conf import settings





   

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





class CustomerProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='customer_profile'
    )
    address = models.CharField(max_length=255, blank=True)
    phone_number = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return f"{self.user.email} - Customer Profile"


class AdminProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='admin_profile'
    )
    department = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return f"{self.user.email} - Admin Profile"