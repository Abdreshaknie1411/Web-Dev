from django.contrib import admin
from .models import Company,Vacancy

# Register your models here.
class MemberAdmin(admin.ModelAdmin):
    list_display = ("name","salary","company__name")
    
admin.site.register(Company)
admin.site.register(Vacancy,MemberAdmin)
