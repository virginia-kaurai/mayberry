from django.db import models
from django.contrib.auth.models import AbstractUser ,BaseUserManager
from django.conf import settings


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra):
        if not email:
            raise ValueError("Email is required")
        user = self.model(email=self.normalize_email(email), **extra)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **extra):
        extra.setdefault("is_staff", True)
        extra.setdefault("is_superuser", True)
        return self.create_user(email, password, **extra)


   

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

    objects = UserManager()


    def __str__(self):
        return self.email








