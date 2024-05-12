FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm run build

COPY ./dist /app/




# EXPOSE 8080

CMD [ "npm", "run", "preview" ]