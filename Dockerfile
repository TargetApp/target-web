# stage 1: compile and build
FROM node:alpine as build
WORKDIR /target
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build:prod

# stage 2: run
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /target/dist/target-app /usr/share/nginx/html
EXPOSE 8081