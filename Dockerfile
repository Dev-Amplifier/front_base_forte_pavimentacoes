# Etapa 1 — Build da aplicação React
FROM node:18-alpine AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos essenciais para instalar dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Faz o build da aplicação (gera os arquivos estáticos em /app/build)
RUN npm run build


# Etapa 2 — Servir a aplicação com Nginx
FROM nginx:stable-alpine

# Remove configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos buildados para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copia uma configuração personalizada (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Comando padrão do container
CMD ["nginx", "-g", "daemon off;"]
