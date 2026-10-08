# Chic Parisien — Project Context

> **Read this before starting work on any branch.** This file is the single source of truth for keeping the site consistent across collaborators and branches. If you need to change a shared rule, snippet, or color, update this file in its own PR first so every branch can pull the change.

---

## 1. Project Overview

| Item | Value |
| --- | --- |
| Company name | **Chic Parisien** (always written exactly like this: capital C, capital P, no accents) |
| Site type | Fashion e-commerce storefront |
| Pages | 6 (Home, Catalog, Product View, Cart, Checkout, Profile) |
| Tech stack | **HTML + Tailwind CSS only** |
| Local server | `pip3 install flask && python3 server.py` → http://localhost:3000 |

### Tech rules (strict)

- **Use** plain HTML5 files.
- **Use** Tailwind CSS v4 via the official CDN (see the head snippet below).
- **No** custom `.css` files, `<style>` blocks, or inline `style=""` attributes.
- **No** JavaScript (no `<script>` tags apart from the Tailwind CDN). For interactivity use native HTML such as `<details>/<summary>`, `<form>`, and anchors.
- **No** other frameworks or libraries (Bootstrap, React, jQuery, etc.).
- For one-off values, use Tailwind arbitrary values (for example `bg-[#D4AF37]`) and only use the palette tokens listed below.

---

## 2. File Structure

All pages are in the project root so that relative links work with `server.py`.

```
/
├── index.html        # Home
├── catalog.html      # Catalog (product grid)
├── product.html      # Product View (single product)
├── cart.html         # Cart
├── checkout.html     # Checkout
├── profile.html      # Profile
├── images/           # All image assets (lowercase-kebab-case.jpg/png/webp)
├── context.md        # This file
└── server.py
```

- Do **not** rename these files. The nav bar depends on these exact names.
- Image file names: `lowercase-kebab-case`, for example `images/silk-scarf-red.jpg`.

---

## 3. Brand Colors — Black & Gold with a Splash of Red

| Role | Name | Hex | Tailwind class usage |
| --- | --- | --- | --- |
| Primary background | Noir | `#0A0A0A` | `bg-[#0A0A0A]` |
| Secondary background / cards | Charcoal | `#1A1A1A` | `bg-[#1A1A1A]` |
| Borders / dividers | Graphite | `#2A2A2A` | `border-[#2A2A2A]` |
| Primary accent (gold) | Or | `#D4AF37` | `text-[#D4AF37]`, `bg-[#D4AF37]`, `border-[#D4AF37]` |
| Gold hover | Or Foncé | `#B8962E` | `hover:bg-[#B8962E]`, `hover:text-[#B8962E]` |
| Splash accent (red) | Rouge | `#C8102E` | `bg-[#C8102E]`, `text-[#C8102E]` |
| Red hover | Rouge Foncé | `#A00D25` | `hover:bg-[#A00D25]` |
| Main text | Ivoire | `#F5F5F0` | `text-[#F5F5F0]` |
| Muted text | Gris | `#A3A3A3` | `text-[#A3A3A3]` |

### Color usage rules

- **Black** is the foundation. Use it for page backgrounds, the header, and the footer.
- **Gold** is the brand color. Use it for the logo, headings, links, primary buttons, and active nav items.
- **Red is a splash only.** Use it sparingly (about 5% of the page or less) for:
  - Sale or "New" badges
  - Cart item count badge
  - Single high-priority CTAs (for example "Place Order")
  - Error messages and required-field markers
- Never put red text directly on gold, or gold text directly on red.
- Body text on black backgrounds is always Ivoire (`#F5F5F0`), never pure white.

---

## 4. Typography

Use only Tailwind's built-in font stacks so no external fonts are needed.

| Element | Classes |
| --- | --- |
| Logo / display headings | `font-serif tracking-widest uppercase` |
| Page title (h1) | `font-serif text-4xl md:text-5xl text-[#D4AF37]` |
| Section title (h2) | `font-serif text-2xl md:text-3xl text-[#D4AF37]` |
| Card title (h3) | `font-serif text-lg text-[#F5F5F0]` |
| Body text | `font-sans text-base text-[#F5F5F0]` |
| Small / meta | `font-sans text-sm text-[#A3A3A3]` |
| Prices | `font-sans font-semibold text-[#D4AF37]` |
| Sale price | `font-sans font-semibold text-[#C8102E]` |

