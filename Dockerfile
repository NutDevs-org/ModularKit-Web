FROM node:20-alpine AS builder

WORKDIR /usr/app/
COPY . .
RUN npm install --force
RUN npm run build

FROM nginx:alpine

WORKDIR /usr/app
COPY --from=builder /usr/app/src/Web/dist ./
COPY ../src/Web/nginx.conf /etc/nginx/conf.d/90-frontend.conf
CMD ["nginx", "-g", "daemon off;"]
