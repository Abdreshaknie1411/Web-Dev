from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from .models import Univercity,Internship
from .serializers import UniSerializers,InternshipSerializers,RegisterSerializer
from rest_framework.response import Response

# Create your views here.

class Register(APIView):
    def post(self,request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message':'User registered successfully',})
        return Response(serializer.error)

class ViewUnivercity(APIView):
    def get(self,request):
        univer = Univercity.objects.all()
        serializer = UniSerializers(univer,many=True)
        return Response(serializer.data)
class OneUnivercity(APIView):
    def get(self,request,id):
        univer = get_object_or_404(Univercity,id=id)
        serializer = UniSerializers(univer)
        return Response(serializer.data)
    
class ViewInternshipByUniverName(APIView):
    def get(self,request,id):
        univers = get_object_or_404(Univercity,id=id)
        internship = univers.univer.all()
        serializer = InternshipSerializers(internship,many=True)
        return Response(serializer.data)
        
class ViewInternship(APIView):
    def get(self,request):
        internship = Internship.objects.all()
        serializer = InternshipSerializers(internship,many=True)
        return Response(serializer.data)
    
class OneInternship(APIView):
    def get(self,request,id):
        internship = get_object_or_404(Internship,id=id)
        serializer = InternshipSerializers(serializer,many =True)
        return Response(serializer.data)

class SortInternship(APIView):
    def get(self,request):
        internship = Internship.objects.order_by('-step')[:10]
        serializer = InternshipSerializers(internship,many=True)
        return Response(serializer.data)
    
    
        