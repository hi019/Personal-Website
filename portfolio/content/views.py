from django.http import HttpRequest
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib import admin
from pyparsing import opAssoc


def index(request):
    return render(request, "content/index.html")

def projects(request):
    return render(request, "content/projects.html")

def resume(request):
    return render(request, "content/resume.html")
def contact_me(request):
     return render(request, "content/contact.html")