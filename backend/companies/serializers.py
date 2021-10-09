from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Company, CompanyRating, Task, TaskSubmission 
from tags.models import Tag
from candidates.models import Candidate
#from django_restql.mixins import DynamicFieldsMixin


class CompanySerializer(ModelSerializer):
    tags = serializers.PrimaryKeyRelatedField(queryset=Tag.objects.all(), many=True)

    class Meta:
        model = Company 
        fields = "__all__"
        read_only_fields = ["user"]

class CompanyRatingSerializer(ModelSerializer):
    candidate = serializers.PrimaryKeyRelatedField(queryset=Candidate.objects.all(), )
    company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all(), )

    class Meta:
        model = CompanyRating 
        fields = "__all__"


class TaskSerializer(ModelSerializer):
    company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all(), )
    tags = serializers.PrimaryKeyRelatedField(queryset=Tag.objects.all(), many=True)

    class Meta:
        model = Task 
        fields = "__all__"

class TaskSubmissionSerializer(ModelSerializer):
    candidate = serializers.PrimaryKeyRelatedField(queryset=Candidate.objects.all(), )
    task = serializers.PrimaryKeyRelatedField(queryset=Task.objects.all(), )
    
    class Meta:
        model = TaskSubmission 
        fields = "__all__"