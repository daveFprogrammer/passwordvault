from django.urls import path
from .views import RegisterUserView, login_view

urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='register'),
    path('login/', login_view, name='login'),
]
