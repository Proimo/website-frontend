FROM nginx:1.17.1-alpine

WORKDIR /app

RUN apk add --no-cache nodejs

COPY /dist /app/dist
COPY /nginx/app /etc/nginx/sites-enabled

CMD node /app/dist/server/main.js
