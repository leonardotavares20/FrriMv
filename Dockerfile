FROM node:20.11-alpine AS build
WORKDIR /app
COPY  package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20.11-alpine
WORKDIR /app
COPY --from=build /app/build ./build
USER node:node
CMD ["node", "build/index.js"]