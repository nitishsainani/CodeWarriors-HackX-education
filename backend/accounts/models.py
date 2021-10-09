from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    is_candidate = models.BooleanField()
    is_company = models.BooleanField()
