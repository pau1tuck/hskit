from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils import timezone
from versatileimagefield.fields import VersatileImageField
from .managers import UserManager

class User(AbstractBaseUser, PermissionsMixin):

    def avatar_directory_path(self, instance, filename):
        return 'images/user-avatars/user_{0}'.format(instance.User.id)

    username = models.CharField(max_length=128, unique=False, blank=True)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=256, blank=True)
    last_name = models.CharField(max_length=256, blank=True)
    country = models.CharField(max_length=128, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_member = models.BooleanField(default=False)
    note = models.TextField(null=True, blank=True)
    date_joined = models.DateTimeField(default=timezone.now, editable=False)
    last_visit = models.DateTimeField(auto_now=True, editable=True)
    avatar = VersatileImageField(
        upload_to=avatar_directory_path, blank=True, null=True)

    USERNAME_FIELD = 'email'

    objects = UserManager()

    class Meta:
        verbose_name = u'User'
        verbose_name_plural = u'Users'

    def __str__(self):
        return '%s' % (self.email)

    @property
    def full_name(self):
        return '%s %s' % (self.first_name, self.last_name)