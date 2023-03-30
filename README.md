# Turborepo Tailwind CSS starter

This is an official starter Turborepo.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `cms`: a [Strapi CMS](https://strapi.io/)
- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `web` and `cms` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages/ui

This example is setup to build `packages/ui` and output the transpiled source and compiled styles to `dist/`. This was chosen to make sharing one `tailwind.config.js` as easy as possible, and to ensure only the CSS that is used by the current application and its dependencies is generated.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update your `tailwind.config.js` to be aware of your package locations, so it can find all usages of the `tailwindcss` class names.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [Turborepos](https://turbo.build/) monorepos
- [Strapi CMS](https://strapi.io/) for management contents
- [React Query](https://tanstack.com/query/v3/) for state management sever data
- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Husky] Git hooks with Husky and lint-staged
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) Commit messages must meet conventional commits format.
- [GrowthBook](https://app.growthbook.io/) for management feature
- [Storybook](https://storybook.js.org/) system UI

### Monorepo

Monorepo features and conventions:

- Monorepo is being quite highly opinionated in order to achieve best developer experience. It's meant to be used as frontend only monorepo, 100% TypeScript, Tailwindcss UI support (UI component library, shared theme across all apps and packages etc.), consistent codebase across whole monorepo with automated tooling in place as ESLint, Prettier, TypeScript, conventional commits etc.
- Workspaces:
  - It comes with two workspaces `apps` and `packages`.
  - All configurations (eslint, jest, Tailwind ui etc.) in `packages` are always prefixed with "config-" and imported into other workspaces directly from source without building (never transpiled).
  - All other `packages` beside configurations are always being built/transpiled and output to `dist/` folder.
- All applications in monorepo are built with ReactJS.
- Monorepo doesn't include any implementation of micro-frontend architecture, but is prepared with that in mind, so it can be easily extended (adding shared state, page composition etc.)
