# Blockbuster :movie_camera:
Proyecto que recrea la parte frontend con react de una app de películas. Imitación del famoso videoclub Blockbuster de los años 90.

![Logo](blockbusterLogo.jpg)

### Puesta en marcha :wrench:
Este proyecto funciona con un backend realizado en Mongo que se puede encontrar en este enlace:
https://github.com/esanchezblanca/VideoclubBackend.git

Una vez descargado el backend, lo abrimos e iniciamos un nuevo terminal. Iniciamos nodemon dentro de la carpeta videoclubbackend con nodemon server.js.

Después arrancaremos el frontend con npm start y estará listo para usarse.

### Descripción y funcionamiento :hammer:

La app se abrirá por una página principal llamada Home con la lista de películas.

Siempre tendremos disponible arriba una barra de navegación con botones para dirigirnos a home, register, login y perfil.

Para poder alquilar las películas debemos hacer login con un usuario registrado. Proporcionamos uno de prueba por si no quisiera registrarse con uno nuevo:
        Usuario: pepe@gmail.com
        Password: contrasena

Una vez hecho el login, el usuario podrá ver las películas en detalle y reservarlas dándole al botón "Alquilar".

## Licencia :page_with_curl:

Este proyecto ha sido realizado por Elena Sánchez de la Blanca y está sujeto a la licencia MIT. Para obtener más información, por favor diríjase al archivo LICENSE que encontrará adjunto.
