from django.db import models

class Payment(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    order = models.ForeignKey('orders.Order', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method_choices = [
        ("CC", "Credit Card"),
        ("PP", "PayPal"),
        ("BT", "Bank Transfer"),
    ]
    payment_method = models.CharField(max_length=2, choices=payment_method_choices)
    payment_status_choices = [
        ("P", "Pending"),
        ("C", "Completed"),
        ("F", "Failed"),
    ]
    payment_status = models.CharField(max_length=1, choices=payment_status_choices, default="P")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Payment of {self.amount} for Order {self.order.order_number} by {self.user.username}"
