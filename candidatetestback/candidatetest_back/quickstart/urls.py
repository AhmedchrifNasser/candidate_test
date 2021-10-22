from django.conf.urls import url
from quickstart import views

urlpatterns=[
    url(r'document/$',views.docApi)
]