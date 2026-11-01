# Rue de la Mode — French Fashion Online Store

> Visual & functional prototype for a well-known French clothing brand.

---

## About the Project

This is a **static HTML + Tailwind CSS** prototype of an online fashion store. It demonstrates:

- **Solid SEO** with semantic HTML5 and Schema.org
- **Modern, consistent** design using Tailwind CSS v4
- **Fully responsive** layout for mobile, tablet, and desktop

The prototype includes **5 views**:

| View | File | Description |
|------|------|-------------|
| Home | `index.html` | Navbar, hero, new arrivals, best sellers, footer |
| Catalog | `catalog.html` | Filter bar + 4×5 product grid |
| Product | `product.html` | Image + details + description |
| Cart | `cart.html` | 3 sample products + summary + purchase |
| Checkout | `checkout.html` | 3-step payment form |

> **Stack:** HTML + Tailwind CSS only. No React, JS frameworks, or backend.

---

## How to Run the Project

Make sure you have Python 3 and Flask installed, then run:

```bash
pip3 install flask && python3 server.py
```

This starts a local development server. Open the URL shown in the terminal (typically `http://localhost:3000`) to view the site.

---

## Project Structure

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
└── server.py              # Local dev server (Flask)
```

---

## Development Workflow

We use **GitHub Flow** with feature branches:

```bash
git checkout -b feature/<view-name>
# ... make changes ...
git add <files>
git commit -m "Clear description of the change"
git push origin feature/<view-name>
# Open a Pull Request on GitHub
```

- One branch per view: `feature/home`, `feature/catalog`, `feature/product-view`, `feature/cart`, `feature/checkout`
- Never work directly on `main`
- Commit often with clear messages
- Open a PR and merge after review

---

## Documentation

See the [`docs/`](docs/) folder for:

- [`docs/brief.md`](docs/brief.md) — Client requirements and scope
- [`docs/context.md`](docs/context.md) — Team setup and workflow
- [`docs/specs.md`](docs/specs.md) — Detailed view specifications
