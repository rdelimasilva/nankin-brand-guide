---
name: nankin-design
description: Use this skill to generate well-branded interfaces and assets for Nankin, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## What Nankin is

Nankin is a SaaS platform for **architecture firms** (`nankin.me`). Tagline: *"Gestão eficiente para arquitetos."* Brand DNA: precision, modernity, sophistication. Icon = the tip of a *nanquim* pen — split into two halves rotated in opposite directions.

## Quick reference

- **Primary color:** `#FE6E60` (Nankin coral) — accent only, never a hero flood. No tints/gradients.
- **Neutrals:** `#000000` (Preto), `#2E2E2E` (Cinza), `#F5F5F5` (Cinza-claro), `#FFFFFF` (Branco).
- **Type:** **Nobel Uno** is the single typeface for the entire system — wordmark, display, headlines, body, UI, labels (Thin → Black with italics, loaded from `fonts/`). JetBrains Mono for code only.
- **Type scale (manual):** title-1 30pt, title-2 25pt, title-3 20pt, body 16pt — line-heights all 1.5×, scale up by 1.2×.
- **Logo:** `assets/logo-nankin-wordmark.svg` (full lockup) and `assets/icon-nankin.svg` (mark only). Min size 140px wide. Safe area = height of letter "A".
- **Tokens:** import `colors_and_type.css` for the full token set.
- **UI kit:** `ui_kits/site/index.html` is a starting point for marketing surfaces.

## Hard rules

- No emoji, ever.
- Coral + 1 neutral per composition. Coral is an accent, not a flood. Avoid 3-tone palettes outside functional UI.
- Sentence case for headlines and UI. UPPERCASE only for eyebrows / labels with wide tracking.
- No gradients, no glassmorphism, no decorative drop-shadows on cards at rest.
- The wordmark and the brand are always lowercase ("nankin").
- Brazilian Portuguese is the source language; English is a translation.
- Speak to architects: outcomes (less spreadsheet work, more architecture), not features.
