from django.db import models
#from accounts.models import User
from tags.models import Tag
from candidates.models import Candidate
from base_models.models import BaseTimestampModel


class Company(BaseTimestampModel):
    user = models.OneToOneField('accounts.User', on_delete=models.CASCADE)
    company_name = models.CharField(default="", null=True, blank=True, max_length=50, )
    logo = models.ImageField(null=True, blank=True)
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return "Company: {}".format(self.company_name)


class CompanyRating(BaseTimestampModel):
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE, related_name='user_ratings')
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='company_ratings')
    rating = models.PositiveIntegerField()

    class Meta:
        unique_together = ('candidate', 'company', )

    def __str__(self):
        return "{} {} - {}".format(self.candidate, self.rating, self.company)


class Task(BaseTimestampModel):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='tasks')
    task_name = models.CharField(max_length=100)
    issue_link = models.URLField()
    points = models.PositiveIntegerField()
    tags = models.ManyToManyField(Tag)
    is_open = models.BooleanField()

    def __str__(self):
        return "{} : {}".format(self.company.company_name, self.task_name)


class TaskSubmission(BaseTimestampModel):
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='submissions')
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE, related_name='submissions')
    submission_link = models.URLField()
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return "{} : {}".format(self.task.task_name, self.candidate.user.first_name)

    class Meta:
        unique_together = ('task', 'candidate', )
