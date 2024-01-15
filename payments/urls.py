from django.urls import path
from . import views

urlpatterns = [
    path('', views. HomePageView.as_view(), name='home'),
    path('config', views.stripe_config, name='stripe_config'),
]