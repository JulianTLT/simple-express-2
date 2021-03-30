FROM node:13

ARG HOST

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV HOST=$HOST
CMD ["npm", "start"]

