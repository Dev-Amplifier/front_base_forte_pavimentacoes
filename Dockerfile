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

# copia o build final da etapa anterior
COPY --from=build /app/build ./build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]