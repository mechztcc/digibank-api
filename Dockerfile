FROM node:18.16.0

WORKDIR /home/app

EXPOSE 3335

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

COPY . .

RUN npm install