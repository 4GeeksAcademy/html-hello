# Nombre Marca - Web de Moda

Sitio web de una marca de moda para hombre y mujer con sede en Francia.

El proyecto esta orientado a desarrollo front-end colaborativo y organizado por ramas para permitir que varios integrantes trabajen en paralelo (home, catalogo, producto, carrito, checkout, UI, contenido y estilos).

## Objetivo del proyecto

- Construir una experiencia de e-commerce editorial para una marca de moda.
- Mantener una base de codigo clara para trabajo en equipo.
- Facilitar iteraciones rapidas por funcionalidades usando flujo Git por ramas.

## Stack actual

- HTML5
- Tailwind CSS
- CSS (entrada y salida de compilacion)
- JavaScript (scripts de interfaz)
- Python (servidor local para desarrollo)

## Estructura base del proyecto

Estructura recomendada para la web y sus recursos visuales:

```text
.
|- home.html
|- catalogo.html
|- producto.html
|- carrito.html
|- checkout.html
|- input.css
|- output.css
|- tailwind.config.js
|- server.py
|- assets/
|  |- css/
|  |  |- style.css
|  |- js/
|  |  |- main.js
|  |- img/
|  |  |- hero/
|  |  |- products/
|  |  |- banners/
|  |- icons/
|  |  |- ui/
|  |  |- social/
|- README.md
|- README.es.md
```

Nota: actualmente este repositorio incluye los archivos base y puede ampliarse con esta estructura para separar contenido, estilos, scripts, imagenes e iconos de forma mantenible.

## Flujo colaborativo por ramas

Ramificacion basica sugerida:

- `main`: rama estable y lista para entrega.
- `develop`: rama de integracion de cambios aprobados.
- `feature/*`: nuevas funcionalidades (ejemplo: `feature/navbar-home`, `feature/hero-carousel`, `feature/cart-dropdown`).
- `fix/*`: correcciones puntuales.
- `hotfix/*`: arreglos urgentes sobre produccion.

Flujo recomendado:

1. Crear rama desde `develop`.
2. Implementar cambios atomicos con commits claros.
3. Abrir Pull Request hacia `develop`.
4. Revisar, aprobar y hacer merge.
5. Publicar en `main` cuando el sprint este validado.

## Como ejecutar en local

Inicia un servidor local:

```bash
pip3 install flask && python3 server.py
```

Si compilas Tailwind desde `input.css` a `output.css`, usa el comando configurado por tu equipo (por ejemplo via CLI o script npm).

## Convenciones de trabajo

- Nombrar ramas y commits de forma descriptiva.
- Evitar mezclar varias features en la misma rama.
- Mantener coherencia visual en tipografias, color y espaciados.
- Documentar cualquier cambio de estructura en este README.

## Estado

Proyecto en evolucion como repositorio colaborativo para desarrollo web de la marca.
