"""
URL configuration for myproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from myapp import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.index, name='index'),
    path('serve-html1/', views.serve_sample1, name='serve_sample1'),
    path('serve-html2/', views.serve_sample2, name='serve_sample2'),
    path('posts/', views.blog_post_list, name='blog_post_list'),
    path('admin/', admin.site.urls),
    path('posts/add/', views.add_blog_post, name='add_blog_post'),
    path('delete_post/<int:post_id>/', views.delete_post, name='delete_post'),
    path('test_db/', views.test_db, name='test_db'),
    path('accounts/', include('allauth.urls')),
    path('login/', views.login, name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('get_hotel_data/', views.get_hotel_data, name='get_hotel_data'),
    path('search_hotel_data/', views.search_hotel_data, name='search_hotel_data'),
    path('get_review_data/', views.get_review_data, name='get_review_data'),
    path('add_review/', views.add_review, name='add_review'),
    path('update_review/', views.update_review, name='update_review'),
    path('delete_review/', views.delete_review, name='delete_review'),
]

# urlpatterns = [
#     path('api/', include(api_urlpatterns)),
# ] 