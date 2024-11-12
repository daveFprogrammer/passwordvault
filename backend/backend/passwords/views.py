from .models import Password
from rest_framework import serializers, viewsets

# Serializers define the API representation.
class PasswordSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Password
        fields = ['id', 'app_name', 'category', 'password', 'tags', 'created_at']

# ViewSets define the view behavior.
class PasswordViewSet(viewsets.ModelViewSet):
    queryset = Password.objects.all()
    serializer_class = PasswordSerializer