from django.shortcuts import get_object_or_404
from django.http import JsonResponse,HttpRequest
from django.views import View
from .models import Category,Product


# Create your views here.
def home(request):
    return JsonResponse({"message":" Welcome to my API"})

class ListAllProducts(View):
    def get(self,request):
        product=list(Product.objects.values("id","name","price","description","count","is_active","category__name"))
        return JsonResponse(product,safe=False,json_dumps_params={"indent": 2})
    def post(self,request):
        
    
class OneProduct(View):
    def get(self,request,id):
        product =  get_object_or_404(Product,id=id)
        return JsonResponse({
            "id":product.id,
            "name":product.name,
            "price":product.price,
            "description":product.description,
            "count":product.count,
            "is_active":product.is_active,
            "category":product.category.name if product.category else None
        },json_dumps_params={"indent": 2})

class ListAllCategory(View):
    def get(self,request):
        product=list(Category.objects.values("name"))
        return JsonResponse(product,safe=False,json_dumps_params={"indent": 2})
    
class OneCategories(View):
    def get(self,request,id):
        product=get_object_or_404(Category,id=id)
        date={"id":product.id,"name":product.name}
        return JsonResponse(date,json_dumps_params={"indent": 2})
    
class  ListOfProductsByCategory(View):
    def get(self,request,id):
        category=get_object_or_404(Category,id=id)
        products = list(category.products.values("id","name","price","description","count","is_active","category__name"))
        return JsonResponse(products,safe=False,json_dumps_params={"indent": 2})
    
    