---

## 5. Reusable Components

### Buttons

```html
<!-- Primary (gold) -->
<a href="#" class="inline-block bg-[#D4AF37] text-[#0A0A0A] font-semibold uppercase tracking-wider px-6 py-3 hover:bg-[#B8962E] transition">Shop Now</a>

<!-- Secondary (outline gold) -->
<a href="#" class="inline-block border border-[#D4AF37] text-[#D4AF37] font-semibold uppercase tracking-wider px-6 py-3 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition">View Details</a>

<!-- Accent (red; use sparingly, for example Place Order) -->
<button type="submit" class="bg-[#C8102E] text-[#F5F5F0] font-semibold uppercase tracking-wider px-6 py-3 hover:bg-[#A00D25] transition">Place Order</button>
```

### Badges

```html
<span class="bg-[#C8102E] text-[#F5F5F0] text-xs font-bold uppercase px-2 py-1">Sale</span>
<span class="bg-[#D4AF37] text-[#0A0A0A] text-xs font-bold uppercase px-2 py-1">New</span>
```

### Product card

```html
<article class="bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#D4AF37] transition">
  <a href="product.html">
    <img src="images/placeholder.jpg" alt="Product name" class="w-full aspect-[3/4] object-cover">
    <div class="p-4">
      <h3 class="font-serif text-lg text-[#F5F5F0]">Product Name</h3>
      <p class="mt-1 font-semibold text-[#D4AF37]">€120.00</p>
    </div>
  </a>
</article>
```

### Form inputs

```html
<label class="block text-sm text-[#A3A3A3] mb-1" for="email">Email <span class="text-[#C8102E]">*</span></label>
<input id="email" type="email" required class="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-[#F5F5F0] px-4 py-2 focus:outline-none focus:border-[#D4AF37]">
```

### Layout

