FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
