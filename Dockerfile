FROM node:20.11-alpine AS build
WORKDIR /app
COPY  package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN chown -R node:node /app
USER node:node