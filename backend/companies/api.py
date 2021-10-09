from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, CompanyRatingViewSet, TaskViewSet, TaskSubmissionViewSet 

router = DefaultRouter()
router.register('views', CompanyViewSet)
router.register('ratings', CompanyRatingViewSet)
router.register('tasks', TaskViewSet)
router.register('task-submissions', TaskSubmissionViewSet)

urlpatterns = router.urls
