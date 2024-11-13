from django.contrib.auth.models import User
from django.db import models

class Password(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    app_name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    tags = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
