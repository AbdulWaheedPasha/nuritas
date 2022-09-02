from rest_framework.reverse import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Protein

import logging
logger = logging.getLogger(__name__)

class ProteinViewSetTests(APITestCase):
    def test_get_protein(self):
        """
        Test get Protein
        """
        logger.debug('Starting test list persons')

        url = 'http://127.0.0.1/api/protein/26'
        logger.debug('Testing: %s'%url)
        response = self.client.get(url, format='json')
        print(response)
        json = response.json()

        logger.debug('Testing status code response: %s, code: %d'%(json, response.status_code))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        logger.debug('Testing result count')
        self.assertEqual(len(json), 1)