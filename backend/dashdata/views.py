from django.http.response import JsonResponse
from django.shortcuts import render
from RPiSensor import getSpeedAndRpm

import random

# Create your views here.
def index(request):
    return render(request, 'index.html')

def speedData(request):
    speed, rpm = getSpeedAndRpm()
    distance = speed * 5/ 18 / 1000 * 3
    content = {
        "speed": speed,
        "rpm": rpm,
        "distance": distance
    }
    return JsonResponse(content)