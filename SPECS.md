# AgentHub Admin Panel Specification

## Product Description

AgentHub is a SaaS platform where companies rent preconfigured AI agents and attach skills such as web research, document reading, and calendar management. The admin panel is an internal operations tool for an AgentHub administrator to review platform health, manage users and agents, inspect the skill catalog and rental contracts, and resolve execution errors. All prototype data is hardcoded; no API or backend is used.

## Technology and Constraints

- Deliver the prototype as a single root-level `index.html` file.
- Use semantic HTML and Tailwind CSS loaded from the official browser CDN in the document head. Use Tailwind utilities for all styling; do not add custom CSS files or inline `style` attributes.
- Use vanilla JavaScript in the HTML file for client-side interactions. Do not use frameworks, jQuery, build tools, or backend services.
- Keep all sample records hardcoded and consistent across sections. Agent names and owners must match wherever they appear.
- Support desktop and tablet layouts, with a persistent sidebar, a compact responsive navigation treatment, and a top bar that remains available across sections.
- Use Tailwind `dark:` utilities and a top-bar toggle for light and dark themes. Persist the selected theme in `localStorage` so it survives section changes and reloads.

## Global Layout and Interaction

- Use a persistent sidebar with the AgentHub identity and links to Dashboard, Users, Agents, Skills, Agent Contracts, and Error Log. Show a clear active state for the selected section.
- Use a top bar containing the current section title, a small contextual date or status, and an accessible light/dark theme toggle.
- Show one main content section at a time. Sidebar links change the visible section without a backend or full-page navigation.
- Use a consistent page heading, concise section description, and content spacing across the six views.
- Use shared status/severity badges, row action menus, and detail modals. Use accessible names, keyboard-operable buttons, and visible focus states.

## Section Specifications

### 1. Dashboard

1. Render four responsive metric cards for monthly revenue, discount and coupon losses, active agents, and failing agents. Each card contains a distinct icon, label, hardcoded value, and a restrained accent color appropriate to the metric.
2. Arrange the cards in a two-column grid at tablet widths and a four-column grid on wide screens; stack them on narrow screens. Keep the values visually prominent without making the cards excessively tall.
3. Place a full-width weekly activity chart placeholder below the cards. Use a dashed boundary, a centered chart label, and a compact legend or week labels to make the empty visualization intentional.
4. Include a small operational summary such as recent activity or platform health beneath or beside the chart when space allows, without displacing the four required metrics.

### 2. User Management

1. Show a semantic table with at least five hardcoded users and columns for name, email, plan, status, and actions. Make the table horizontally usable on tablet and narrow screens.
2. Give every user row a `...` action button that opens a compact menu containing View detail and Delete. Menus must be positioned with their trigger and close on outside click or Escape.
3. View detail opens a backdrop modal with the full user record, including identity, email, plan, status, and any additional sample account metadata. The modal closes from its close button, backdrop click, or Escape.
4. Delete provides a confirmation step before removing the row from the in-memory prototype data; cancellation leaves the record unchanged.

### 3. Agent Management

1. List at least four hardcoded agents with agent name, owner, active/inactive/failing status badge, skill summary, and row actions. Reuse owner and agent names consistently in user, contract, and error data.
2. Keep each agent's associated skills hidden by default. An explicit expand button reveals the complete skill list and an updated expanded state; a visible height/opacity transition makes the change understandable.
3. Give each agent an action menu with Configure and Delete. Configure opens a modal with the agent name and its system prompt in an editable textarea.
4. The Configure modal has close and save controls. Saving updates the displayed in-memory prompt for the current session; deleting requires confirmation.

### 4. Skills

1. Display at least four hardcoded skills as compact catalog rows or tiles, each with a skill name, short description, and count of agents currently using it.
2. Include a concise in-panel explanation that a skill is a reusable capability attached to an agent, such as browsing, document reading, or calendar management.
3. Give every skill a `...` action menu with View detail and Delete. View detail opens a modal with the description and agents using the skill.
4. Deleting a skill requires confirmation and updates the in-memory catalog and displayed usage count consistently for the session.

### 5. Agent Contracts

1. Show at least four hardcoded active or past rental contracts in a semantic table with client, rented agent, contracted skills, start date, end date, amount paid, and actions.
2. Keep names and skills consistent with the User Management, Agent Management, and Skills records. Use clear date and currency formatting, and allow the table to scroll horizontally on narrow screens.
3. Give every row a `...` action menu with View detail. View detail opens a modal with the complete contract record, status, date range, total paid, and an itemized skill list with each skill's individual price.
4. Close contract details using the close button, backdrop click, or Escape.

### 6. Error Log

1. Show at least six hardcoded agent execution errors, each with timestamp, agent name, error type/severity badge, short description, and actions.
2. Use distinct semantic colors for error categories or severities and include readable text labels so severity is not communicated by color alone.
3. Give every error a `...` action menu with View detail and Mark as resolved. View detail opens a modal containing the full trace, timestamp, agent, and error metadata.
4. Mark as resolved updates the row's visible status and styling without removing the record. Close detail modals using the close button, backdrop click, or Escape.

## Component Inventory

- Persistent sidebar navigation with active section state
- Responsive top bar with section title and dark/light mode toggle
- Metric card with icon, label, value, and accent treatment
- Status and severity badge with text label
- Reusable row action dropdown with outside-click and Escape handling
- Reusable accessible modal with close button, backdrop dismissal, and Escape dismissal
- Collapsible agent skill list with expanded/collapsed state and transition
- Semantic responsive table for users, contracts, and errors
- Confirmation dialog for destructive actions
- Reusable empty or placeholder visualization region for weekly activity

## Acceptance Criteria

1. The root `index.html` renders all six sections, and each can be selected from persistent sidebar navigation with a visible active state.
2. The dashboard shows four required metric cards and a full-width weekly activity placeholder.
3. User Management contains at least five user rows with name, email, plan, status, and an action menu.
4. Every user row's action menu opens and closes by trigger; outside click and Escape close an open menu.
5. User View detail opens a populated modal; its close button, backdrop, and Escape all dismiss it.
6. Agent Management contains at least four agents with owner, status, and skill lists collapsed by default; each list expands and collapses with a visible transition.
7. Agent Configure opens an editable system-prompt textarea; saving retains the edited value in the current page session.
8. Skills contains at least four catalog entries, usage counts, an explanatory description, and working View detail and Delete actions.
9. Agent Contracts contains at least four contracts and its detail modal includes an itemized skill-price breakdown.
10. Error Log contains at least six entries with readable color-coded severity labels; View detail shows a full trace and Mark as resolved visibly changes the row.
11. All detail modals close from their close button and backdrop, and Escape dismissal is supported consistently.
12. The theme toggle changes the complete interface using Tailwind `dark:` utilities and stores the preference so it persists across section changes and reloads.
13. Destructive actions require confirmation; canceling preserves the affected record.
14. Shared sample data is consistent: agents, owners, clients, and skills match across all relevant sections.
15. The page uses semantic elements including `nav`, `header`, `main`, `section`, and `table`, contains no external CSS file or inline `style` attribute, and remains usable at desktop and tablet widths.