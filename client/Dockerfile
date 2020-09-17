FROM node:12

LABEL maintainer="https://github.com/michmich112"

WORKDIR /usr/local/client

# Not needed
EXPOSE 3000 

# Copy individual files
ADD package.json ./package.json

# Copy directories
COPY src ./src
COPY public ./public

# Install Dependencies
RUN npm install

# Entrypoint: serve the client
CMD ["npm", "sart"]
