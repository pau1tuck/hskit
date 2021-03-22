from django.db import models
from versatileimagefield.fields import VersatileImageField


class Course(models.Model):

    id = models.SmallIntegerField(
        primary_key=True, serialize=False, verbose_name='ID')
    name = models.CharField(max_length=256)
    slug = models.SlugField(max_length=32)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    image = VersatileImageField(
        upload_to='images/course-images', blank=True, null=True)
    banner = VersatileImageField(
        upload_to='images/course-banners', blank=True, null=True)


class Stage(models.Model):
    course = models.ForeignKey(Course,
                               related_name='stage', on_delete=models.CASCADE)
    stage_id = models.SmallIntegerField()
    name = models.CharField(max_length=256)
    slug = models.SlugField(max_length=32)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, editable=True)
    image = VersatileImageField(
        upload_to='images/stage-images', blank=True, null=True)
    banner = VersatileImageField(
        upload_to='images/stage-banners', blank=True, null=True)


class Level(models.Model):
    stage = models.ForeignKey(Stage,
                              related_name='level', on_delete=models.CASCADE)
    level_id = models.SmallIntegerField()
    name = models.CharField(max_length=256, blank=True)
    slug = models.SlugField(max_length=32)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, editable=True)
    image = VersatileImageField(
        upload_to='images/level-images', blank=True, null=True)
    banner = VersatileImageField(
        upload_to='images/level-banners', blank=True, null=True)


class Vocabulary(models.Model):
    simplified_chinese = models.CharField(max_length=16)
    traditional_chinese = models.CharField(max_length=16, blank=True)
    pinyin = models.CharField(max_length=64)
    pinnum = models.CharField(max_length=64, blank=True)
    pinplain = models.CharField(max_length=64, blank=True)
    english = models.CharField(max_length=128)

    def __str__(self):
        return '%s %s' % (self.simplified_chinese, self.english)

    class Meta:
        verbose_name = u'Vocabulary'
        verbose_name_plural = u'Vocabulary'


class Vocabulary_Group(models.Model):
    lesson_id = models.IntegerField()
    character = models.ManyToManyField(Vocabulary)

    def __str__(self):
        return '%d' % (self.lesson_id)
