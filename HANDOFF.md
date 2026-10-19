# Handoff: dummy-store UI components

React 19 + Vite store app, plain CSS per component (`Component.css` imported in `Component.jsx`). Global tokens in `src/index.css` (`--primary: #C2410C`, font Space Grotesk). Product data is static in `src/utils/data.js` (dummyjson shape: `id`, `title`, `category`, `price`, `thumbnail`, ...).

The user is learning React (Spanish comments in code). Keep code simple and explain changes.

## Done this session (uncommitted, on `main`)

See `git status` / `git diff` for the exact changes.

- **`src/components/productCard/`**: `ProductCard({ product, variant, onAddToCart })` with variants `grid` / `compact` / `mini`, plus `ProductCardSkeleton`. Built from the design image `~/Desktop/productCard.png`. Another design image: `~/Desktop/Product detail@1x.png` (not used yet).
- **`src/components/ProductList/`**: responsive CSS grid (2 / 3 / 4 / 5 columns at 0 / 640 / 900 / 1200px). It makes cards fill their cell, overriding the card's fixed width.
- **`src/components/header/`**: icon centered, the count bubble is a `<span>` that only shows when `amount > 0`, logo bold at 20px, button has `aria-label`.

Lint passes on all three folders. **Nothing has been checked in a browser yet.**

## Open items

1. Check the home page visually (`npm run dev`) against `~/Desktop/productCard.png`.
2. `src/pages/home/Home.jsx` renders `<Header />` without `amount`, so no cart count shows. There is no cart state yet. `ProductList` doesn't pass `onAddToCart` or `variant` to the cards.
3. `ProductCardSkeleton` isn't exported from `src/components/index.jsx`.
4. `src/components/header/estilos.css` is an unused, committed copy of `Header.css` (logo in pink). It can be deleted.
5. `Home.jsx` imports `ProductCard`, which may now be unused.
6. Work is on `main`. Create a branch before committing (past commits follow conventional style, e.g. `feat(components): ...`).

## Suggested skills

- `run`: launch the Vite app and confirm the grid, card and header render correctly.
- `code-review`: review the uncommitted changes before committing.
- `simplify`: tidy up the CSS and components.
- `pr-description`: write the PR once the work is committed on a branch.
