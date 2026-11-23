# SPECS.md

## 1. Descripción del producto

### Qué es AgentHub
AgentHub es un panel administrativo web para supervisar agentes de inteligencia artificial, sus usuarios, skills, contrataciones e incidencias operativas.

### Usuario administrador
Está dirigido a personal administrativo que necesita:
- Consultar métricas globales.
- Gestionar usuarios y agentes.
- Revisar skills disponibles.
- Supervisar contratos.
- Resolver errores del sistema.

## 2. Stack y restricciones

### Stack tecnológico
- HTML5 semántico.
- Tailwind CSS mediante CDN.
- JavaScript vanilla.
- Datos hardcodeados dentro del HTML o JavaScript.
- Sin frameworks frontend.
- Sin backend ni persistencia real.
- Sin archivos CSS externos.
- Sin atributos `style` en línea.

### Restricciones
- El prototipo debe funcionar al abrir `index.html` o mediante un servidor estático local.
- El modo oscuro puede persistir durante la navegación mediante `localStorage`.
- Las acciones estarán simuladas en el cliente.
- La navegación puede implementarse mostrando y ocultando secciones con JavaScript.
- El diseño debe ser usable en escritorio y tablet.

## 3. Especificaciones por sección

### Dashboard

1. Mostrar cuatro tarjetas responsivas de métricas: ingresos totales, pérdidas por descuentos, agentes activos y agentes fallando.
2. Cada tarjeta debe incluir un icono, una etiqueta y un valor hardcodeado. Los tipos de métrica deben usar colores de acento distintos.
3. Mostrar un área de ancho completo debajo de las tarjetas que represente visualmente la actividad semanal mediante un contenedor con borde discontinuo.

### Gestión de usuarios

1. Mostrar una tabla con al menos cinco usuarios hardcodeados. Cada fila debe mostrar nombre, email, plan y badge de estado.
2. Cada fila debe incluir un dropdown ⋮ con las acciones “Ver detalle” y “Eliminar”.
3. “Ver detalle” debe abrir un modal con nombre, email, plan, estado, fecha de registro e identificador del usuario.
4. El modal debe cerrarse mediante su botón de cierre o al hacer clic en el backdrop.

### Gestión de agentes

1. Mostrar al menos cuatro agentes. Cada elemento debe incluir nombre, propietario, badge de estado y control expandible de skills.
2. Las listas de skills deben estar colapsadas por defecto y expandirse o contraerse con una transición suave al activar su control.
3. Cada agente debe tener un dropdown ⋮ con las acciones “Configurar” y “Eliminar”.
4. “Configurar” debe abrir un modal que permita editar el prompt de sistema del agente en un `<textarea>`.

### Skills

1. Mostrar un catálogo de al menos cuatro skills con nombre, descripción y número de agentes que la tienen habilitada.
2. Incluir una explicación breve dentro del panel sobre qué significa una skill en el contexto de AgentHub.
3. Cada skill debe tener un dropdown ⋮ con las acciones “Ver detalle” y “Eliminar”.
4. “Ver detalle” debe mostrar la información de la skill y sus agentes asociados en un modal.

### Contrataciones de agentes

1. Mostrar una tabla con al menos cuatro contratos y las columnas cliente, agente, skills contratadas, inicio, fin e importe pagado.
2. Cada fila debe incluir un dropdown ⋮ con al menos la acción “Ver detalle”.
3. “Ver detalle” debe abrir un modal con el cliente, agente, fechas, importe total y el desglose de las skills contratadas con precio individual.
4. Las habilidades presentadas deben conservar los nombres usados en el catálogo de skills.

### Log de errores

1. Mostrar al menos seis entradas hardcodeadas con timestamp, nombre del agente, tipo de error y descripción breve.
2. Usar badges con códigos de color distintos según el tipo de error.
3. Cada entrada debe incluir un dropdown ⋮ con las acciones “Ver detalle” y “Marcar como resuelto”.
4. “Ver detalle” debe abrir un modal con información ampliada de la incidencia.
5. “Marcar como resuelto” debe cambiar el estado visual de la entrada sin recargar la página.

## 4. Inventario de componentes reutilizables

- **Sidebar:** navegación persistente con enlaces a las seis secciones e indicador de sección activa.
- **Tarjeta de métrica:** icono, etiqueta, valor, acento visual y sombra.
- **Tabla:** encabezados semánticos y filas consistentes con datos hardcodeados.
- **Dropdown de acciones:** menú ⋮ que abre opciones, ignora clics internos y se cierra al hacer clic fuera.
- **Modal:** contenedor centrado, contenido dinámico, botón de cierre y backdrop interactivo.
- **Badge:** etiqueta compacta reutilizable para estado, plan y tipo de error.
- **Lista de skills colapsable:** control de expansión y transición visual.
- **Toggle de tema:** control claro/oscuro ubicado en la barra superior.
- **Botón de navegación:** enlace persistente en sidebar con estado activo.
- **Campo editable:** `<textarea>` utilizado para el prompt del sistema del agente.

