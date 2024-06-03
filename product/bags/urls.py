from django.urls import path
from .views import (
    ProductListCreate,
    ProductUpdate,
    ProductDestroy,
    CategoryListCreate,
    CategoryUpdate,
    CategoryDestroy,
    ProductDetails,
    CategoryDetails
)

urlpatterns = [
    path('products/<int:pk>/', ProductDetails.as_view(), name='product-details'),
    path('products/', ProductListCreate.as_view(), name='product-list-create'),
    path('products/update/<int:pk>/', ProductUpdate.as_view(), name='product-update'),
    path('products/<int:pk>/delete/', ProductDestroy.as_view(), name='product-destroy'),
    path('categories/', CategoryListCreate.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryDetails.as_view(), name='category-details'),
    path('categories/update/<int:pk>/', CategoryUpdate.as_view(), name='category-update'),
    path('categories/<int:pk>/delete/', CategoryDestroy.as_view(), name='category-destroy'),
]

