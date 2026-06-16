# Usamos Nginx como servidor web liviano
FROM nginx:alpine

# Copiamos el HTML al directorio que sirve Nginx
COPY src/index.html /usr/share/nginx/html/index.html

# Exponemos el puerto 80
EXPOSE 80