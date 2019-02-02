from django.db import models


class intraEvents(models.Model):
    name = models.CharField(max_length=30)
    image = models.CharField(max_length=50)
    description = models.TextField()
    entry_fee = models.PositiveIntegerField()
    prize = models.PositiveIntegerField()
    members = models.PositiveIntegerField()
    date = models.DateField()
    starttime = models.TimeField()
    endtime = models.TimeField()
    location = models.CharField(max_length=50)


class interEvents(models.Model):
    name = models.CharField(max_length=30)
    image = models.CharField(max_length=50)
    description = models.TextField()
    entry_fee = models.PositiveIntegerField()
    prize = models.PositiveIntegerField()
    members = models.PositiveIntegerField()
    date = models.DateField()
    starttime = models.TimeField()
    endtime = models.TimeField()
    location = models.CharField(max_length=50)
