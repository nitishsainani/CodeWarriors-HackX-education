from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Candidate, CandidatePoints
from tags.serializers import TagSerializer
from tags.models import Tag


class CandidateSerializer(ModelSerializer):
    tags = serializers.PrimaryKeyRelatedField(queryset=Tag.objects.all(), many=True)

    class Meta:
        model = Candidate
        fields = ["id", "user", "points", "tags", ]
        read_only_fields = ["user"]
