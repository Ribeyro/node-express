# Usar una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install express connect-flash bcryptjs express-handlebars express-session method-override mongoose passport passport-local

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 4000

# Establecer variables de entorno para MongoDB
ENV NOTES_APP_MONGODB_HOST=host.docker.internal
ENV NOTES_APP_MONGODB_DATABASE=notesdb

# Comando para iniciar la aplicación
CMD ["npm", "start"]