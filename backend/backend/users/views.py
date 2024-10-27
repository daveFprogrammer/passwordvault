from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view

class RegisterUserView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(request, username=username, password=password)

    if user is not None:
        # Autenticazione riuscita
        return Response({"message": "Login riuscito!"}, status=status.HTTP_200_OK)
    else:
        # Autenticazione fallita
        return Response({"message": "Nome utente o password non corretti."}, status=status.HTTP_401_UNAUTHORIZED)