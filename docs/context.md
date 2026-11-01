# Project Context

> **Team size:** 2 developers  
> **Role:** Consulting firm delivering a prototype  
> **Brand:** Rue de la Mode — online fashion store

---

## 1. Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure + Schema.org (JSON-LD) for SEO |
| **Tailwind CSS v4** | Utility-first styling via CDN |
| **Git + GitHub** | Version control, collaboration, code review |

---

## 2. Repository Structure

```
/
├── docs/                  # Project documentation
│   ├── brief.md           # Client requirements & scope
│   ├── context.md         # Team & workflow information
│   └── specs.md           # Detailed view specifications
├── assets/                # Static assets (images, icons)
├── index.html             # Home page
├── catalog.html           # Catalog / product grid
├── product.html           # Product detail view
├── cart.html              # Shopping cart
├── checkout.html          # Payment form
├── server.py              # Local dev server (Flask)
└── README.md              # Original template readme
```

> **All HTML files** will be created progressively on their respective `feature/*` branches.

---

## 3. Development Workflow

### Branching Strategy

```
main
  └── feature/home
  └── feature/catalog
  └── feature/product-view
  └── feature/cart
  └── feature/checkout
```

- One branch per view
- **Never** commit directly to `main`
- Each branch is created from `main`

### Commit Guidelines

| Principle | Detail |
|-----------|--------|
| **Frequency** | Commit often, one logical change per commit |
| **Messages** | Clear and descriptive (e.g. *"Add navbar and hero to home"*) |
| **Scope** | Keep each commit focused on a single component or feature |

### Pull Request Flow

1. Push branch to remote
2. Open a Pull Request (PR) with a description of changes
3. Pull latest `main` into branch before submitting PR
4. Resolve conflicts as a team
5. Merge into `main` after review/approval

### Team Rules

- ❌ No force-push or overwriting teammate's work without agreement
- ✅ Keep `main` always deployable
- ✅ Use `git pull origin main` frequently to stay synced
- ✅ Review PRs before merging