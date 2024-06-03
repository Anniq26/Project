FROM python:3.9

RUN pip install --upgrade pip


COPY ./requirements.txt /app/requirements.txt

RUN pip install -r /app/requirements.txt

COPY . /app
WORKDIR /app

COPY entrypoint.sh .

ENTRYPOINT ["sh", "/app/entrypoint.sh"]