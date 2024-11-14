from django.urls import path
from .views import RegisterUserView, UserProfileView, login_view

urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='register'),
    path('login/', login_view, name='login'),
    path('user/profile/', UserProfileView.as_view(), name='user-profile'),
]
