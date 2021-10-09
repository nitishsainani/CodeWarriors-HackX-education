from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from candidates.models import Candidate
from companies.models import Company 
from django.dispatch import receiver

class User(AbstractUser):
    is_candidate = models.BooleanField(default=False)
    is_company = models.BooleanField(default=False)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwagrs):
    if instance.is_candidate:
        Candidate.objects.get_or_create(user=instance)
    elif instance.is_company:
        Company.objects.get_or_create(user=instance)