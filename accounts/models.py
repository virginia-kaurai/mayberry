from django.db import models
from django.contrib.auth import AbstractUser

class User(AbstractUser):
    firstname = models.CharField(max_length=50)
    lasttname = models.CharField(max_length=50)
    email= models.EmailField()
    is_superuser = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)

  
