FROM node:14.17.6-stretch as builder
WORKDIR /tmp
ADD package.json ./package.json
ADD package-lock.json ./package-lock.json
RUN npm ci
ADD . .
RUN npm run build:ssr
USER node
FROM node:14.17.6-stretch
WORKDIR /tmp
ADD package.json ./package.json
COPY --from=builder /tmp/dist /tmp/dist
EXPOSE 80
ENTRYPOINT npm run serve:ssr