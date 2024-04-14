FROM nginx:alpine

WORKDIR /usr/app
COPY ./dist /usr/app
COPY ./nginx.conf /etc/nginx/conf.d/90-frontend.conf
CMD ["nginx", "-g", "daemon off;"]
