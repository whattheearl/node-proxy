FROM node:lts

WORKDIR /node-proxy

COPY ./ ./

RUN npm ci

CMD ["node", "./src/index.js"]