FROM node:20.11-alpine AS build
WORKDIR /app
COPY  package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

FROM node:20.11-alpine AS production
WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./
COPY --from=build /app/pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN chown -R node:node /app
RUN pnpm install --prod
USER node:node
CMD [ "pnpm", "run", "start" ]