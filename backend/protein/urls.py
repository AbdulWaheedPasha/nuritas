from django.urls import path
from protein.views import get_protien

urlpatterns = [
    path("<int:pk>/", get_protien, name="get-protien"),
]
