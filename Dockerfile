# Step 1: Use an official Node.js image as the base image
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the app's source code to the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use a lightweight web server to serve the static files
FROM nginx:alpine

# Step 8: Copy the build folder from the previous step into the nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the default nginx port (80)
EXPOSE 80

# Step 10: Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]

#Resolvido conflitos de nomes de arquivos e pastas no código, esta aplicação deve funcionar nesta imagem.
