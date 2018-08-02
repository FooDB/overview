FROM node:latest

RUN mkdir -p /client/src

WORKDIR /client/src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]