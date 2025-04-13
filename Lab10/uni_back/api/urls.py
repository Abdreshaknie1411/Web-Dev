from django.urls import path
from .views import (ViewUnivercity, OneUnivercity,ViewInternshipByUniverName,ViewInternship,OneInternship,SortInternship,Register)
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('register/',Register.as_view()),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('univercities/',ViewUnivercity.as_view()),
    path('univercities/<int:id>', OneUnivercity.as_view()),
    path('univercities/<int:id>/internship',ViewInternshipByUniverName.as_view()),
    path('internship/',ViewInternship.as_view()),
    path('internship/<int:id>',OneInternship.as_view()),
    path('internship/sort/',SortInternship.as_view())
    
    
]
