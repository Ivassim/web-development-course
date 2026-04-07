from rest_framework import permissions

class IsOwnerOrAdminOrReadOnly(permissions.BasePermission):
    """
    Pour les Events : Seul le créateur ou l'Admin modifie.
    """
    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        if request.user.is_superuser:
            return True
        return getattr(obj, 'created_by', None) == request.user

class IsEventOwnerOrAdmin(permissions.BasePermission):
    """
    Pour les Registrations : Seul le créateur de l'ÉVÉNEMENT parent modifie.
    """
    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        if request.user.is_superuser:
            return True
        # On vérifie le créateur de l'événement lié à cette inscription
        return obj.event.created_by == request.user