from django.db import models


class Event(models.Model):
    scope = models.CharField(max_length=10)
    name = models.CharField(max_length=30)
    image = models.CharField(max_length=50)
    description = models.TextField()
    entry_fee = models.PositiveIntegerField()
    prize = models.PositiveIntegerField()
    members = models.PositiveIntegerField()
    date = models.DateField()
    starttime = models.TimeField()
    endtime = models.TimeField(blank=True)
    location = models.CharField(max_length=50)


class Entry(models.Model):
    name = models.CharField(max_length=30)
    ph = models.CharField(max_length=12)
    clg = models.CharField(max_length=30)
    clgid = models.CharField(max_length=15, blank=True)
    aad = models.CharField(max_length=15)
    event = models.CharField(max_length=30)
