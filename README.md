# Nombre Marca - Fashion Website

Website project for a fashion brand based in France, focused on menswear and womenswear e-commerce experience.

This repository is organized for collaborative web development, with a basic branching strategy that allows multiple contributors to work in parallel on pages and features.

## Project purpose

- Build a modern fashion storefront (home, catalog, product, cart and checkout views).
- Keep a clean and maintainable front-end codebase.
- Support team collaboration through branch-based workflows and pull requests.

## Current stack

- HTML5
- Tailwind CSS
- CSS (source + compiled output)
- JavaScript (UI behavior)
- Python (local development server)

## Suggested base structure

```text
.
|- home.html
|- catalogo.html
|- producto.html
|- carrito.html
|- checkout.html
|- input.css
|- output.css
|- tailwind.config.js
|- server.py
|- assets/
|  |- css/
|  |  |- style.css
|  |- js/
|  |  |- main.js
|  |- img/
|  |  |- hero/
|  |  |- products/
|  |  |- banners/
|  |- icons/
|  |  |- ui/
|  |  |- social/
|- README.md
|- README.es.md
```

Note: the repository currently includes the core files and can be expanded with this structure to separate styles, scripts, images and icons in a scalable way.

## Collaborative branching model

Basic branching strategy:

- `main`: stable branch, release-ready.
- `develop`: integration branch for approved work.
- `feature/*`: new features (for example `feature/home-hero`, `feature/catalog-grid`, `feature/cart-summary`).
- `fix/*`: standard bug fixes.
- `hotfix/*`: urgent production fixes.

Recommended workflow:

1. Create a branch from `develop`.
2. Implement focused changes with clear commits.
3. Open a Pull Request to `develop`.
4. Review, approve and merge.
5. Promote to `main` after sprint validation.

## Run locally

```bash
pip3 install flask && python3 server.py
```

If your team compiles Tailwind from `input.css` to `output.css`, run the CLI or npm script defined by your setup.

## Team conventions

- Use descriptive branch and commit names.
- Keep one feature per branch.
- Preserve visual consistency across typography, color and spacing.
- Update this README when folder structure or workflow changes.
