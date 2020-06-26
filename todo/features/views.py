from django.shortcuts import render
from .models import Task
from .forms import TaskForm
from .serializers import TaskSerializer
from rest_framework.views import APIView
from rest_framework import status,generics
from rest_framework.response import Response

class TaskList(APIView):
	def get(self,request,format=None):
		tasks = Task.objects.all()
		serializer = TaskSerializer(tasks,many=True)
		return Response(serializer.data)

	def post(self,request,format = None):
		serializer = TaskSerializer(data = request.data)
		if(serializer.is_valid()):
			serializer.save()
			return Response(serializer.data,status = status.HTTP_201_CREATED)
		return Response(serializer.errors,status= status.HTTP_400_BAD_REQUEST)
		
class TaskDetail(APIView):
    """
    Returns a single Task and allows updates and deletion of a Task.
    """
    def get_object(self, taskid):
        try:
            return Task.objects.get(pk=taskid)
        except Task.DoesNotExist:
            raise Http404

    def get(self, request, taskid, format=None):
        task = self.get_object(taskid)
        serializer = TaskSerializer(task)
        return Response(serializer.data)

    def put(self, request, taskid, format=None):
        task = self.get_object(taskid)
        serializer = TaskSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, taskid, format=None):
        task = self.get_object(taskid)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

