from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import loader
from .models import BlogPost
from .forms import BlogPostForm
from django.core.exceptions import ObjectDoesNotExist
import os

#git clone https://Patrick8894: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@github.com/cs411-alawini/sp24-cs411-team065-DBMaster.git

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

def add_blog_post(request):
    if request.method == 'POST':
        form = BlogPostForm(request.POST)
        if form.is_valid():
            form.save()
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