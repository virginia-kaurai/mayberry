from django.db import models

class Category(models.Model):
    category_choices= [
        ("BD", "Birthday Cake"),
    ("WD", "Wedding Cake"),
    ("AN", "Anniversary Cake"),
    ("GR", "Graduation Cake"),
    ("CP", "Cupcake"),
    ("CH", "Cheesecake"),
]
    categoryname = models.CharField(max_length=2, choices=category_choices)
    description = models.TextField()
  


class Products(models.Model):
    productname = models.CharField(max_length =100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')   
    description = models.TextField()
    product_image = models.ImageField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    flavour = models.CharField(max_length=100)
    size = models.CharField(max_length=50)
    is_available = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)

class ProductImage(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE, related_name='images')

    image = models.ImageField()

class flavour(models.Model):
    name= models.CharField(max_length=100)
    decription = models.TextField()
    is_active = models.BooleanField(default=True)

class Size(models.Model):
    name= models.CharField(max_length=100)
    decription = models.TextField()
    is_active = models.BooleanField(default=True) 
    serves    = models.IntegerField()    

class cakes(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField(max_length=50) 
    image = models.ImageField(upload_to="cakes/")
    price = models.CharField(30)


class flavours(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    is_available = models.BooleanField(default=True)
    



     
