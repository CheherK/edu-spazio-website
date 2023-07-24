FROM node:lts
RUN useradd -ms /bin/bash myuser

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build
COPY config.json /app/config.json

COPY ./dist ./dist
RUN chown -R myuser:myuser /app
USER myuser

CMD ["npm", "start"]

EXPOSE 3000
