from rest_framework import viewsets, views, response
from .models import Candidate
from .serializers import CandidateSerializer


class CandidateViewSet(viewsets.ModelViewSet):
    queryset = Candidate.objects.all()
    serializer_class = CandidateSerializer
    permission_classes = []


class CandidateGetViewSet(views.APIView):
    def get(self, request):
        user = self.request.user
        candidate = Candidate.objects.get(user=user)
        return response.Response(CandidateSerializer(candidate).data)
