from django.db import models
from django.conf import settings

class Order(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="orders"
    )
    order_number = models.CharField(max_length=20, unique=True)
    status_choices =[
        ("P", "Pending"),
        ("C", "Completed"),
        ("F", "Failed"),

    ]
    
    cake_name = models.CharField(max_length=100, null=True, blank=True)
    quantity = models.PositiveIntegerField(default=1)
    special_instructions = models.TextField(blank=True)
    delivery_date = models.DateField(null=True, blank=True)
    delivery_time = models.TimeField(null=True, blank=True)
    delivery_address = models.CharField(max_length=255, null=True, blank=True)

    customer_email = models.EmailField(null=True, blank=True)
    customer_name = models.CharField(max_length=255, null=True, blank=True)
    customer_phone = models.CharField(max_length=20, null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    total = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return f"{self.customer_name} - {self.cake_name}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey('products.Products', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.quantity} x {self.product.productname} for Order {self.order.order_number}"
    


class ShippingAddress(models.Model):
    order = models.OneToOneField(Order, on_delete=models.CASCADE, related_name='shipping_address')
    address_line1 = models.CharField(max_length=255)
    address_line2 = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=20)
    country = models.CharField(max_length=100)

    def __str__(self):
        return f"Shipping Address for Order {self.order.order_number}"    