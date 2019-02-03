from django.shortcuts import render
from django.http import JsonResponse
from .models import interEvents, intraEvents
from django.core import serializers


def post_list(request):
    inter = interEvents.objects.all()
    intra = intraEvents.objects.all()
    return render(request, 'index.html', {"inter": inter, "intra": intra})


def ajaxtest(request):
    return render(request, 'ajaxtest.html', {})


def returnJson(request):
    inter = serializers.serialize("json", interEvents.objects.all())
    intra = serializers.serialize("json", intraEvents.objects.all())
    return JsonResponse({"inter": inter, "intra": intra})