- Page container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section spacing: `py-12 md:py-16`
- Product grids: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`
- Design mobile-first. Test at `sm`, `md`, and `lg` breakpoints.

---

## 6. Page Template (copy this for every page)

Every page **must** use this exact skeleton. Only change:

1. The `<title>` text.
2. The **active nav link** (see the rules below the template).
3. The content inside `<main>`.

**Do not edit the header, nav, or footer on a single page.** If they need to change, update this file first, then update all 6 pages in the same PR.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home | Chic Parisien</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-[#0A0A0A] text-[#F5F5F0] font-sans min-h-screen flex flex-col">

  <!-- ===== HEADER + NAV (shared; do not edit per page) ===== -->
  <header class="bg-[#0A0A0A] border-b border-[#D4AF37]">
    <!-- Announcement bar (red splash) -->
    <div class="bg-[#C8102E] text-[#F5F5F0] text-center text-xs uppercase tracking-widest py-2">
      Complimentary shipping on orders over €150
    </div>

    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
      <!-- Logo -->
      <a href="index.html" class="font-serif text-2xl md:text-3xl tracking-widest uppercase text-[#D4AF37]">
        Chic Parisien
      </a>

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
        <li><a href="index.html" class="text-[#F5F5F0] hover:text-[#D4AF37] transition">Home</a></li>
        <li><a href="catalog.html" class="text-[#F5F5F0] hover:text-[#D4AF37] transition">Catalog</a></li>
        <li><a href="product.html" class="text-[#F5F5F0] hover:text-[#D4AF37] transition">Product</a></li>
        <li><a href="profile.html" class="text-[#F5F5F0] hover:text-[#D4AF37] transition">Profile</a></li>
        <li><a href="checkout.html" class="text-[#F5F5F0] hover:text-[#D4AF37] transition">Checkout</a></li>
        <li>
          <a href="cart.html" class="relative inline-flex items-center border border-[#D4AF37] text-[#D4AF37] px-4 py-2 hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition">
            Cart
            <span class="absolute -top-2 -right-2 bg-[#C8102E] text-[#F5F5F0] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
          </a>
        </li>
      </ul>

      <!-- Mobile menu (no JS: uses details/summary) -->
      <details class="md:hidden relative">
        <summary class="list-none cursor-pointer text-[#D4AF37] uppercase tracking-wider text-sm border border-[#D4AF37] px-3 py-2">
          Menu
        </summary>
        <ul class="absolute right-0 mt-2 w-48 bg-[#1A1A1A] border border-[#D4AF37] z-50 text-sm uppercase tracking-wider">
          <li><a href="index.html" class="block px-4 py-3 text-[#F5F5F0] hover:bg-[#0A0A0A] hover:text-[#D4AF37]">Home</a></li>
          <li><a href="catalog.html" class="block px-4 py-3 text-[#F5F5F0] hover:bg-[#0A0A0A] hover:text-[#D4AF37]">Catalog</a></li>
          <li><a href="product.html" class="block px-4 py-3 text-[#F5F5F0] hover:bg-[#0A0A0A] hover:text-[#D4AF37]">Product</a></li>
          <li><a href="profile.html" class="block px-4 py-3 text-[#F5F5F0] hover:bg-[#0A0A0A] hover:text-[#D4AF37]">Profile</a></li>
          <li><a href="checkout.html" class="block px-4 py-3 text-[#F5F5F0] hover:bg-[#0A0A0A] hover:text-[#D4AF37]">Checkout</a></li>
          <li><a href="cart.html" class="block px-4 py-3 text-[#D4AF37] hover:bg-[#0A0A0A]">Cart <span class="ml-1 bg-[#C8102E] text-[#F5F5F0] text-xs font-bold rounded-full px-2">0</span></a></li>
        </ul>
      </details>
    </nav>
  </header>
  <!-- ===== END HEADER + NAV ===== -->

  <!-- ===== PAGE CONTENT (edit this part only) ===== -->
  <main class="flex-1">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 class="font-serif text-4xl md:text-5xl text-[#D4AF37]">Page Title</h1>
    </section>
  </main>
  <!-- ===== END PAGE CONTENT ===== -->

  <!-- ===== FOOTER (shared; do not edit per page) ===== -->
  <footer class="bg-[#0A0A0A] border-t border-[#D4AF37] mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <a href="index.html" class="font-serif text-2xl tracking-widest uppercase text-[#D4AF37]">Chic Parisien</a>
        <p class="mt-3 text-sm text-[#A3A3A3]">Timeless Parisian elegance, delivered.</p>
      </div>

      <div>
        <h4 class="font-serif text-[#D4AF37] uppercase tracking-wider mb-3">Shop</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="catalog.html" class="text-[#A3A3A3] hover:text-[#D4AF37]">Catalog</a></li>
          <li><a href="product.html" class="text-[#A3A3A3] hover:text-[#D4AF37]">Featured Product</a></li>
          <li><a href="cart.html" class="text-[#A3A3A3] hover:text-[#D4AF37]">Cart</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-serif text-[#D4AF37] uppercase tracking-wider mb-3">Account</h4>
        <ul class="space-y-2 text-sm">
          <li><a href="profile.html" class="text-[#A3A3A3] hover:text-[#D4AF37]">My Profile</a></li>
          <li><a href="checkout.html" class="text-[#A3A3A3] hover:text-[#D4AF37]">Checkout</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-serif text-[#D4AF37] uppercase tracking-wider mb-3">Newsletter</h4>
        <form class="flex">
          <input type="email" placeholder="Your email" class="flex-1 min-w-0 bg-[#1A1A1A] border border-[#2A2A2A] text-[#F5F5F0] px-3 py-2 text-sm focus:outline-none focus:border-[#D4AF37]">
          <button type="submit" class="bg-[#D4AF37] text-[#0A0A0A] px-4 text-sm font-semibold uppercase hover:bg-[#B8962E]">Join</button>
        </form>
      </div>
    </div>

    <div class="border-t border-[#2A2A2A]">
      <p class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-[#A3A3A3] text-center">
        &copy; 2026 Chic Parisien. All rights reserved. <span class="text-[#C8102E]">&hearts;</span> Paris
      </p>
    </div>
  </footer>
  <!-- ===== END FOOTER ===== -->

</body>
</html>
```

