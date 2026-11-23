---
name: Executive Synthetic Systems
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#e29100'
  on-tertiary-container: '#523200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.25rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

The design system establishes a high-density, mission-critical operations console for enterprise artificial intelligence orchestration. It targets platform engineers, compliance officers, and autonomous agent fleet managers who demand precision, instantaneous status evaluation, and zero visual friction. The emotional posture is calculated, disciplined, and calm under operational stress—evoking the atmosphere of an aerospace telemetries interface paired with Swiss modernist information architecture.

The visual direction merges **Corporate Modernism** with technical **Minimalism**:
- Interfaces prioritize compact information density, sharp structural divisions, and low visual noise over decorative flourishes.
- Statuses take precedence through pinpoint semantic color accents against slate and zinc neutrals.
- Data structures (execution trees, latency telemetry, smart contract validations, error traces) are displayed with crisp contrast, tabular figures, and predictable spatial pacing.

## Colors

The palette is engineered for prolonged operational monitoring in a dark-first corporate paradigm, with full bi-directional support for clean light mode auditing.

- **Primary (`#10B981` Emerald):** Represents operational health, active autonomous agents, validated contracts, and nominal execution states.
- **Secondary (`#6366F1` Indigo):** Dedicated to computational metrics, token throughput, context window consumption, and system analytics.
- **Tertiary (`#F59E0B` Amber):** Flags latency degradation, token limits approaching threshold, rate limits, and non-blocking contract renegotiations.
- **Error / Critical (`#EF4444` Crimson):** Demarcates broken agent loops, failed contracts, exception stack traces, and revoked cryptographic keys.
- **Neutral Core (`#0F172A` Slate/Zinc Base):** Deep slate-tinted blacks and cool zinc grays construct layered surfaces without pure-black clipping.

Surfaces scale from a foundational substrate (`#090D16` canvas) up through contextual container tiers (`#0F172A`, `#1E293B`, `#334155`). Light mode flips to neutral slate bases (`#F8FAFC` canvas, `#FFFFFF` surfaces, and `#E2E8F0` structural outlines) while retaining identical semantic accents.

## Typography

The typographic hierarchy enforces strict visual triage across high-volume telemetry.

- **Headlines (`Hanken Grotesk`):** Clean, structural, contemporary grotesque that balances authoritative presence with compact horizontal footprint. Used for dashboard modules, view transitions, and metric headers.
- **Body (`Inter`):** Systematic neutral workhorse configured with tabular figures (`tnum`) enabled by default across all tables, execution logs, and contract parameters.
- **Labels & Code (`JetBrains Mono`):** Applied to telemetry metrics, payload JSON previews, agent hash IDs, contract addresses, timestamps, and error traces. Monospaced rendering ensures immediate vertical alignment in logs.

## Layout & Spacing

The layout operates on a compact 4px baseline sub-grid supporting a 12-column responsive fluid architecture optimized for 1440px+ command consoles and 768px-1024px auditing tablets.

- **Desktop (1024px+):** Fixed collateral navigation (64px collapsed, 240px expanded), 12-column fluid data grid, 1.25rem column gutters, and 2rem frame margins. Multi-column split views display real-time terminal output parallel to fleet health tables.
- **Tablet (768px - 1023px):** 8-column layout with 1rem gutters and 1.5rem canvas margins. Secondary inspectors and raw error trace side-drawers transition into full-width overlay sheets.
- **Component Rhythms:** Internal padding relies on compact tiers: inputs and table cells utilize `space-sm` vertically and `space-md` horizontally to preserve viewable record density without touch target degradation.

## Elevation & Depth

Visual plane differentiation relies on **Tonal Layers** and **Low-Contrast Outlines** rather than physical drop shadows. This preserves high signal-to-noise ratios and screen contrast in high-density data environments.

- **Layer 0 (Canvas Base):** Deepest tone (`#090D16`), strictly reserved for overall workspace backdrops.
- **Layer 1 (Card & Module Surfaces):** Primary content containers (`#0F172A`) framed by subtle 1px structural borders in `#1E293B` (or `#E2E8F0` in light mode).
- **Layer 2 (Elevated & Active Items):** Hovered table rows, interactive controls, and nested widgets (`#1E293B`) bounded by `#334155`.
- **Layer 3 (Overlays & Dialogs):** Modals, parameter inspectors, and command palettes (`#1E293B`) utilizing a crisp hairline outline (`#475569`) complemented by an ambient, highly diffused perimeter shadow (`0 20px 25px -5px rgba(0, 0, 0, 0.45)`).
- **Status Luminescence:** Critical alerts and active agent markers utilize a subdued 2px outward radial glow tint matched to the respective semantic token (e.g., `#10B981` at 15% opacity).

## Shapes

The design system adopts a **Soft (Level 1)** geometric geometry to reflect enterprise discipline and efficient screen utilization.

- **Base Radius (0.25rem / 4px):** Standard interactive surfaces, input controls, table row hover selections, and compact action buttons.
- **Medium Radius (0.5rem / 8px):** Metric panels, log viewer viewports, contract parameter cards, and modal dialogs.
- **Sub-Component Radius (2px):** Internal elements including status indicator pills, progress track fills, and nested micro-badges.
- **Data Densities:** Sharp precision preserves visual alignment across multi-pane split views and code-like inspector panels.

## Components

### Buttons & Trigger Controls
- **Primary:** Solid `#10B981` fill with `#064E3B` text (or `#FFFFFF` depending on mode contrast standards) for high-urgency operations (e.g., "Deploy Agent", "Authorize Contract"). `rounded` (4px), padding `space-sm` by `space-md`, typography `label-md`.
- **Secondary:** Semi-transparent surface (`#1E293B`) with a 1px border (`#334155`) and light neutral text. Focus rings employ an indigo hairline offset.
- **Destructive:** Bordered crimson accent (`#EF4444` outline, 10% crimson fill) reserved for agent termination, permission revocation, and purge actions.

### Status Chips & Badges
- Constructed with `label-sm` font in `JetBrains Mono`.
- Background tint at 12% opacity paired with solid semantic border and matching text:
  - Active/Online: Emerald (`#10B981`) with a 6px solid pulsing dot indicator.
  - Telemetry/Idle: Indigo (`#6366F1`).
  - Warning/Degraded: Amber (`#F59E0B`).
  - Fault/Halt: Crimson (`#EF4444`).

### Data Tables & Virtualized Lists
- Row heights pegged to 36px (compact) and 44px (default).
- Headers formatted in `label-sm` uppercase with muted `#64748B` typography and bottom hairline border (`#1E293B`).
- Tabular numeric alignment with explicit column boundaries; monospace formatting on agent UUIDs, contract hashes, latency values, and UTC timestamps.

### Form Inputs & Filters
- Compact height (32px-36px), dark slate interior (`#0B1120`), 1px outline (`#334155`).
- Focus state activates an indigo edge (`#6366F1`) with zero offset blur. Inline search inputs feature hotkey affordance tags (e.g., `⌘K`) rendered in `label-sm`.

### Cards & Inspector Panels
- Flat structural surfaces bounded by 1px `#1E293B` borders.
- Header bars delineate panel sections with contextual actions aligned right, keeping controls contextual to the active telemetry stream.

### Log Feed & Error Traces
- Monospaced terminal viewport styling with dark neutral substrate (`#050811`).
- Log lines feature structured columns: `[Timestamp]` (`#64748B`), `[Level]` (color-coded badge), `[Agent/Contract ID]` (`#6366F1`), followed by payload strings with syntax highlighting for JSON and stack traces.