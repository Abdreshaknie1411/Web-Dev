from rest_framework import serializers
from .models import Univercity,Internship
from django.contrib.auth.models import User

class UniSerializers(serializers.ModelSerializer):
    class Meta:
        model=Univercity
        fields = "__all__"
        
class InternshipSerializers(serializers.ModelSerializer):
    class Meta:
        model = Internship
        fields="__all__"

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model=User
        fields = ['username','password']
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        user.is_active = True
        user.save()
        return user


