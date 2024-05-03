FROM alpine:3.18.0

RUN apk add --no-cache nodejs yarn

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
