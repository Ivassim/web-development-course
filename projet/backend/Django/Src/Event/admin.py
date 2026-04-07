from django.contrib import admin
from .models import Event, Participant, Registration


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    # 'get_current_status' est une méthode de la classe, pas la @property directement
    list_display = ('title', 'date', 'end_date', 'status', 'get_current_status', 'city', 'created_by')
    list_filter = ('status', 'city', 'date')
    search_fields = ('title', 'city')
    readonly_fields = ('created_at', 'updated_at')

    @admin.display(description='Statut calculé')
    def get_current_status(self, obj):
        # On appelle la @property du modèle
        return obj.current_status


@admin.register(Participant)
class ParticipantAdmin(admin.ModelAdmin):
    list_display = ('last_name', 'first_name', 'email', 'phone')
    search_fields = ('last_name', 'email')


@admin.register(Registration)
class RegistrationAdmin(admin.ModelAdmin):
    list_display = ('event', 'participant', 'registered_at')
    list_filter = ('event', 'registered_at')
    search_fields = ('participant__last_name', 'event__title')