# Usar una imagen base de Node.js
FROM node:16-alpine

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación de React
RUN npm run build

# Instalar `serve` para servir la aplicación
RUN npm install -g serve

# Exponer el puerto 8080
EXPOSE 8080

# Comando por defecto para ejecutar la aplicación
CMD ["serve", "-s", "build", "-l", "8080"]
