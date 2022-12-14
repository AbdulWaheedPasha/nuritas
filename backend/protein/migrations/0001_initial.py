# Generated by Django 4.1 on 2022-08-31 18:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Protein",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("protein_id", models.IntegerField(unique=True)),
                ("accession", models.CharField(max_length=255)),
                ("avg_mass", models.IntegerField()),
                ("description", models.CharField(max_length=255)),
                ("zero_hr_protein_abundance", models.BigIntegerField()),
                ("half_hr_protein_abundance", models.BigIntegerField()),
                ("one_hr_protein_abundance", models.BigIntegerField()),
                ("two_hr_protein_abundance", models.BigIntegerField()),
                ("three_hr_protein_abundance", models.BigIntegerField()),
                ("four_hr_protein_abundance", models.BigIntegerField()),
                ("five_hr_protein_abundance", models.BigIntegerField()),
                ("six_hr_protein_abundance", models.BigIntegerField()),
                ("nine_hr_protein_abundance", models.BigIntegerField()),
                ("twelve_hr_protein_abundance", models.BigIntegerField()),
                ("twenty_four_hr_protein_abundance", models.BigIntegerField()),
                ("cellular_processes", models.CharField(max_length=512)),
                ("protein_functions", models.CharField(max_length=512)),
                ("reactome_pathways", models.CharField(max_length=512)),
            ],
        ),
    ]
