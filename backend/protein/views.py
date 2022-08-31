from protein.models import Protein
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import ProteinSerializer, ProtienAbundanceSerializer


@api_view(["GET"])
def get_protien(request, pk):
    numeric_timepoint = request.query_params.get("numeric_timepoint")

    try:
        protein = Protein.objects.get(protein_id=pk)
    except Protein.DoesNotExist:
        return Response(
            {"Error": "could not find protien ID"}, status=status.HTTP_400_BAD_REQUEST
        )

    if numeric_timepoint == "1":
        serializer = ProtienAbundanceSerializer(protein, many=False)
    else:
        serializer = ProteinSerializer(protein, many=False)

    return Response(serializer.data)
