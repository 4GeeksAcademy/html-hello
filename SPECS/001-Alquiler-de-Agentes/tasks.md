# Tareas de implementación: AgentHub

Checklist derivada de [`plan.md`](plan.md), [`spec.md`](spec.md), [`DESIGN.md`](DESIGN.md) y las referencias de [`stitch-reference`](stitch-reference/). Ejecutar las fases en orden: estructura y comportamientos, contenido y datos, estilo. El único entregable de implementación será `../../index.html`; no modificar las referencias ni introducir frameworks o backend.

## Fase 1: Estructura y comportamientos

### Documento y esqueleto

- [X] Crear `../../index.html` con `<!doctype html>`, `<html lang="es">`, metadatos de viewport y título AgentHub.
- [X] Añadir Tailwind CSS desde CDN y una única configuración compartida; no añadir archivos CSS externos.
- [X] Crear un solo `<header>`, una navegación persistente y un `<main>` semántico siguiendo el shell común de Stitch.
- [X] Crear seis secciones identificables: dashboard, usuarios, agentes, skills, contrataciones y errores.
- [X] Definir Dashboard como sección inicial visible; dejar las demás secciones disponibles para activarse desde navegación.
- [X] Añadir identificadores únicos a secciones, modales, dropdowns y controles; no copiar IDs genéricos repetidos de las páginas independientes.
- [X] Mantener provisional el contenido de cada sección en esta fase; no introducir todavía el conjunto final de datos.

### Navegación y controles compartidos

- [X] Implementar navegación entre las seis secciones sin recarga de página.
- [X] Actualizar el indicador visual y `aria-current` del enlace de navegación activo.
- [X] Implementar dropdowns de acciones: abrir el menú elegido y cerrar los demás al abrirlo.
- [X] Cerrar dropdowns al hacer clic fuera y mantenerlos abiertos al interactuar dentro del menú.
- [X] Implementar un patrón compartido de modal con apertura por acción y cierre por botón, backdrop y tecla Escape.
- [X] Evitar que un clic dentro del contenido del modal lo cierre; el backdrop debe cerrar solo el modal activo.
- [X] Añadir un componente compartido de notificación para feedback de acciones simuladas.
- [X] Implementar el control claro/oscuro con las clases `dark:` de Tailwind.
- [X] Guardar y restaurar el tema seleccionado mediante `localStorage` al navegar y recargar.
- [X] Mantener las acciones simuladas en JavaScript vanilla; no añadir llamadas de red ni persistencia de datos.

### Verificación de fase

- [X] Abrir `index.html` desde un servidor estático local y comprobar que carga sin errores de consola.
- [X] Recorrer las seis secciones y comprobar que no hay recarga y que el indicador activo coincide con la sección visible.
- [X] Abrir dos dropdowns consecutivamente y comprobar que solo queda uno abierto; clicar fuera y dentro para probar ambos casos.
- [X] Abrir un modal y verificar cierre por botón, backdrop y Escape, así como que clicar dentro no lo cierra.
- [X] Cambiar el tema, navegar a otra sección y recargar; comprobar que el tema elegido se conserva.

## Fase 2: Contenido y datos

### Datos compartidos y dashboard

- [X] Definir datos simulados dentro de `index.html` para usuarios, agentes, skills, contratos e incidencias.
- [X] Incluir al menos 5 usuarios, 4 agentes, 4 skills, 4 contratos y 6 incidencias.
- [X] Usar identificadores estables y mantener los mismos nombres de agentes entre agentes, contratos y errores.
- [X] Mantener los nombres de skills idénticos entre catálogo, agentes y contratos.
- [X] Incorporar en Dashboard cuatro métricas: ingresos, pérdidas por descuentos, agentes activos y agentes fallando.
- [X] Añadir al Dashboard el área de actividad semanal completa, de ancho completo y con borde discontinuo, además de los datos/resumen requeridos.

### Secciones y acciones

