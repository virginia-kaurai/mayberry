from django.shortcuts import render

from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from .serializers import UserSerializer
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication


class RegisterView(APIView):
    def post(self, request):
        serializedData = UserSerializer(data = request.data)
        if serializedData.is_valid():
            serializedData.save()
            return Response({'message': 'user created successfully, please login'}, status=status.HTTP_201_CREATED)
        return Response(serializedData.errors, status=status.HTTP_400_BAD_REQUEST)
    

def get_token_for_user(user):
    refresh = RefreshToken.for_user(user)
    return({
        'refresh': str(refresh),
        'access': str(refresh.access_token)
    })
    
class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(email=email, password=password)

        if user is not None:
            token = get_token_for_user(user)
            response = Response({'message': 'logged in successfully', "user": user.id})
            response.set_cookie(
                key='access_token',
                value=token['access'],
                httponly=True,
                samesite='None',
                secure=True
            )
            response.set_cookie(
                key='refresh_token',
                value=token['refresh'],
                httponly=True,
                samesite='None',
                secure=True
            )
            return response
        else:
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('access_token')
        response.delete_cookie('refresh_token')
        response.data = {'message': 'logged out'}
        return response
    


    class UserDetailView(APIView):
     permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        if user.role == "STUDENT":
            customer_profile = user.customer_profile
            data = {
                "id": user.id,
               
                "first_name": user.first_name,
                "last_name": user.last_name,
                "email": user.email,
                "role": user.role,
               
            }
            return Response(data, status=status.HTTP_200_OK)
        elif user.role == "LECTURER":
            lecturer_profile = user.lecturer_profile
            data = {
                "id": user.id,
                "login_id": user.login_id,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "email": user.email,
                "role": user.role,
                "department": lecturer_profile.department.name
            }
            return Response(data, status=status.HTTP_200_OK)