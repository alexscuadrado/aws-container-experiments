FROM node:12.8.0-alpine AS builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

COPY . ./

RUN yarn install
RUN yarn build


FROM nginx:stable-alpine

ENV ENV_MESSAGE_API_URL=${ENV_MESSAGE_API_URL}

RUN apk add --no-cache bash

COPY --from=builder /app/build /usr/share/nginx/html
COPY entrypoint.sh /usr/local/bin/
RUN ln -s /usr/local/bin/entrypoint.sh

EXPOSE 80

ENTRYPOINT [ "entrypoint.sh", "/usr/share/nginx/html"]
