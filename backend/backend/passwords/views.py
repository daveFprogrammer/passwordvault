from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import serializers, viewsets
from .models import Password

# Serializers definiscono la rappresentazione dell'API
class PasswordSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Password
        fields = ['id', 'app_name', 'category', 'password', 'tags', 'created_at']

# ViewSets definiscono il comportamento della vista
class PasswordViewSet(viewsets.ModelViewSet):
    serializer_class = PasswordSerializer
    queryset = Password.objects.all()
    permission_classes = [IsAuthenticated]  # Protegge l'accesso con permessi
    authentication_classes = [JWTAuthentication]  # Aggiungi il supporto per JWT

    def get_queryset(self):
        # Filtra le password in base all'utente autenticato
        return Password.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Salva la password associandola all'utente che sta creando l'entry
        serializer.save(user=self.request.user)
