from django.db import models

# Create your models here.
class Company(models.Model):
    name =models.CharField(max_length=255)
    description=models.TextField()
    city=models.CharField(max_length=255)
    address=models.TextField()


    class Meta:
        verbose_name =("Company")
        verbose_name_plural =("Companyes")

    def __str__(self):
        return self.name

class Vacancy(models.Model):
    name=models.CharField(max_length=255)
    description=models.TextField()
    salary=models.FloatField()
    company=models.ForeignKey(Company,on_delete=models.CASCADE,related_name="vacancy")
    
    def __str__(self):
        return self.name
    


    

    

    