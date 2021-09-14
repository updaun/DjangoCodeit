from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('index/', views.index),
    # path('chicken/', views.chicken)
    path('menu/<str:food>/', views.food_detail)
]