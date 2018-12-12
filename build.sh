#!/bin/sh
IMAGE_NAME=rest_image
CONTAINER_NAME=rest_container

docker build -t $IMAGE_NAME -f $(pwd)/docker/Dockerfile . 