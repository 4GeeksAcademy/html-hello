# Plan: Unificar AgentHub

El resultado será un único `index.html` en la raíz, construido por capas según el algoritmo del pintor: primero estructura y comportamientos, luego contenido y datos, y finalmente estilo. Se reutilizarán las estructuras Stitch que cumplan la spec y se corregirán sus interacciones incompletas. No se modificarán las referencias originales.

## Fase 1: Estructura y comportamientos

1. Crear el documento con `lang="es"`, Tailwind CSS CDN y JavaScript vanilla; sin frameworks, backend ni CSS externo.
2. Reutilizar el shell compartido de Stitch: sidebar persistente, barra superior y seis secciones semánticas. Dashboard será la vista inicial; la navegación cambiará de sección sin recargar.
3. Crear componentes comunes con identificadores únicos: dropdown, modal, notificación y control de tema. Centralizar los manejadores para evitar colisiones entre los scripts de las páginas independientes.
4. Implementar navegación y estado activo, apertura exclusiva/cierre externo de dropdowns, cierre de modales por botón, backdrop y Escape, y tema claro/oscuro persistido en `localStorage`.

**Verificación de fase:** abrir `index.html`; recorrer las seis secciones sin recarga; comprobar estado activo, comportamiento de dropdowns y cierre de modales; cambiar de tema, navegar y recargar para verificar que se conserva.

## Fase 2: Contenido y datos

1. Consolidar datos simulados dentro del documento: mínimo 5 usuarios, 4 agentes, 4 skills, 4 contratos y 6 incidencias. Mantener consistentes los nombres e identificadores de agentes y skills entre secciones.
2. Reutilizar el contenido de Stitch para las métricas y actividad semanal, tablas, tarjetas y datos operativos; completar los campos exigidos por la spec, incluida la fecha de registro en el detalle del usuario.
3. Conectar búsquedas, filtros, contadores y estados vacíos. Hacer dinámicos los detalles según la fila o tarjeta seleccionada; el detalle del contrato debe mostrar precios individuales y usar los mismos nombres que el catálogo.
4. Completar las acciones simuladas requeridas: ver detalle y eliminar usuarios; configurar agentes y guardar el prompt en memoria de página; ver/eliminar skills; consultar contratos; ver incidencias y marcarlas como resueltas. Las listas de skills de agentes deben iniciar colapsadas.
5. No añadir CRUD persistente ni un flujo real de registro de skills. Si el botón de registro no tiene una acción definida por la spec, retirarlo o dejarlo fuera del alcance.

**Verificación de fase:** comprobar cantidades mínimas y consistencia cruzada; probar filtros con resultados y sin ellos; verificar que cada modal refleja el registro elegido; editar un prompt y resolver una incidencia sin recargar.

## Fase 3: Estilo y ajuste visual

1. Aplicar las clases, tipografías, superficies, badges y densidad visual de Stitch donde sean compatibles con [`DESIGN.md`](DESIGN.md) y [`spec.md`](spec.md).
2. Ajustar tablas, sidebar, textos largos y modales para escritorio y tablet; mantener foco visible, contraste semántico y scroll en modales con contenido largo.
3. Eliminar atributos `style` al trasladar elementos. Por ejemplo, usar un `<progress>` semántico para la cuota de usuario. No agregar hojas CSS externas.

**Verificación de fase:** revisar en escritorio a 1440 px y tablet a 768–1024 px, en ambos temas; comprobar desbordes, solapamientos, foco y legibilidad; confirmar que no haya `style=`, frameworks, backend ni CSS externo.

## Referencias reutilizables

- Shell, usuarios y sus filtros/modal: [Gestion-de-usuarios.html](stitch-reference/Gestion-de-usuarios.html)
- Agentes y modal editable: [Gestion-de-agentes.html](stitch-reference/Gestion-de-agentes.html)
- Catálogo y filtros de skills: [Catalogo-de-skills..html](stitch-reference/Catalogo-de-skills..html)
- Tabla y estructura de contratos: [Contrataciones.html](stitch-reference/Contrataciones.html)
- Detalle y resolución de incidencias: [Log-de-errores.html](stitch-reference/Log-de-errores.html)
- Métricas y actividad semanal: [Dashboard-general.html](stitch-reference/Dashboard-general.html)

## Decisión de estilo

`DESIGN.md` tiene una discrepancia entre `primary` en el YAML (`#4edea3`) y el color descrito como primario en la prosa (`#10B981`). Se priorizarán los tokens estructurados y la configuración/clases de Stitch para conservar la apariencia de las capturas; no se cambiará `DESIGN.md` como parte del entregable.
