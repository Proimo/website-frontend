FROM nginx:alpine

WORKDIR /app

RUN apk add --no-cache nodejs supervisor

COPY dist /app/dist
COPY etc /etc
COPY node-entrypoint.sh /docker-entrypoint.d/
