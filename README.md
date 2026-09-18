# onx/rockstar

Source for [docs.onx.gg](https://docs.onx.gg), a [Docusaurus 3](https://docusaurus.io/) site documenting the ONX packages sold on the [Cfx.re / Tebex store](https://store.onx.gg).

## Development

```bash
yarn install
yarn start
```

This starts a local dev server at `http://localhost:1338` with hot reload.

## Building

```bash
yarn build
yarn serve
```

Outputs a static site to `build/` and serves it at `http://localhost:1338`.

## Repo layout

- `docs/` — the documentation content (Markdown), one folder per package
- `static/downloads/` — binary assets (livery templates etc.) referenced from the docs
