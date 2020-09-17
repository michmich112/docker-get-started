FROM node:12

LABEL maintainer="https://github.com/michmich112"

WORKDIR /usr/local/client

ARG REACT_APP_BE_URL
ENV REACT_APP_BE_URL=$REACT_APP_BE_URL

# Not needed
EXPOSE 3000 

# Copy individual files
ADD package.json ./package.json

# Copy directories
COPY src ./src
COPY public ./public

# Install Dependencies
RUN npm install

RUN npm run build

# Entrypoint: serve the client
CMD ["npx", "serve", "-s", "build"]
