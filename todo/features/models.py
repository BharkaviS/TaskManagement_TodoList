from django.db import models
from datetime import date
from todo import settings 
# Create your models here.
class Task(models.Model):
	LABEL_CHOICES = (
		('Personal','Personal'),
		('Work','Work'),
		('Shopping','Shopping'),
		('Others','Others')
	)
	STATUS_CHOICES = (
		('New','New'),
		('In Progress','In Progress'),
		('Completed','Completed')
	)
	Title = models.CharField(max_length = 100)
	Content = models.TextField(max_length = 1000)
	Due_date = models.DateField(default = date.today)
	Labels = models.CharField(choices=LABEL_CHOICES,max_length = 100,default="--")
	Status = models.CharField(choices = STATUS_CHOICES,max_length = 100,default="--")
	# Meta data about the database table.
	class Meta:
        # Set the table name.
	    db_table = 'task'

	    # Set default ordering
	    ordering = ['id']
