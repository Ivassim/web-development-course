from rest_framework import serializers
from .models import Event, Participant, Registration

class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = '__all__'  # Expose : id, first_name, last_name, email, phone...

class RegistrationSerializer(serializers.ModelSerializer):
    # Champs en lecture seule pour faciliter l'affichage côté React
    event_title = serializers.ReadOnlyField(source='event.title')
    participant_name = serializers.ReadOnlyField(source='participant.last_name')

    class Meta:
        model = Registration
        fields = '__all__'

    def validate(self, data):
        """
        Validation de l'API : On réutilise la logique de ton modèle.
        """
        event = data['event']
        # On utilise ta propriété calculée current_status
        if event.current_status == 'COMPLETED':
            raise serializers.ValidationError(
                {"event": "Impossible de s'inscrire : l'événement est déjà terminé."}
            )
        if event.status == 'CANCELLED':
            raise serializers.ValidationError(
                {"event": "Impossible de s'inscrire : l'événement est annulé."}
            )
        return data

class EventSerializer(serializers.ModelSerializer):
    # On expose tes @property calculées pour que React les reçoive directement
    current_status = serializers.ReadOnlyField()
    duration_display = serializers.ReadOnlyField()
    full_address = serializers.ReadOnlyField()
    
    # Pour voir le nombre d'inscrits sans faire de requête supplémentaire
    participants_count = serializers.IntegerField(source='participants.count', read_only=True)

    class Meta:
        model = Event
        fields = [
            'id', 'title', 'description', 'date', 'end_date', 
            'address', 'city', 'country', 'status', 
            'current_status', 'duration_display', 'full_address', 
            'participants_count', 'created_by'
        ]