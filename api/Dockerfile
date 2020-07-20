FROM node:12.8.0-alpine

ENV PORT=80

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY . ./

RUN yarn install

EXPOSE 80
CMD ["yarn", "start"]
