from rest_framework import serializers
from .models import Univercity,Internship

class UniSerializers(serializers.ModelSerializer):
    class Meta:
        model=Univercity
        fields = "__all__"
        
class InternshipSerializers(serializers.ModelSerializer):
    class Meta:
        model = Internship
        fields="__all__"




