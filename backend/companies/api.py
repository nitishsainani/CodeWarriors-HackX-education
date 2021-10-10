from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, CompanyRatingViewSet, TaskViewSet, TaskSubmissionViewSet 
# from .views import RatingView
# from django.urls import path, include 

router = DefaultRouter()
router.register('views', CompanyViewSet)
router.register('ratings', CompanyRatingViewSet)
router.register('tasks', TaskViewSet)
router.register('task-submissions', TaskSubmissionViewSet)

urlpatterns = router.urls

# urlpatterns = [
#     path('', include(router.urls)), 
#     path('modified_ratings', RatingView.as_view()), 
# ]