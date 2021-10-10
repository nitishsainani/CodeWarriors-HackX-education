from rest_framework import views
from rest_framework import viewsets
from rest_framework import filters 
from .models import Company, CompanyRating, Task, TaskSubmission
from .serializers import CompanyRatingSerializer, CompanySerializer, TaskSerializer, TaskSubmissionSerializer
from url_filter.integrations.drf import DjangoFilterBackend
from rest_framework.response import Response

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
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    #filter_fields = ['id','company_name',]
    #search_fields = ['company_name',]
    ordering = ['-created_at',]

class TaskSubmissionViewSet(viewsets.ModelViewSet):
    queryset = TaskSubmission.objects.all()
    serializer_class = TaskSubmissionSerializer 
    permission_classes = []

class RatingView(views.APIView):
    permission_classes = []

    def get(self, request, format=None):
        companies = Company.objects.all()
        company_ratings = []
        for company in companies:
            ratings = CompanyRating.objects.filter(company=company)
            rated_by = 0
            avg_rating = 0
            for rating in ratings:
                avg_rating += rating.rating
                rated_by += 1
            
            if rated_by:
                avg_rating /= rated_by

            response = {"company_id" : company.id, "company_name": company.company_name, "logo": company.logo.url,  "rating": avg_rating, "rated_by":rated_by }
            company_ratings.append(response)
        
        return Response(company_ratings)