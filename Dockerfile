FROM node:12

# Create app directory inside the image (holds my app code)
WORKDIR /usr/src/app

# Install app dependencies inside image
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Copy app source code from local pwd to pwd in the image (specified above with WORKDIR cmd)
COPY . .

# Expose port inside container
EXPOSE 8080

# Start my app
CMD [ "node", "src/index.js" ] 