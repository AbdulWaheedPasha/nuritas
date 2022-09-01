FROM python:3.9-alpine

WORKDIR /backend

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN apk update \
    && apk add tk

# install dependencies
COPY requirements.txt /backend/requirements.txt
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

WORKDIR /backend

# COPY entrypoint.sh /backend/entrypoint.sh
# RUN chmod +x /backend/entrypoint.sh

# # ENTRYPOINT ["entrypoint.sh"]

ADD entrypoint.sh /entrypoint.sh
RUN chmod a+x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

# copy project
COPY . /backend/

