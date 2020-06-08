#FROM node:12-alpine as builder
#
#
#COPY /dist /app/dist

#COPY package.json package-lock.json /app/
#RUN npm ci
#
#COPY ./ /app/
#
#RUN npm run build:ssr

FROM nginx:1.17.1-alpine

WORKDIR /app

RUN apk add --no-cache nodejs

COPY /dist /app/dist
#COPY --from=builder /app/dist /app/dist
#COPY /nginx/app /etc/nginx/sites-enabled

CMD node /app/dist/server/main.js
