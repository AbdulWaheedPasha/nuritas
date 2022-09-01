#!/bin/sh
echo "running entrypoint.sh file"
python manage.py collectstatic --noinput
python manage.py makemigrations
python manage.py migrate
# python manage.py populate_database proteins_time_course.csv
exec "$@"