from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
	class Meta:
		model = Task
		fields = ('id','Title','Content','Due_date','Labels','Status')