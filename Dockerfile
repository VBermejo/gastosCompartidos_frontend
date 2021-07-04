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
RUN rm -rf /usr/share/nginx/html/* 
COPY --from=build-step /app/share-costs-front /usr/share/nginx/html