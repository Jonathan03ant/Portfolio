# Stage one
# Building the React App

FROM node:16-alpine AS build

WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage two
# Serve the React App

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]