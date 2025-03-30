from django.shortcuts import get_object_or_404
from django.http import HttpResponse
from rest_framework.views import APIView 
from .serializers import SerializerProduct,SerializerCategory
from django.template import loader
from rest_framework import status
from .models import Product,Category
from rest_framework.response import Response

# Create your views here.


def home(request):
    template = loader.get_template('api.html')
    return HttpResponse(template.render())


class ListOfProduct(APIView):
    def get(self,request):
        products=Product.objects.all()
        serializer=SerializerProduct(products,many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer = SerializerProduct(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    
class ViewDetailProduct(APIView):
    def get(self,request,id):
        product=get_object_or_404(Product,id=id)
        serializer = SerializerProduct(product)
        return Response(serializer.data)
    
class ViewCategoryList(APIView):
    def get(self,request):
        category = Category.objects.all()
        serializer = SerializerCategory(category,many=True)
        return Response(serializer.data)

class ViewDetailCategory(APIView):
    def get(self,request,id):
        category = get_object_or_404(Category,id=id)
        serializer = SerializerCategory(category)
        return Response(serializer.data)
    
class ViewProductByCategory(APIView):
    def get(self,request,id):
        category = get_object_or_404(Category,id=id)
        product=category.products.all()
        serializer = SerializerProduct(product,many=True)
        return Response(serializer.data)
