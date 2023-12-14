from rest_framework.views import APIView
from rest_framework.response import Response
from django.core import serializers
from django.http import HttpResponse
from .models import Event
from .serializers import EventSerializer


class EventsView(APIView):
    serializer_class = EventSerializer

    def get(self, request):
        events = Event.objects.all()
        events_json = serializers.serialize('json', events)
        return HttpResponse(events_json, content_type='application/json')

    def post(self, request):
        serializer = EventSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(True)

    # def get_b

