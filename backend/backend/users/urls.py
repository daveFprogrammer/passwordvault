from django.urls import path
from .views import RegisterUserView, UserProfileView, login_view
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='register'),
    path('login/', login_view, name='login'),
    path('user/profile/', UserProfileView.as_view(), name='user-profile'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
