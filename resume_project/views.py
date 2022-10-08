from django.shortcuts import render
from django.contrib import admin
from django.urls import path, include
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from . import views

def home(request):
    return render(request, 'resume_data/preview1.html')
