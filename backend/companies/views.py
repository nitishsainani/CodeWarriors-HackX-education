from rest_framework import viewsets
from rest_framework import filters 
from .models import Company, CompanyRating, Task, TaskSubmission
from .serializers import CompanyRatingSerializer, CompanySerializer, TaskSerializer, TaskSubmissionSerializer
# from url_filter.integrations.drf import DjangoFilterBackend

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer 
    permission_classes = []
    # filter_backends = [filters.SearchFilter, filters.OrderingFilter, DjangoFilterBackend]
    # filter_fields = ['id','company_name',]
    # search_fields = ['company_name',]
    # ordering = ['id',]

class CompanyRatingViewSet(viewsets.ModelViewSet):
    queryset = CompanyRating.objects.all()
    serializer_class = CompanyRatingSerializer 
    permission_classes = []

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer 
    permission_classes = []

class TaskSubmissionViewSet(viewsets.ModelViewSet):
    queryset = TaskSubmission.objects.all()
    serializer_class = TaskSubmissionSerializer 
    permission_classes = []