# HTML Hello

El boilerplate más básico para cualquier estudiante de 4Geeks Academy, empieza tu primer sitio web desde cero.

> Tienes un video tutorial sobre [cómo usar esta plantilla para crear tu primer sitio web aquí](https://youtu.be/dfbDCMu_p-0).

## ¿Qué hacer a continuación?

Crea un archivo `index.html` con [la estructura básica de HTML](https://4geeks.com/es/lesson/what-is-html-learn-html-es#estructura-de-pgina). Para abrir esta página **en tu ordenador**, descarga `index.html` y `styles.css` en la misma carpeta y haz doble clic en `index.html`. Al terminar, cierra la pestaña del navegador. Para esta opción no necesitas Python ni Flask.

Si trabajas en un **GitHub Codespace remoto**, abre una terminal allí, sitúate en la carpeta que contiene `index.html` y ejecuta:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

En VS Code, abre la pestaña **Puertos** y pulsa **Abrir en el navegador** para el puerto 8000. Si no aparece, reenvía el puerto 8000 desde esa pestaña. El `localhost:8000` de tu ordenador **no** es el Codespace; usa la dirección reenviada. Para terminar, cierra la pestaña del navegador **y pulsa Ctrl+C en la terminal del Codespace** para detener el servidor. Si el puerto 8000 está ocupado, usa el 8001 tanto en el comando como en la pestaña Puertos.

- Puedes crear tantos archivos HTML cómo desees.
- También puedes crear archivos CSS e importarlos en tu página web utilizando una etiqueta `<link>` ubicándola entre las etiquetas `<head></head>`, de la siguiente manera:

```html
<head>
  ...
  <link rel="stylesheet" type="text/css" href="styles.css">
  ...
</head>
```

- Si deseas usar Tailwind CSS, agrégalo de forma opcional mediante el CDN oficial de Tailwind CSS v4 dentro del mismo `<head>`:

```html
<head>
  ...
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link rel="stylesheet" type="text/css" href="styles.css">
  ...
</head>
```


## Agradecimientos

Esta y otras plantillas son utilizadas para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp). 

Realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. 

Conoce más sobre nuestros [Cursos de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero/?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/desarrollador-full-stack/desarrollador-full-stack), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).
