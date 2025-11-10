# Etapa 1 — Build da aplicação React
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# FORÇA O BASE PATH CORRETO NO BUILD
ENV PUBLIC_URL=https://basefortepavimentacoes.com.br
RUN npm run build

# Etapa 2 — Servindo com serve
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/build ./build

EXPOSE 3000
# FORÇA O SERVIDOR A SABER O DOMÍNIO CORRETO
CMD ["serve", "-s", "build", "-l", "3000", "--single"]