from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'dataset_06_01.html',locals())
