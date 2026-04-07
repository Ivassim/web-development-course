from rest_framework import viewsets, permissions as drf_permissions
from rest_framework.exceptions import PermissionDenied
from .models import Event, Participant, Registration
from .serializers import EventSerializer, ParticipantSerializer, RegistrationSerializer
from .permissions import IsOwnerOrAdminOrReadOnly, IsEventOwnerOrAdmin

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsOwnerOrAdminOrReadOnly]

    def perform_create(self, serializer):
        # On lie automatiquement l'événement à celui qui le crée
        serializer.save(created_by=self.request.user)

class ParticipantViewSet(viewsets.ModelViewSet):
    queryset = Participant.objects.all()
    serializer_class = ParticipantSerializer
    
    def get_permissions(self):
        # SEUL le SuperAdmin peut Créer/Modifier/Supprimer un participant
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [drf_permissions.IsAdminUser()] 
        # Tout utilisateur connecté peut voir la liste
        return [drf_permissions.IsAuthenticated()]

class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer
    permission_classes = [IsEventOwnerOrAdmin]

    def perform_create(self, serializer):
        # 1. On récupère l'événement choisi dans le formulaire
        event = serializer.validated_data['event']
        
        # 2. SÉCURITÉ CRUCIALE : 
        # Si je ne suis pas superuser ET que je n'ai pas créé cet événement
        if not self.request.user.is_superuser and event.created_by != self.request.user:
            raise PermissionDenied("Erreur : Vous ne pouvez pas gérer les inscriptions d'un événement qui ne vous appartient pas.")
        
        # 3. Si c'est OK, on enregistre
        serializer.save()