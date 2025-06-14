FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

# Install pm2 and wait-port globally
RUN npm install pm2 wait-port -g

COPY . .

EXPOSE 3000

# Wait for MySQL before starting backend
CMD wait-port db:3306 && pm2-runtime index.js
