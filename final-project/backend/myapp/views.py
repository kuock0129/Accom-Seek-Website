from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import loader
from .models import BlogPost
from .forms import BlogPostForm
from django.core.exceptions import ObjectDoesNotExist
import os
import pymysql
from django.contrib.auth.decorators import login_required
from dotenv import load_dotenv
#git clone https://Patrick8894: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@github.com/cs411-alawini/sp24-cs411-team065-DBMaster.git

dotenv_path = os.path.join(os.path.dirname(__file__), 'db.env')
load_dotenv(dotenv_path)

DB_HOST = os.getenv('DB_HOST')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_NAME = os.getenv('DB_NAME')

def index(request):
    return HttpResponse("Hello, Django!")

def serve_sample1(request):
    return render(request, 'sample1.html')

def serve_sample2(request):
    return render(request, 'sample2.html')

def blog_post_list(request):
    blog_posts = BlogPost.objects.all()
    # blog_posts = BlogPost.objects.filter(title='hello')
    return render(request, 'post_list.html', {'blog_posts': blog_posts})

@login_required
def add_blog_post(request):
    if request.method == 'POST':
        form = BlogPostForm(request.POST)
        if form.is_valid():
            blog_post = form.save(commit=False)
            # author, created = Author.objects.get_or_create(user=request.user)  # Check if the author exists, if not create it
            blog_post.author = request.user
            blog_post.save()
            return redirect('blog_post_list')  # Redirect to the list of blog posts after successful form submission
        else:
            print(form.errors)
    else:
        form = BlogPostForm()
    return render(request, 'add_post.html', {'form': form})

def delete_post(request, post_id):
    try:
        post = BlogPost.objects.get(id=post_id)
        post.delete()
    except ObjectDoesNotExist:
        pass  # Do nothing if the post does not exist
    return redirect('blog_post_list')

def test_db(request):
    connection = pymysql.connect(host=DB_HOST,
                                 user=DB_USER,
                                 password=DB_PASSWORD,
                                 db=DB_NAME,
                                 charset='utf8mb4',
                                 cursorclass=pymysql.cursors.DictCursor)
    try:
        with connection.cursor() as cursor:
            temp_min = 10
            temp_max = 20
            sql = """
            SELECT H.CityName, H.Name 
            FROM Temperature T 
            JOIN City C ON T.CityName = C.Name 
            JOIN Hotel H ON C.Name = H.CityName 
            WHERE Temperature > %s AND Temperature < %s 
            LIMIT 10;
            """
            cursor.execute(sql, (temp_min, temp_max))
            result = cursor.fetchall()
            print(result)
            return redirect('blog_post_list')
    finally:
        connection.close()

def login(request):
    return render(request, 'login.html')