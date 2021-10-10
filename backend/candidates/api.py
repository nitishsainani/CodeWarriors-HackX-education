from rest_framework.routers import DefaultRouter
from .views import CandidateViewSet, CandidateGetViewSet
from django.urls import path

router = DefaultRouter()
router.register('views', CandidateViewSet)

urlpatterns = router.urls + [
    path('get/', CandidateGetViewSet.as_view())
]
