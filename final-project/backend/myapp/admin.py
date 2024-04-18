from django.contrib import admin
from .models import BlogPost
from .models import Author

admin.site.register(BlogPost)
admin.site.register(Author)
# Register your models here.
