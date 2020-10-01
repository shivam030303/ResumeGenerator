from django.urls import path
from . import views
import numpy as np

urlpatterns = [
    path('', views.templates, name='resumeTemplates')
]
