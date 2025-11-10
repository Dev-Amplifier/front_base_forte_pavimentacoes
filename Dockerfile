# Etapa 1 — Build da aplicação React
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa 2 — Servindo com serve
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/build ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]