### Active nav link rule

On each page, change **only** that page's link in both the desktop and mobile menus:

- Desktop: replace `text-[#F5F5F0] hover:text-[#D4AF37]` with `text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1` and add `aria-current="page"`.
- Mobile: replace `text-[#F5F5F0]` with `text-[#D4AF37]` and add `aria-current="page"`.

### Page titles

| File | `<title>` |
| --- | --- |
| `index.html` | `Home \| Chic Parisien` |
| `catalog.html` | `Catalog \| Chic Parisien` |
| `product.html` | `Product \| Chic Parisien` |
| `cart.html` | `Cart \| Chic Parisien` |
| `checkout.html` | `Checkout \| Chic Parisien` |
| `profile.html` | `Profile \| Chic Parisien` |

---

## 7. Page Specs

| Page | File | Must include |
| --- | --- | --- |
| **Home** | `index.html` | Hero banner with headline + gold "Shop Now" CTA, featured categories, featured products grid (4), brand story section, newsletter callout |
| **Catalog** | `catalog.html` | Page title, filter sidebar (category, size, price) using native form elements, sort `<select>`, product card grid, pagination links |
| **Product View** | `product.html` | Image gallery, name, price (sale price in red if applicable), size and color selectors, quantity input, "Add to Cart" (gold) button, description/details in `<details>` accordions, "You may also like" grid |
| **Cart** | `cart.html` | Line items (image, name, size, qty, price, remove link), order summary (subtotal, shipping, total), "Proceed to Checkout" button linking to `checkout.html`, "Continue Shopping" linking to `catalog.html` |
| **Checkout** | `checkout.html` | Contact info, shipping address, shipping method (radio), payment fields, order summary, red "Place Order" button |
| **Profile** | `profile.html` | Personal profile with photo placeholder, name, role, introduction, about, skills, projects, and contact details |

---

## 8. Collaboration Workflow

### Branch naming

```
feature/<page>-<short-desc>   e.g. feature/catalog-filters
fix/<page>-<short-desc>       e.g. fix/cart-mobile-layout
shared/<short-desc>           e.g. shared/update-footer   (header/nav/footer/context changes)
```

### Page ownership

To avoid merge conflicts, one person owns each page file at a time. Fill this in:

| Page | Owner | Branch |
| --- | --- | --- |
| Home (`index.html`) | _TBD_ | _TBD_ |
| Catalog (`catalog.html`) | _TBD_ | _TBD_ |
| Product View (`product.html`) | _TBD_ | _TBD_ |
| Cart (`cart.html`) | _TBD_ | _TBD_ |
| Checkout (`checkout.html`) | _TBD_ | _TBD_ |
| Profile (`profile.html`) | _TBD_ | _TBD_ |

### Rules

1. **Pull `main` before starting work** and rebase or merge often.
2. Only edit the page file you own. If you must touch another page, coordinate with its owner.
3. Shared header, nav, and footer changes go in a `shared/*` branch that updates **this file and all 6 pages** together.
4. Commit messages: `<type>(<page>): <message>`, for example `feat(cart): add order summary`.
5. Before opening a PR, check:
   - [ ] Header, nav, and footer match Section 6 exactly (apart from the active link).
   - [ ] Only Tailwind classes. No `<style>`, inline styles, `.css` files, or JS.
   - [ ] Colors come only from the palette in Section 3.
   - [ ] Red is used only as an accent.
   - [ ] Page works on mobile (`<md`) and desktop.
   - [ ] All nav links work locally via `python3 server.py`.
   - [ ] Images have meaningful `alt` text.

---

## 9. Changelog

| Date | Change | Author |
| --- | --- | --- |
| 2026-10-08 | Initial context file created | — |
| 2026-10-08 | Profile page specification updated for a personal portfolio profile; detailed profile placeholders documented in `CONTEXT.md` | — |
