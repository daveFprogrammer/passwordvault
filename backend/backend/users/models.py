from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    profile_image = models.ImageField(
        upload_to="profile_images/",
        blank=True,
        null=True
    )
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    two_factor_auth = models.BooleanField(default=False)
