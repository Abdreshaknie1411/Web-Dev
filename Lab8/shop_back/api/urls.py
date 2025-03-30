from django.urls import path 
from .views import (home,ListAllProducts,OneProduct,ListAllCategory,OneCategories,ListOfProductsByCategory)

urlpatterns = [
    path('',home,name="home"),
    path('products/',ListAllProducts.as_view(),name='product-list'),
    path('products/<int:id>',OneProduct.as_view(),name='one-product'),
    path('categories/',ListAllCategory.as_view(),name='categories'),
    path('categories/<int:id>',OneCategories.as_view(),name='one-category'),
    path('categories/<int:id>/products',ListOfProductsByCategory.as_view(),name='oneProducts by Category')
]
