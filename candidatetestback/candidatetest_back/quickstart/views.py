from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from quickstart.models import doc
from quickstart.serializers import docserializer

@csrf_exempt
def docApi(request):
    if request.method=='POST':
        doc_data = JSONParser().parse(request)
        doc_serializer = docserializer(data=doc_data)
        if doc_serializer.is_valid():
            doc_serializer.save()
            return JsonResponse("Export Successfully", safe=False)
        return JsonResponse("Export failed", safe=False)
    elif request.method=="GET":
        docs = doc.objects.all()
        docs_serializer = docserializer(docs,many=True)
        return JsonResponse(docs_serializer.data, safe=False)
    elif request.method=="DELETE":
        docs = doc.objects.all()
        docs.delete()
        return JsonResponse("delete", safe=False)

