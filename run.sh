#!/bin/sh
IMAGE_NAME=rest_image
CONTAINER_NAME=rest_container1
docker rm -f $CONTAINER_NAME
docker run --rm --name $CONTAINER_NAME -p 3000:3000 $IMAGE_NAME