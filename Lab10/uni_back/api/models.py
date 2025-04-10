from django.db import models

# Create your models here.
class Univercity(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()
    
    def __str__(self):
        return self.name
    class Meta:
        verbose_name =("Univer")
        verbose_name_plural =("Univercity")

    
class Internship(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    step = models.IntegerField(default=1)
    corresponding = models.ForeignKey(Univercity,on_delete=models.CASCADE,related_name='univer')
    
    def __str__(self):
        return f"#{self.title}-{self.corresponding}"
    
    
    
    