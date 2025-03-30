from django.db import models

# Create your models here.
class Student(models.Model):
    name=models.CharField(max_length=100)
    age=models.IntegerField()
    gpa=models.FloatField(null=True)
    wigth=models.FloatField(null=True)
    
    def __str__(self):
        return self.name
    
