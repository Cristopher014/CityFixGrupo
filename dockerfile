FROM node:20-alpine

# Preparar el espacio de trabajo en /app sin herramientas globales obsoletas
WORKDIR /app

# Copiar los archivos de definición de dependencias
COPY package*.json ./

# Instalar dependencias localmente
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# CAMBIA ESTA LÍNEA: Comando para mantener el contenedor despierto e infinito
CMD ["sh", "-c", "tail -f /dev/null"]