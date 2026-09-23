from rest_framework.permissions import BasePermission
from .models import User



    
class IsLecturer(BasePermission):

    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and request.user.role == "lecturer"
        )
    
class IsAdmin(BasePermission):

    def has_permission(self, request, view):
        return (
            request.user.is_authenticated
            and request.user.role == "admin"
        )
    
class IsLecturerOrAdmin(BasePermission):

    def has_permission(self, request, view):

        return (
            request.user.is_authenticated
            and request.user.role in [
                "lecturer",
                "admin"
            ]
        )