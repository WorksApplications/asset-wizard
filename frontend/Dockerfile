FROM alpine:3.7 as builder

# install yarn
# https://yarnpkg.com/en/docs/install#alpine-stable
WORKDIR /app
RUN apk add --no-cache yarn && \
    yarn --version

COPY . /app
RUN rm -rf node_modules build && \
    yarn install --pure-lockfile && \
    yarn run build

FROM nginx:stable-alpine

COPY --from=builder /app/build /data/www
COPY nginx.conf /etc/nginx/nginx.conf
