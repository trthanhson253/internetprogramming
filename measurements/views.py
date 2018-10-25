
from django.shortcuts import render
from django.views import generic
from .models import Area
from django.shortcuts import render_to_response

class IndexView(generic.ListView):
    template_name = 'measurements/index.html'
    context_object_name = 'area_objects'

    def get_queryset(self):
        return Area.objects.all()

def home(request):
    return render(request, 'measurements/home.html')

def assign1(request):
    return render(request, 'measurements/assign1.html')

def assign2(request):
    return render(request, 'measurements/assign2.html')

def assign5(request):
    return render(request, 'measurements/assign5.html')