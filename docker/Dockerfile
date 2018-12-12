FROM node:10.1

COPY . /home/code
WORKDIR /home/code
RUN npm install
# ENTRYPOINT [ "echo", "Hello dear" ]
CMD ["npm","start"]
EXPOSE 3000