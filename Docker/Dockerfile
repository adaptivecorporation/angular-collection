FROM node:14.16.7-stretch as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration=production
FROM nginx:alpine
COPY --from=node /usr/src/app/dist/angular-project /usr/share/nginx/html
COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf