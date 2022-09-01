from django.db import models

# Create your models here.
class Protein(models.Model):
    protein_id = models.IntegerField(null=False, blank=False, unique=True)
    accession = models.CharField(null=False, blank=False, max_length=255)
    avg_mass = models.IntegerField(null=False, blank=False)
    description = models.CharField(null=False, blank=False, max_length=255)
    zero_hr_protein_abundance = models.BigIntegerField()
    half_hr_protein_abundance = models.BigIntegerField()
    one_hr_protein_abundance = models.BigIntegerField()
    two_hr_protein_abundance = models.BigIntegerField()
    three_hr_protein_abundance = models.BigIntegerField()
    four_hr_protein_abundance = models.BigIntegerField()
    five_hr_protein_abundance = models.BigIntegerField()
    six_hr_protein_abundance = models.BigIntegerField()
    nine_hr_protein_abundance = models.BigIntegerField()
    twelve_hr_protein_abundance = models.BigIntegerField()
    twenty_four_hr_protein_abundance = models.BigIntegerField()

    cellular_processes = models.TextField()
    protein_functions = models.TextField()
    reactome_pathways = models.TextField()

    def __str__(self):
        return str(self.protein_id)

    class Meta:
        ordering = ["-pk"]
