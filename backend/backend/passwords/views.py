from .models import Password
from rest_framework.permissions import IsAuthenticated
from rest_framework import serializers, viewsets

# Serializers define the API representation.
class PasswordSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Password
        fields = ['id', 'app_name', 'category', 'password', 'tags', 'created_at']

# ViewSets define the view behavior.
class PasswordViewSet(viewsets.ModelViewSet):
    serializer_class = PasswordSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Password.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)