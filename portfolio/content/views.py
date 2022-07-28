from django.http import HttpRequest
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib import admin
from pyparsing import opAssoc


def index(request):
    return render(request, "content/layout.html")

def projects(request):
    return HttpResponse("Projects")

def resume(request):
    return HttpResponse("Resume")

def about_me(request):
    return HttpResponse("About Me")
