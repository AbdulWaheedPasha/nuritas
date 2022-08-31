from django.contrib import admin

# Register your models here.
from .models import Protein

@admin.register(Protein)
class ProteinAdmin(admin.ModelAdmin):
    search_fields = ("protein_id",)
    # pass
    # list_display = ()
    # list_display = ("fk_project_feedback","final_feedback")
    # list_filter = ("fk_project_feedback",)
    