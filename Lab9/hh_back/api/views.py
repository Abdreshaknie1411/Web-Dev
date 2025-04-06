from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.views import APIView
from .models import Company,Vacancy
from .serializers import CompanySerializer,VacancySerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
def home(request):
    return JsonResponse({"message":"Welcome to my API"})

class ListOfAllCompany(APIView):
    def get(self,request):
        companies = Company.objects.all()
        serializers = CompanySerializer(companies,many=True)
        return Response(serializers.data)
    def post(self,request):
        serializer =CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    
class ViewDetailCompany(APIView):
    def get(self,request,id):
        company = get_object_or_404(Company,id=id)
        serializers = CompanySerializer(company)
        return Response(serializers.data)
    def delete(self,request,id):
        company = get_object_or_404(Company,id=id)
        company.delete()
        return Response({"message": "Product deleted successfully"},status=status.HTTP_204_NO_CONTENT)
    
class ViewVacancyByCompany(APIView):
    def get(self,request,id):
        company = get_object_or_404(Company,id=id)
        vacancies = company.vacancy.all()
        serializer=CompanySerializer(vacancies)
        return Response(serializer.data)
        

