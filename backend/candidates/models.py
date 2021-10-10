from django.db import models
#from accounts.models import User
from tags.models import Tag
from base_models.models import BaseTimestampModel


class Candidate(BaseTimestampModel):
    user = models.OneToOneField('accounts.User', on_delete=models.CASCADE)
    points = models.PositiveBigIntegerField(default=0)
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return "Candidate: {}".format(self.user.first_name)


class CandidatePoints(BaseTimestampModel):
    candidate = models.ForeignKey(Candidate, on_delete=models.CASCADE, related_name='company_points')
    company = models.ForeignKey('companies.Company', on_delete=models.CASCADE, related_name="candidate_points")
    points = models.PositiveBigIntegerField(default=0)

    class Meta:
        unique_together = ('candidate', 'company', )

    def __str__(self):
        return "{} {}pts.".format(self.candidate.user.first_name, self.points)