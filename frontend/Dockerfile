FROM node:8-alpine as builder

RUN echo 'yarn install && yarn run build' > /build.sh
ENTRYPOINT ["sh", "/build.sh"]

FROM nginx:stable-alpine

COPY ./build /data/www
COPY nginx.conf /etc/nginx/nginx.conf
