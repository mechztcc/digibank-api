FROM node:18.16.0

WORKDIR /home/app

EXPOSE 3335

COPY . .

RUN npm install