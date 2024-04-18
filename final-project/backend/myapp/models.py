from django.db import models

# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return self.name

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    publication_date = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

# class City(models.Model):
#     name = models.CharField(max_length=255, primary_key=True, db_column='Name')
#     state = models.CharField(max_length=255, db_column='State')
#     living_wage = models.FloatField(db_column='LivingWage')
#     population = models.IntegerField(db_column='Population')
#     crime_frequency = models.FloatField(db_column='CrimeFrequency')

#     class Meta:
#         managed = False
#         db_table = 'City'

#     def __str__(self):
#         return self.name

# class Hotel(models.Model):
#     name = models.CharField(max_length=255, db_column='Name', null=False)
#     address = models.CharField(max_length=255, db_column='Address')
#     city = models.ForeignKey('City', to_field='name', db_column='CityName', on_delete=models.CASCADE, null=False)

#     class Meta:
#         managed = False
#         db_table = 'Hotel'
#         unique_together = (('name', 'city'),)

#     def __str__(self):
#         return self.name

# class Review(models.Model):
#     user_name = models.CharField(max_length=255, db_column='UserName', null=False)
#     title = models.CharField(max_length=255, db_column='Title')
#     text = models.CharField(max_length=1024, db_column='Text')
#     rating = models.FloatField(db_column='Rating')
#     date = models.DateTimeField(db_column='Date')
#     hotel = models.ForeignKey('Hotel', to_field='name', db_column='HotelName', on_delete=models.CASCADE, null=False)
#     city = models.ForeignKey('City', to_field='name', db_column='CityName', on_delete=models.CASCADE, null=False)

#     class Meta:
#         managed = False
#         db_table = 'Review'
#         unique_together = (('user_name', 'hotel', 'city'),)

#     def __str__(self):
#         return self.title
    
# class Temperature(models.Model):
#     month = models.IntegerField(db_column='Month', null=False)
#     year = models.IntegerField(db_column='Year', null=False)
#     temperature = models.FloatField(db_column='Temperature')
#     city = models.ForeignKey('City', to_field='name', db_column='CityName', on_delete=models.CASCADE, null=False)

#     class Meta:
#         managed = False
#         db_table = 'Temperature'
#         unique_together = (('month', 'year', 'city'),)

#     def __str__(self):
#         return f"{self.city} {self.month}/{self.year}"
    
# class Precipitation(models.Model):
#     city_state = models.ForeignKey('City', to_field='state', db_column='CityState', on_delete=models.CASCADE, null=False)
#     month = models.IntegerField(db_column='Month', null=False)
#     precipitation = models.FloatField(db_column='Precipitation')

#     class Meta:
#         managed = False
#         db_table = 'Precipitation'
#         unique_together = (('city_state', 'month'),)

#     def __str__(self):
#         return f"{self.city_state} {self.month}"
