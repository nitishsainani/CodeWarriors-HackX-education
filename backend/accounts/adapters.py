from allauth.account.adapter import DefaultAccountAdapter
import json

class CustomUserAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=True):
        """
        Saves a new `User` instance using information provided in the
        signup form.
        """
        user = super().save_user(request, user, form, False)
        user.first_name =  request.data.get('first_name', '')
        user.last_name = request.data.get('last_name', '')
        user.is_candidate = json.loads(request.data.get('is_candidate', 'false'))
        user.is_company = json.loads(request.data.get('is_company', 'false'))
        user.save()

        return user

