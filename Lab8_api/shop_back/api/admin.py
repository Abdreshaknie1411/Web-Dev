from django.contrib import admin
from .models import Category,Product


class MemberAdmin(admin.ModelAdmin):
    list_display=("name","price","description")

admin.site.register(Product,MemberAdmin)
admin.site.register(Category)

# Register your models here.
