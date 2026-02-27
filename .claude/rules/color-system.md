---
paths:
  - "src/**/*.astro"
  - "src/**/*.css"
---

# Color System Rules (v2.0)

## NEVER use these classes (deleted):
- `bg-secondary-*`, `text-secondary-*`, `border-secondary-*` (old green)
- `text-primary-500` when meaning orange (that was old primary)

## Correct classes:
- Primary (Cerulean Blue): `bg-primary-600`, `text-primary-600`, `hover:bg-primary-700`
- Accent (Orange): `bg-accent-500`, `text-accent-500`, `hover:text-accent-600`
- Page background: `bg-[#F8FAFC]` or `bg-page`
- Card surfaces: `bg-white` (contrast against Bright Snow)
- Dark sections: `bg-dark-700`, `text-dark-50`
