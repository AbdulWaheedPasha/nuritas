from django.core.management import BaseCommand
from django.utils import timezone

import csv
from protein.models import Protein


class Command(BaseCommand):
    help = "Loads protien from CSV file."

    def add_arguments(self, parser):
        parser.add_argument("file_path", type=str)

    def handle(self, *args, **options):
        start_time = timezone.now()
        file_path = options["file_path"]
        with open(file_path, "r") as csv_file:
            data = csv.reader(csv_file, delimiter=",")
            proteins = []
            count = 0
            for (
                protein_id,
                accession,
                avg_mass,
                description,
                zero_hr_protein_abundance,
                half_hr_protein_abundance,
                one_hr_protein_abundance,
                two_hr_protein_abundance,
                three_hr_protein_abundance,
                four_hr_protein_abundance,
                five_hr_protein_abundance,
                six_hr_protein_abundance,
                nine_hr_protein_abundance,
                twelve_hr_protein_abundance,
                twenty_four_hr_protein_abundance,
                cellular_processes,
                protein_functions,
                reactome_pathways,
            ) in data:

                if count > 1:
                    protein = Protein(
                        protein_id=protein_id,
                        accession=accession,
                        avg_mass=avg_mass,
                        description=description,
                        zero_hr_protein_abundance=convert_num_to_int(
                            zero_hr_protein_abundance
                        ),
                        half_hr_protein_abundance=convert_num_to_int(
                            half_hr_protein_abundance
                        ),
                        one_hr_protein_abundance=convert_num_to_int(
                            one_hr_protein_abundance
                        ),
                        two_hr_protein_abundance=convert_num_to_int(
                            two_hr_protein_abundance
                        ),
                        three_hr_protein_abundance=convert_num_to_int(
                            three_hr_protein_abundance
                        ),
                        four_hr_protein_abundance=convert_num_to_int(
                            four_hr_protein_abundance
                        ),
                        five_hr_protein_abundance=convert_num_to_int(
                            five_hr_protein_abundance
                        ),
                        six_hr_protein_abundance=convert_num_to_int(
                            six_hr_protein_abundance
                        ),
                        nine_hr_protein_abundance=convert_num_to_int(
                            nine_hr_protein_abundance
                        ),
                        twelve_hr_protein_abundance=convert_num_to_int(
                            twelve_hr_protein_abundance
                        ),
                        twenty_four_hr_protein_abundance=convert_num_to_int(
                            twenty_four_hr_protein_abundance
                        ),
                        cellular_processes=cellular_processes,
                        protein_functions=protein_functions,
                        reactome_pathways=reactome_pathways,
                    )

                    proteins.append(protein)

                count += 1

            if len(proteins) > 1:
                # Creating bulk protien
                try:
                    Protein.objects.bulk_create(proteins)
                except Exception as e:
                    self.stdout.write(self.style.ERROR(f"Error: {str(e)}."))
                    self.stdout.write(
                        self.style.ERROR(
                            f"Deleting Protein which are created by {file_path} file."
                        )
                    )
                    # Deleteing protein which are create by csv file
                    protien_test = Protein.objects.filter(
                        protein_id__in=[p.protein_id for p in proteins]
                    )
                    protien_test._raw_delete(protien_test.db)

        end_time = timezone.now()
        self.stdout.write(
            self.style.SUCCESS(
                f"Loading CSV took: {(end_time-start_time).total_seconds()} seconds."
            )
        )


def convert_num_to_int(value):
    return int(float(value))
