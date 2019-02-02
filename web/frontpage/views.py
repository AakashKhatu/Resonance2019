from django.shortcuts import render
from .models import interEvents, intraEvents


def post_list(request):
    inter = interEvents.objects.all()
    intra = intraEvents.objects.all()
    return render(request, 'index.html', {"inter": inter, "intra": intra})
