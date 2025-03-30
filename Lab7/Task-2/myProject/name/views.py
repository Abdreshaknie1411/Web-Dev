from django.http import HttpResponse
from django.template import loader

def isname(request):
  template = loader.get_template('index.html')
  context={}
  
  return HttpResponse(template.render(context,request))
