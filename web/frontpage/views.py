from django.shortcuts import render
from django.http import JsonResponse
from .models import Event
from django.core import serializers


def post_list(request):
    inter = Event.objects.filter(scope="inter")
    intra = Event.objects.filter(scope="intra")
    return render(request, 'index.html', {"inter": inter, "intra": intra})


def ajaxtest(request):
    return render(request, 'ajaxtest.html', {})


def returnJson(request):
    inter = serializers.serialize("json", Event.objects.filter(scope="inter"))
    intra = serializers.serialize("json", Event.objects.filter(scope="intra"))
    return JsonResponse({"inter": inter, "intra": intra})
