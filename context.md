# Contexto del proyecto

## Objetivo general
Prototipo visual y funcional de tienda online de ropa usando solo HTML + Tailwind CSS, con enfoque en:
- SEO (estructura semantica, contenido indexable, metadatos).
- Diseno moderno y consistente.
- Responsive para movil (sm), tablet (md) y escritorio (lg).

## Vistas definidas en el alcance
1. Home
2. Catalogo
3. Vista de producto
4. Carrito
5. Checkout (3 pasos)

## Estado actual del trabajo

### 1) Home (`index.html`)
Completado:
- Navbar con logo, buscador y menu de usuario.
- Hero principal.
- Secciones horizontales de productos: nuevos lanzamientos y mas vendidos.
- Footer con categorias, legal y contacto.
- SEO base (meta tags + JSON-LD).
- Responsive general.

Ajustes realizados durante el proceso:
- Se detecto y corrigio duplicado de documento HTML dentro del mismo archivo (quedaban dos homes concatenados).
- Se dejo un unico Home y un unico footer.
- Se actualizo la imagen de "Cap Stride" para que renderice correctamente.
- Se unifico navbar con enlaces de navegacion Home / Catalogo.

### 2) Catalogo (`catalogo.html`)
Completado:
- Navbar y footer consistentes con Home.
- Cabecera de catalogo.
- Barra de filtros con:
  - Categoria
  - Talla
- Grid de productos responsive con 20 items visibles de referencia.
- SEO base (meta tags + JSON-LD CollectionPage).

Ajustes realizados durante el proceso:
- Se detecto y corrigio duplicado completo de `catalogo.html`.
- Se actualizo la imagen de "Belt Terra" para que renderice correctamente.
- Se aseguro navegacion entre Home y Catalogo desde navbar.

### 3) Vista de producto en superposicion (modal)
Historial:
- Se implemento temporalmente una superposicion (overlay + blur) al click en tarjetas con comportamiento de apertura/cierre.
- Por solicitud posterior, se revirtio completamente esa implementacion.

Estado actual:
- NO hay modal/superposicion activa en `catalogo.html`.

## Reutilizacion de componentes
- Navbar reutilizado y alineado entre `index.html` y `catalogo.html`.
- Footer reutilizado y alineado entre `index.html` y `catalogo.html`.

## Ramas mencionadas durante el avance
- `feature/home` (home)
- `feature/catalogo` (catalogo)
- `feature/productView` (mencionada para siguiente etapa)

## Pendientes funcionales
1. Implementar vista de producto final (segun decision: pagina dedicada o modal).
2. Implementar vista de carrito.
3. Implementar vista de checkout con 3 pasos:
   - Datos personales
   - Direccion de entrega
   - Pago con tarjeta
4. (Opcional) convertir filtros de catalogo en filtros funcionales con JS.

## Lecciones aprendidas (repo memory)
- Evitar escribir dos veces el mismo archivo con `create_file` en la misma ejecucion porque puede concatenar documentos HTML.
- Verificar siempre el conteo de `<!doctype html>` y de `<footer>` despues de generar una vista.

## Notas tecnicas
- Stack actual: HTML + Tailwind CSS (CDN) + JS vanilla opcional para interacciones.
- Se mantiene estilo visual consistente entre vistas ya implementadas.
