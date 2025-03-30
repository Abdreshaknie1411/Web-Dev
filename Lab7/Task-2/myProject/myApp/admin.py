from django.contrib import admin
from .models import Student

class MemberAdmin(admin.ModelAdmin):
    list_display = ("name","age","gpa")
    


admin.site.register(Student,MemberAdmin)

# Register your models here.
