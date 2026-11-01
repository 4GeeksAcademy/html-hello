# View Specifications — Rue de la Mode

> **Note:** Navbar and footer are **reused identically** on all pages and will not be repeated in each spec below.

---

## 1) Home (`index.html`)

| Element | Details |
|---------|---------|
| **Navbar** | Logo ("Rue de la Mode"), search bar, account link, cart link |
| **Hero section** | Full-width banner with tagline, CTA buttons ("Shop New Arrivals", "Accessories") |
| **New Arrivals** | Horizontal scrollable list of product cards (name, category, price, image placeholder) |
| **Best Sellers** | Horizontal scrollable list of product cards with "Best seller" badge |
| **Footer** | 3 columns: Categories (footwear, shirts, pants, accessories), Legal (terms, privacy, about), Contact (address, email, phone) |

---

## 2) Catalog (`catalog.html`)

| Element | Details |
|---------|---------|
| **Filter bar** | Dropdown or button group for **category** + **size** |
| **Product grid** | 4 columns × 5 rows = 20 product cards |
| **Product card** | Image placeholder, name, category, price |

---

## 3) Product View (`product.html`)

| Element | Details |
|---------|---------|
| **Left column** (50%) | Product image (placeholder) |
| **Right column** (50%) | Name, reference/code, size selector, price, quantity selector, **"Add to cart"** button |
| **Description section** (below) | Materials, recommended use / scenarios |

---

## 4) Cart (`cart.html`)

| Element | Details |
|---------|---------|
| **Product list** | 3 sample products, each with: thumbnail, unit price, quantity, line total |
| **Summary box** | Subtotal, tax (e.g. 20%), total |
| **Action** | **"Purchase"** button → links to checkout |

---

## 5) Checkout / Payment Form (`checkout.html`)

A single-page form presented in **3 visual steps**:

| Step | Fields |
|------|--------|
| **1. Personal details** | First name, last name, email, phone |
| **2. Shipping address** | Street, city, postal code, country |
| **3. Card payment** | Card number, expiry date, CVV |

All visible on one scrollable page or via step indicators.
- Footer