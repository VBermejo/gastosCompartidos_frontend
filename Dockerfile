FROM node:14 AS build-env

WORKDIR /app

COPY . ./

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY --from=build-env /app/dist/proyect-name/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]