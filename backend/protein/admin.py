from django.contrib import admin

# Register your models here.
from .models import Protein

@admin.register(Protein)
class ProteinAdmin(admin.ModelAdmin):
    search_fields = ("protein_id",)

    