## 5. Metodología SDD

### Funcionalidad
Proporcionar una interfaz administrativa capaz de navegar entre seis áreas operativas y mostrar información simulada de forma clara e interactiva.

### Usuarios
Administradores de AgentHub responsables de supervisar usuarios, agentes, skills, contratos e incidencias.

### Historias de usuario
- Como administrador, quiero consultar las métricas principales para conocer rápidamente el estado del negocio.
- Como administrador, quiero revisar usuarios para encontrar sus datos y estado de suscripción.
- Como administrador, quiero configurar agentes para actualizar su comportamiento.
- Como administrador, quiero revisar las skills disponibles para entender cómo amplían las capacidades de los agentes.
- Como administrador, quiero consultar contratos para validar el alcance y el importe contratado.
- Como administrador, quiero identificar errores para diagnosticar incidencias y marcarlas como resueltas.
- Como administrador, quiero navegar cómodamente y cambiar el tema visual.

### Requisitos funcionales

- El sistema debe presentar las seis secciones mediante la barra lateral.
- La sección activa debe mantenerse visualmente diferenciada.
- Los datos deben ser consistentes: los nombres de agentes deben coincidir en agentes, contratos y errores.
- Los dropdowns deben abrirse de forma independiente y cerrarse al hacer clic fuera.
- Los modales deben cerrarse mediante botón de cierre y clic en el backdrop.
- Las skills de agentes deben estar colapsadas por defecto.
- La expansión de skills debe tener una transición visible.
- El tema seleccionado debe conservarse entre secciones.
- Las acciones “Eliminar” pueden simularse cerrando o eliminando visualmente la fila.
- “Marcar como resuelto” debe modificar el estado visual sin enviar datos a un servidor.

### Requisitos no funcionales

- El panel debe usar clases utilitarias de Tailwind de forma consistente.
- El HTML debe usar etiquetas semánticas como `nav`, `header`, `main`, `section` y `table`.
- No debe depender de frameworks ni backend.
- Debe mantener una distribución usable en escritorio y tablet.
- Los controles deben tener estados visuales de hover y foco.
- Las operaciones JavaScript deben ejecutarse sin recargar la página.

### Casos límite

- Al abrir un dropdown, cualquier otro dropdown abierto debe cerrarse.
- Clicar fuera de un dropdown debe cerrarlo sin abrir otra acción.
- Clicar el backdrop debe cerrar solamente el modal activo.
- Clicar dentro del contenido del modal no debe cerrar el modal.
- Cambiar de sección debe conservar el modo claro u oscuro elegido.
- Si no existen coincidencias de datos, el modal debe mostrar texto vacío o informativo.
- Los textos largos deben ajustarse sin romper el layout.
- El panel debe seguir siendo navegable con la sidebar visible en tablets.
- Los modales deben tener una altura máxima y permitir desplazamiento cuando su contenido exceda el viewport.

### Fuera de alcance

- Autenticación y gestión real de cuentas.
- CRUD persistente.
- Conexión a API o base de datos.
- Pagos reales.
- Persistencia real de contratos o errores.
- Backend de automatización de agentes.
- Responsividad móvil completa.
- Integración con sistemas externos.
- Procesamiento real de inteligencia artificial.

## 6. Criterios de aceptación

1. La navegación lateral permite acceder a las seis secciones.
2. La sección activa se identifica visualmente.
3. El Dashboard muestra exactamente o al menos las cuatro métricas requeridas.
4. El Dashboard muestra un área de actividad semanal completa.
5. Gestión de usuarios muestra al menos cinco filas con datos completos.
6. El dropdown de cada usuario abre opciones y se cierra al hacer clic fuera.
7. “Ver detalle” abre un modal completo en la sección de usuarios.
8. El modal de usuario se cierra con su botón de cierre y con clic en el backdrop.
9. Gestión de agentes muestra al menos cuatro agentes.
10. Las skills están colapsadas inicialmente y alternan estado al hacer clic.
11. La expansión de skills muestra una transición visible.
12. “Configurar” abre un modal editable con el prompt de sistema.
13. Skills muestra al menos cuatro skills y una explicación contextual.
14. Contrataciones muestra al menos cuatro contratos con el desglose solicitado.
15. “Ver detalle” muestra el precio individual de las skills contratadas.
16. Log de errores muestra al menos seis entradas con timestamp y tipo.
17. “Marcar como resuelto” cambia el estado visual de la entrada.
18. El toggle claro/oscuro modifica toda la interfaz usando utilidades `dark:`.
19. El tema elegido se conserva al navegar entre secciones.
20. Todos los dropdowns, sin excepción, se cierran al hacer clic fuera.
21. Los modales de al menos cuatro secciones tienen cierre por botón y backdrop.
22. Los nombres de los agentes son consistentes entre secciones.
23. No existen archivos CSS externos ni atributos `style` en línea.
24. El HTML incluye estructura semántica adecuada.
25. El prototipo mantiene un layout usable en escritorio y tablet.
