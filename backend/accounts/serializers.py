from rest_framework.serializers import ModelSerializer
from models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'is_company', 'is_candidate', ]
