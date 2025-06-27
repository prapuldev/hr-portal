FROM node:20

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

EXPOSE 3000

# Use npm start which runs nodemon index.js
CMD ["npm", "run", "start"]
