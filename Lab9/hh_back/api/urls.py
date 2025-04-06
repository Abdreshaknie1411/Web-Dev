from django.urls import path 
from .views import (home,ListOfAllCompany,ViewDetailCompany,ViewVacancyByCompany)

urlpatterns = [
    path('',home,name='home'),
    path('company/',ListOfAllCompany.as_view(),name='company-list'),
    path('company/<int:id>',ViewDetailCompany.as_view(),name='company-detail'),
    path('company/<int:id>/vacancies',ViewVacancyByCompany.as_view(),name='vacancies')
]
