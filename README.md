# Nankin · Brand Guide

Sistema completo da marca Nankin — estratégia, identidade visual, fundações, componentes, padrões e aplicações. **54 páginas** em HTML estático puro, sem build.

🔗 **[Ver online](https://nankin-brand-guide.netlify.app)** *(atualize após publicar)*

---

## Estrutura

```
brand-guide/
├── index.html              · Home
├── _shell.css              · Tokens + estilos compartilhados
├── _layout.js              · Sidebar de navegação
│
├── foundations/   (8)      · F · Spacing, Type scale, Grid, Rhythm, Radii, Elevation, Motion, Iconography
├── brand/         (5)      · B · Arquitetura, Logos, Cores, Tipografia, Aplicando
├── components/    (21)     · C · Button → Separator
├── patterns/      (7)      · P · Sticky banner, Paletas, Form, Search, Filter, Sticky card, Tile
├── applications/  (3)      · A · Dashboard, Site, Slides (deck 25 slides)
├── strategy/      (6)      · S · Essência, Missão, Atributos, Tom, Frases, Redes
└── resources/     (4)      · R · Downloads, FAQ, Histórico, Contato
```

## Rodar local

Como é HTML puro, basta abrir `brand-guide/index.html` no navegador. Para evitar bloqueios de CORS em alguns navegadores:

```bash
cd brand-guide
python3 -m http.server 8000
# abra http://localhost:8000
```

Ou com Node:

```bash
npx serve brand-guide
```

## Publicar

### Netlify (drag-and-drop, recomendado)

1. Abra [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arraste a pasta `brand-guide/`
3. URL gerada na hora; conecte ao GitHub depois para deploy contínuo

### GitHub Pages

Settings → Pages → Source: `main` branch, pasta `/` → URL: `https://rdelimasilva.github.io/nankin-brand-guide/brand-guide/`

## Versão

**v3.0** — Abril 2026.
Mantido pelo time de Marca, Produto e Design da Nankin.

```
nankin. o estúdio inteiro.
```
