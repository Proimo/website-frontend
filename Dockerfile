FROM nginx:1.17.1-alpine

#WORKDIR /app
COPY /dist /usr/share/nginx/html

#WORKDIR /app
#
#COPY package.json package-lock.json /app/
#RUN npm ci
#
#COPY ./ /app/
#
#RUN npm run build
#
#COPY --from=builder /app/dist /app/dist
