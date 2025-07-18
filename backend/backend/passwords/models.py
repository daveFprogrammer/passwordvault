from django.conf import settings
from django.db import models

class Password(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="user_passwords", default=1)
    app_name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    tags = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
