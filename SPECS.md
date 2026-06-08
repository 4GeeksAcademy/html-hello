# SPECS.md

# AgentHub Admin Panel Specification

## Product Description

AgentHub es una plataforma SaaS que permite a empresas alquilar agentes de IA preconfigurados para realizar tareas de negocio específicas. Los agentes pueden equiparse con distintas skills como navegación web, lectura de documentos o gestión de calendarios.

El usuario principal de este panel es el administrador interno de AgentHub, responsable de supervisar usuarios, agentes, skills, contratos de alquiler y errores de ejecución.

---

# Technology Stack & Constraints

## Stack

* HTML5
* Tailwind CSS vía CDN
* JavaScript Vanilla (ES6)
* Lucide Icons vía CDN (opcional)

## Restricciones

* Sin React
* Sin Vue
* Sin Angular
* Sin jQuery
* Sin frameworks frontend
* Sin backend
* Sin llamadas API
* Todos los datos deben estar hardcodeados
* Sin archivos CSS personalizados
* Sin estilos inline
* Toda la interactividad debe implementarse exclusivamente con JavaScript Vanilla

---

# Global Layout

### Layout Principal

1. Sidebar persistente en el lateral izquierdo visible en escritorio.
2. Topbar fija en la parte superior.
3. Área principal de contenido responsive.
4. Navegación entre seis secciones.
5. Indicador visual de sección activa.

### Dark Mode

1. Toggle ubicado en la topbar.
2. Alterna entre modo claro y oscuro usando clases dark: de Tailwind.
3. El estado se guarda en localStorage.
4. El tema seleccionado se mantiene al navegar entre secciones.

---

# Dashboard

### Dashboard Spec 1

Mostrar cuatro tarjetas métricas en una grilla responsive:

* Total Revenue
* Discount Losses
* Active Agents
* Failing Agents

Cada tarjeta incluye:

* Ícono
* Etiqueta
* Valor hardcodeado

### Dashboard Spec 2

Las tarjetas utilizan colores de acento diferentes según el tipo de métrica.

### Dashboard Spec 3

Debajo de las métricas se muestra un área placeholder para gráfico semanal:

* Ancho completo
* Borde discontinuo
* Altura mínima 300px
* Texto centrado "Weekly Activity Chart"

---

# User Management

### User Management Spec 1

Mostrar una tabla con al menos cinco usuarios.

Columnas:

* Name
* Email
* Plan
* Status
* Actions

### User Management Spec 2

Status se representa mediante badges:

* Active
* Suspended
* Trial

### User Management Spec 3

Cada fila posee dropdown de acciones:

* View Details
* Delete

### User Management Spec 4

Seleccionar View Details abre un modal overlay mostrando:

* Nombre
* Email
* Plan
* Estado
* Fecha de registro
* Último acceso

### User Management Spec 5

El modal se cierra mediante:

* Botón Close
* Click sobre backdrop

---

# Agent Management

### Agent Management Spec 1

Mostrar listado de al menos cuatro agentes.

Cada agente incluye:

* Agent Name
* Owner
* Status Badge

### Agent Management Spec 2

Status posibles:

* Active
* Inactive
* Failing

### Agent Management Spec 3

Las skills aparecen ocultas inicialmente.

### Agent Management Spec 4

Un botón expandible permite:

* Expandir skills
* Colapsar skills

Con transición suave.

### Agent Management Spec 5

Cada agente posee dropdown:

* Configure
* Delete

### Agent Management Spec 6

Configure abre modal con:

* Nombre del agente
* Prompt del sistema
* Textarea editable

---

# Skills

### Skills Spec 1

Mostrar catálogo de mínimo cuatro skills.

### Skills Spec 2

Cada skill contiene:

* Nombre
* Descripción
* Número de agentes habilitados

### Skills Spec 3

Mostrar bloque informativo explicando:

"Una skill representa una capacidad adicional que puede ser asignada a un agente para ampliar sus funcionalidades."

### Skills Spec 4

Cada skill posee dropdown:

* View Details
* Delete

### Skills Spec 5

View Details abre modal con:

* Nombre
* Descripción completa
* Casos de uso
* Cantidad de agentes usando la skill

---

# Agent Rentals

### Contracts Spec 1

Mostrar tabla con mínimo cuatro contratos.

Columnas:

* Client
* Agent
* Skills
* Start Date
* End Date
* Total Paid

### Contracts Spec 2

Skills pueden mostrarse como badges.

### Contracts Spec 3

Cada fila posee dropdown:

* View Details

### Contracts Spec 4

El modal muestra:

* Cliente
* Agente
* Fechas
* Precio total

### Contracts Spec 5

Mostrar desglose individual de skills:

| Skill | Price |
| ----- | ----- |

---

# Error Log

### Error Log Spec 1

Mostrar mínimo seis errores hardcodeados.

### Error Log Spec 2

Cada error contiene:

* Timestamp
* Agent Name
* Error Type
* Description

### Error Log Spec 3

Los tipos de error utilizan badges coloreados:

* Critical (rojo)
* Warning (amarillo)
* Info (azul)

### Error Log Spec 4

Cada fila posee dropdown:

* View Details
* Mark as Resolved

### Error Log Spec 5

View Details abre modal mostrando:

* Error completo
* Stack Trace
* Timestamp
* Agente involucrado

---

# Reusable Component Inventory

## Sidebar

* Navegación principal
* Estado activo

## Topbar

* Título
* Toggle Dark Mode

## Metric Card

* Ícono
* Etiqueta
* Valor

## Status Badge

* Estados
* Colores

## Action Dropdown

* Menú contextual
* Apertura/cierre

## Modal

* Overlay
* Contenido dinámico
* Botón cerrar

## Skill Accordion

* Expandir/colapsar skills

## Table Component

* Encabezados
* Filas
* Acciones

## Dark Mode Toggle

* Cambio de tema
* Persistencia

---

# Acceptance Criteria

1. Existe un archivo SPECS.md en la raíz del repositorio.
2. SPECS.md fue commiteado antes de cualquier archivo HTML.
3. Existe una sidebar persistente con seis secciones.
4. Existe indicador visual de sección activa.
5. El Dashboard muestra cuatro métricas.
6. Existe placeholder para gráfico semanal.
7. User Management contiene mínimo cinco usuarios.
8. Cada usuario posee dropdown funcional.
9. View Details abre modal funcional.
10. Los modales se cierran mediante botón Close.
11. Los modales se cierran mediante click en backdrop.
12. Agent Management contiene mínimo cuatro agentes.
13. Las skills de agentes están colapsadas por defecto.
14. Las skills pueden expandirse y colapsarse.
15. Configure abre modal editable.
16. Skills contiene mínimo cuatro skills.
17. Skills muestra explicación contextual.
18. Agent Rentals contiene mínimo cuatro contratos.
19. View Details muestra desglose de skills y precios.
20. Error Log contiene mínimo seis errores.
21. Los errores utilizan badges de gravedad.
22. Mark as Resolved es visible en el dropdown.
23. Todos los dropdowns se cierran al hacer click fuera.
24. Dark Mode cambia toda la interfaz.
25. Dark Mode persiste mediante localStorage.
26. Toda la interactividad utiliza exclusivamente JavaScript Vanilla.
27. Tailwind CSS se carga únicamente mediante CDN.
28. No existen frameworks frontend ni backend.
