from django.db import models
from django.contrib.auth.models import AbstractUser
"""
на данном этапе пока реализована простейшая модель пользователя без привязки с основному функционалу сайта
далее поля буду добавляться и редактироваться
"""

# Модель пользователя
class User(AbstractUser):

    email = models.EmailField(max_length=256, blank=True, unique=True)
