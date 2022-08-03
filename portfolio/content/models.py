from django.db import models

# Create your models here.
from django.db import models
 

class Subscriber(models.Model):
    name = models.CharField(max_length=128)
    email = models.EmailField(max_length=254)

    def __str__(self):
        return f"{self.name} : {self.email}"
