# Proyecto de React Native


# Instrucciones para poner en marcha el proyecto

Para correr el proyecto completo, sigue estos pasos:

1. **Contar con una base de datos SQL:**
   - Los comandos para la creación de las tablas y para inserciones de prueba están en el directorio `db` en la raíz del proyecto.

2. **Crear un archivo `.env` en el directorio del backend:**
   - En el archivo `.env`, establece las siguientes variables de entorno:
     - `PORT`: El puerto del backend (en nuestro caso, el puerto `8000`).
     - `DB_HOST`: El host de la base de datos (en nuestro caso, `localhost`).
     - `DB_PORT`: El puerto de la base de datos (en nuestro caso, `3306`).
     - `DB_USER`: El usuario de la base de datos.
     - `DB_PASSWORD`: La contraseña de la base de datos.
     - `DB_NAME`: El nombre de la base de datos.
     - `NEWS_IMG_ROUTE`: La ruta de las imágenes de noticias (en nuestro caso, `/static/assets/news`).
     - `AIRPLANE_IMG_ROUTE`: La ruta de las imágenes de aviones (en nuestro caso, `/static/assets/fleet`).

3. **Establecer la IP y puerto del backend en el archivo `/frontend/config.js`:**
   - En el archivo `config.js` de la carpeta `frontend`, establece la IP y el puerto del backend.

4. **Instalar los paquetes necesarios:**
   - Ejecuta el comando `npm install` tanto en el directorio del backend como en el del frontend.

5. **Ejecutar el proyecto:**
   - En una terminal, ejecuta el backend con el comando `npm run dev`.
   - En otra terminal, ejecuta el frontend con el comando `npm run start`.
