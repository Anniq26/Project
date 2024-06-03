#!/bin/sh

python manage.py makemigrations --no-input
python manage.py migrate --no-input
echo "yes" | python manage.py collectstatic --no-input
python manage.py runserver

gunicorn product.swgi:application --bind 0.0.0.0:8000