- [X] Completar la tabla de usuarios con nombre, email, plan, estado e identificador; incluir fecha de registro en los datos disponibles para el modal.
- [X] Verificar que cada fila de usuario muestre al menos nombre, email, plan y badge de estado.
- [X] Conectar la búsqueda de usuarios por nombre, email e ID y los filtros de plan y estado.
- [X] Implementar en cada fila de usuario el menú con “Ver detalle” y “Eliminar”.
- [X] Cargar en el modal de usuario los datos de la fila seleccionada; incluir nombre, email, plan, estado, fecha de registro e ID.
- [X] Completar agentes con nombre, propietario, estado y skills asociadas; dejar todas las listas colapsadas inicialmente.
- [X] Conectar los controles de expansión/colapso de skills y el menú de cada agente con “Configurar” y “Eliminar”.
- [X] Añadir una transición suave y visible al expandir y contraer las skills del agente.
- [X] Hacer que “Configurar” abra un modal con el prompt del agente seleccionado y que guardar actualice el dato simulado en memoria de página.
- [X] Completar el catálogo con nombre, descripción y número de agentes por skill, más la explicación contextual de qué es una skill.
- [X] Conectar búsqueda y filtros de skills; mostrar un estado vacío cuando no haya coincidencias.
- [X] Implementar en cada skill “Ver detalle” con información de la skill y agentes asociados, y “Eliminar” como acción simulada.
- [X] Completar la tabla de contratos con cliente, agente, skills, fechas e importe pagado.
- [X] Conectar búsqueda y filtros de contratos; no se muestran controles de paginación sin implementar.
- [X] Incluir en cada fila de contrato un dropdown de acciones con “Ver detalle” y comprobar que el menú se cierra al hacer clic fuera.
- [X] Hacer que “Ver detalle” abra un modal con los datos de ese contrato: cliente, agente, fechas, importe total y desglose de precios individuales por skill.
- [X] Completar al menos seis incidencias con timestamp, agente, tipo y descripción; usar un badge distinto según tipo.
- [X] Conectar búsqueda y filtros del log de errores, incluido el estado.
- [X] Incluir en cada incidencia un dropdown con “Ver detalle” y “Marcar como resuelto”; comprobar que se cierra al hacer clic fuera.
- [X] Hacer que el detalle de una incidencia muestre los datos de la fila seleccionada.
- [X] Implementar “Marcar como resuelto” para actualizar badge/estado sin recarga; mantener los filtros y contadores sincronizados.
- [X] Hacer que contadores y mensajes “Mostrando N de M” coincidan con los datos renderizados y resultados filtrados.
- [X] Implementar los botones superiores visibles solo si realizan una acción simulada coherente con la spec; quitar o desactivar las CTAs stub fuera de alcance, como un registro de skills sin formulario.

### Verificación de fase

- [X] Comprobar los mínimos de datos de cada sección y que no haya identificadores o nombres inconsistentes entre vistas.
- [X] Probar cada búsqueda y filtro con coincidencias, sin coincidencias y al restablecer valores.
- [X] Probar los dropdowns de usuarios, agentes, skills, contratos e incidencias: cada fila/tarjeta abre sus propias acciones y todos se cierran al hacer clic fuera.
- [X] Abrir detalles de más de un registro por sección y comprobar que el contenido cambia según el registro seleccionado.
- [X] Verificar que los modales de al menos cuatro secciones (usuarios, agentes, skills, contrataciones o errores) cierran tanto con su botón como con el backdrop.
- [X] Editar y guardar un prompt; comprobar el cambio en memoria de página sin recarga.
- [X] Marcar una incidencia como resuelta; comprobar el cambio visual y el comportamiento con filtros activos.
- [X] Confirmar que todas las listas de skills están colapsadas al cargar y alternan su estado al activarlas.
- [X] Verificar que contratos y catálogo usan los mismos nombres de skills y que cada detalle contractual incluye desglose de precios.

## Fase 3: Estilo y ajuste visual

### Sistema visual

- [X] Unificar en `index.html` los tokens, tipografías y configuración Tailwind reutilizados de Stitch.
- [X] Configurar stacks Hanken Grotesk, Inter y JetBrains Mono con fallbacks locales, según `DESIGN.md`, sin hojas de estilo externas.
- [X] Conservar las superficies, colores semánticos, estados, densidad y estructura del shell Stitch cuando cumplan la spec.
- [X] Usar tokens estructurados y configuración/clases Stitch como referencia de color ante la discrepancia documentada en `DESIGN.md`; no modificar dicho archivo.
- [X] Aplicar estados visibles de hover y foco a enlaces, botones, campos, filtros y menús.
- [ ] Revisar contraste de texto, badges y estados en los temas claro y oscuro.

### Layout, semántica y restricciones

- [X] Ajustar la distribución para escritorio y tablet, manteniendo visible y usable la navegación lateral en tablet.
- [X] Revisar tablas anchas, textos largos, tarjetas y filtros para evitar recortes, solapamientos y desbordes.
- [X] Asegurar que los modales tengan altura máxima y permitan desplazamiento si el contenido supera el viewport.
- [X] Usar etiquetas HTML semánticas y asociaciones accesibles entre labels y controles.
- [X] Eliminar atributos `style`; sustituir, por ejemplo, la barra de cuota por `<progress>` o utilidades Tailwind.
- [X] Confirmar que el documento no depende de frameworks, backend, persistencia real ni hojas CSS externas.

### Verificación de fase

- [ ] Comparar el resultado con las capturas Stitch en escritorio a 1440 px.
- [ ] Revisar el layout en tablet a 768–1024 px en ambos temas.
- [ ] Comprobar foco, contraste, navegación, tablas, dropdowns, modales y textos largos en ambos temas.
- [X] Buscar en `index.html` atributos `style=` y referencias a frameworks, backend o CSS externo; resolver cualquier coincidencia.
- [X] Volver a recorrer los flujos principales de las fases 1 y 2 tras los cambios visuales.

## Referencias Stitch

- Shell, usuarios y filtros/modal: [Gestion-de-usuarios.html](stitch-reference/Gestion-de-usuarios.html)
- Agentes y modal editable: [Gestion-de-agentes.html](stitch-reference/Gestion-de-agentes.html)
- Catálogo y filtros de skills: [Catalogo-de-skills..html](stitch-reference/Catalogo-de-skills..html)
- Contratos: [Contrataciones.html](stitch-reference/Contrataciones.html)
- Errores: [Log-de-errores.html](stitch-reference/Log-de-errores.html)
- Dashboard: [Dashboard-general.html](stitch-reference/Dashboard-general.html)
