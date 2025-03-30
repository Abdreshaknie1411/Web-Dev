from rest_framework import serializers
from .models import Category,Product

class SerializerProduct(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'

class SerializerCategory(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields='__all__'
        
