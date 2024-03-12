from django.urls import path
from .views import *

urlpatterns = [
    path('machine/', MachineView.as_view()),
    path('machine/<int:id>/', MachineView.as_view()),
    
    path('process/', ProcessView.as_view()),
    path('process/<int:id>/', ProcessView.as_view()),

    path('procedure/', MachineProcessView.as_view()),
    path('procedure/<int:id>/', MachineProcessView.as_view()),
    
    path('product/', ProductView.as_view()),
    path('product/<int:id>/', ProductView.as_view()),

    path('material/', MaterialView.as_view()),
    path('material/<int:id>/', MaterialView.as_view()),
    
    path('productprocess/', ProductProcessView.as_view()),
    path('productprocess/<int:id>/', ProductProcessView.as_view()),
    
    path('processmaterial/', ProcessMaterialView.as_view()),
    path('processmaterial/<int:id>/', ProcessMaterialView.as_view()),

     path('processmaterialreport/<int:id>/', ProductProcessReport.as_view()),

]