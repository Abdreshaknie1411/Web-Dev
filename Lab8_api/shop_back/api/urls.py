from django.urls import path 
from .views import (ListOfProduct,home,ViewDetailProduct,ViewCategoryList,ViewDetailCategory,ViewProductByCategory)


urlpatterns = [
    path('',home,name='home'),
    path('products/',ListOfProduct.as_view(),name='products-list'),
    path('products/<int:id>',ViewDetailProduct.as_view(),name='detail-product'),
    path('categories/',ViewCategoryList.as_view(),name='category-list'),
    path('categories/<int:id>',ViewDetailCategory.as_view(),name='detail-category'),
    path('categories/<int:id>/products',ViewProductByCategory.as_view(),name='view-producs')
]
