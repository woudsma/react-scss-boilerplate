FROM node:alpine as builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --only=production
COPY . ./
RUN npm run build

FROM kyma/docker-nginx
COPY --from=builder /usr/src/app/build /var/www
CMD 'nginx'
