#generar imagen

FROM node:14-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Segundo paso

FROM nginx:alpine

COPY --from=build-step /app /usr/share/nginx/html