from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("<em>My Second App</em>")

def help(request):
    my_dict = {'insert_me_two': "Help Page"}
    return render(request, 'AppTwo/help.html', context = my_dict)