from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    is_candidate = models.BooleanField(default=False)
    is_company = models.BooleanField(default=False)
