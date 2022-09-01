from rest_framework import serializers
from .models import Protein


class ProteinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Protein
        fields = [
            "protein_id",
            "accession",
            "avg_mass",
            "description",
            "cellular_processes",
            "protein_functions",
            "reactome_pathways",
        ]


class ProtienAbundanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Protein
        fields = [
            # "protein_id",
            "zero_hr_protein_abundance",
            "half_hr_protein_abundance",
            "one_hr_protein_abundance",
            "two_hr_protein_abundance",
            "three_hr_protein_abundance",
            "four_hr_protein_abundance",
            "five_hr_protein_abundance",
            "six_hr_protein_abundance",
            "nine_hr_protein_abundance",
            "twelve_hr_protein_abundance",
            "twenty_four_hr_protein_abundance",
        ]
