[ROLE]
You are a seasoned expert AI engineer and web developer with a previous solid background in UX/UI design too.

[Objective]
## CONTEXT
A startup called AgentHub is building a SaaS platform where companies can rent AI agents — pre-configured intelligent assistants that can be equipped with different skills (capabilities such as browsing the web, reading documents, or managing calendars) and deployed for specific business tasks.
## TASK
You will be building an admin panel that must include six sections:
- Dashboard
- User Management
- Agent Management
- Skills
- Agent Contracts
- Error Log

[GENERATION-METHODOLOGY]
You must generate the code following strictly an ordered-phase execution.
## PHASE 1 STRUCTURE AND DOM TREE
- Only build structure with semanthic html5 tags: (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, etc).


## PHASE 2 CONTENT AND RESOURCES
- No more dummy texts, context related text and images.
- Make sure DOM contains all necessary data and information before layout is applied.

## PHASE 3 LAYOUT, DESIGN SYSTEM, and TAWILWIND CSS
- Layout & grid: md, lg and  xl breakpoints
- Scale and Spacing: Keep consistency with the use and adapting paddings and margins using standard Tailwind scale (e.g `p-4`, `gap-6`)
- Visual Hierarchy and Colors:
    - Primary Color (60%): Main backgrounds `bg-slate-50` / `bg-neutral-900`)
    - Micro-interactions: Add states eg. `hover:`, `focus-visible:` and transitions eg. (`transition-colors duration-200`).
    - A dark/light mode toggle switches the entire color schemes using Tailwinds dark: utilites. The chosen mode is preserved between sections.

[EXPECTED-DELIVERABLE]
HTML code that meets al required specifications per phase outlined below.

-----PHASE SPECS-----

[PHASE-1]

# DASHBOARD SECTION

## Top Bar
- Logo place holder on the top left
- Top right aligned:
    - Notifications icon container
    - Avatar/Profile container
## Nav Bar
Directly below top bar separated by divider and contains the following nav items:
- Home: Default starting section
- User management
- Agent management
- Skills
- Agent contracts
- Error Log


## Main
- H1: Home
Four metrics containers:
- Total Revenue h3
- Discount losses h3
- Active agents h3
- Failing agents h3

## Weekly Activity
- h2: Weekly Activity

# USER MANAGEMENT SECTION

- H1: User Management
- A table with at least 5 hardcoded user rows showing name, email,plan and status
- Each row has an action menu icon that shows view detail and delete actions when clicked

#  AGENT MANAGEMENT SECTION

- H1: Agent Management
- A container
- H2 Agents
- A list of 4 agents h3
 - Labels: agent name, owner, status and skills as a expand control
 - Clicking the expand control reveals the agents associated skills, clicking again collapses them hiding them.
- Each agent has an action icon menu with configure and delete actions revealed on click

# SKILLS SECTION
- H1 Skills
- A catalog of 4 skills
    - Skill name
    - Description of skill
    - Each skill has an action menu icon that on clicked reveals view detail and delete actions


# AGENT CONTRACTS SECTION
- H1: Contracts
- A table inside a container with the following rows:
    - Client, agent, skills, start date/end date and amount paid
    - Each skills table item has an action menu that on click reveals the actions view details and delete.

# ERROR LOG
- H1: Error Log
- A container with a table with the following rows:
 - timestamp, agent name, and short description
 - Each entry has an action icon menu that on click reveals the actions view detail and mark as resolved.



[PHASE-2]

Apply text content to all sections according to the context of the project, no longer dummy texts. They must be related to what is the described on the context of the project described above.

[PHASE-3]

## Top Bar
- Parent container with padding: top, left,right,down
    - Logo container: Aligned top left to parent
        - H3: Agent Hub
    - Top right container
        - Flex row
        - Notifications icon with badge showing number of notifications
        - Avatar/Profile container with user icon
## Nav Bar
- Flex row container for nav items inside parent container
    - Gap between items aligned left
    - Top right: Search bar 
        - Left aligned search icon

## Main
- Card metrics
    - Card titles: H3
        - H4 number labels 

## Weekly Activity
- h2: Weekly Activity
- Full-width weekly activity chart

# USER MANAGEMENT SECTION

- H1: User Management
- Apply stylying to table
- Overflow menu icon that pops up a menu with view detail and delete actions when clicked
    - Menu closes when clicking outside menuor on the icon again
    - Clicking on view details opens a modal with the full user record.
        - Modal closes via close button and by clicking the backdrop
    
#  AGENT MANAGEMENT SECTION

- Apply stylying
- Each againt has a overflow menu icon that pops ups a menu with Configure and Delete 
 - Configure opens a modal with the agents system system prompt in an editable textarea

# SKILLS SECTION

- Apply stylying
- Each skill has a overflow menu icon that on clicks pops up a menu with view detail and delete actions


#  AGENT MANAGEMENT SECTION

- Aplly stylying to table
- Each row has a overflow menu icon that on clicks with view detail action that opens a modal with full contract breakdown, including itemized skills and their individual prices.
    - Modal closes by clicking on the close button


# ERROR LOG

- Apply stylying to table
- Each entry has a overflow menu icon that pops up a menu with view detail and mark as resolved actions

# GLOBAL INTERACTIONS
**IMPORTANT**: All interactivity must be implemented with vanilla JavaScript only — no frameworks (React, Vue, etc.), no jQuery, no build tools. Tailwind must be loaded via CDN only.
- The dark/light theme toggle button in the top bar switches the entire color scheme using tailwind's darl: utilities
    - The chosen mode is preserved while navigating between sections.
- All overflow menus close when cliclking outside the menu or on the overflow icon again
- Al modals close when cliking outside of them on the scrim.
