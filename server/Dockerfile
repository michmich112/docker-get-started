FROM node:12

LABEL maintainer="https://github.com/michmich112"

WORKDIR /usr/local/server

# Not needed
EXPOSE 3000

# Copy individual files
ADD package.json ./package.json
ADD app.js ./app.js

# Copy directories
COPY bin ./bin
COPY public ./public
COPY routes ./routes

# Install Dependencies
RUN npm install

# Entrypoint: serve the client
CMD ["npm", "start"]
