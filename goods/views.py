from django.shortcuts import render
from .models import Product


# Create your views here.
def index(request):
    context = dict()
    products = Product.objects.all()
    context["products"] = products
    return render(request, 'goods/index.html', context=context)
