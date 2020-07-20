FROM node:12.8.0-alpine AS builder

ARG MESSAGE_API_URL
ENV REACT_APP_MESSAGE_API_URL=${MESSAGE_API_URL}

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

COPY . ./

RUN yarn install
RUN yarn build


FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]