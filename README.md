# Firefox enterprise admin reference

This project hosts reference documentation for Firefox as an enterprise browser.

## Getting started

Node.js and `npm` are required, for example:

```bash
node -v
# v23.11.1
npm -v
# 11.4.2
```

The quickest way to get started is to install dependencies and run in development mode:

```bash
npm i && npm run dev
```

For a full site build, including site search, run `build` then `preview`:

```bash
npm run build && npm run preview
```

### Commands

All commands are run from the root of the project:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `npm install` (or `npm i`) | Installs dependencies                            |
| `npm run dev`              | Starts local dev server at `localhost:4321`      |
| `npm run build`            | Build your production site to `./dist/`          |
| `npm run preview`          | Preview your build locally, before deploying     |
| `npm run astro ...`        | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`  | Get help using the Astro CLI                     |

## Project structure

The project is built using Starlight.
Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory.
Each file is exposed as a route based on its file name.
Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

### Code examples

Reusable code snippets can be placed in `src/examples/`.
To reuse a snippet like `src/examples/policy.json`, include it in markdown like so:

```mdx
import { Code } from "@astrojs/starlight/components";
import policy from "/src/examples/policy.json?raw";

See my example:

<Code code={policy} lang="json" title="policies.json" />
```

## Starlight documentation

See [Starlight's docs](https://starlight.astro.build/), or read [the Astro documentation](https://docs.astro.build).
