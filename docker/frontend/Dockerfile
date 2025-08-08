# Use official Node.js LTS image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy app source code
COPY . .

# Build frontend (optional - if using build step, e.g. React/Vue)
# RUN npm run build

# Expose port your app listens on
EXPOSE 3000

# Start the frontend server
CMD ["npm", "start"]
