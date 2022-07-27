from django.http import HttpRequest
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from django.contrib import admin


def index(request):
    return HttpResponse("First Commit")