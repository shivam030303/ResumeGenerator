from django.urls import path, include
from . import views
from django.db import models

urlpatterns = [
    path('', include('django.contrib.auth.urls')),
    path('register/', views.register, name='userRegister'),
    path('userLogin/', views.userLogin, name='userLogin'),

]
