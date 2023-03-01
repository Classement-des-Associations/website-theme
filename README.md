# Website Theme

A Nuxt theme for websites of [Le Classement des Associations](https://le-classement.fr).

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Working on your theme

This theme is at the root of this repository, it is exactly like a regular Nuxt project.

The `.playground` directory should help you on trying theme during development.

Running `pnpm dev` will prepare and boot `.playground` directory, which imports your theme itself.

## Distributing theme

This project is a Nuxt layer which is shaped exactly the same as any other Nuxt project, except it is published on NPM.

## Install

To install this theme, you can use `npm`, `yarn` or `pnpm`:

```bash
npm install --save @classement-des-associations/website-theme
```

Then add the dependency to their `extends` in `nuxt.config`:

```ts
defineNuxtConfig({
  extends: '@classement-des-associations/website-theme'
})
```

## Development Server

Start the development server on http://localhost:3000

```bash
pnpm dev
```

# Setup Runtime Config

Currently, this theme using these runtime config:

- `newsletterSubscriptionLink` - The link to the newsletter subscription form


Read more about [Runtime Config](https://nuxt.com/docs/guide/going-further/runtime-config).

## Production

Build the application for production:

```bash
pnpm build
```

Or statically generate it with:

```bash
pnpm generate
```

Locally preview production build:

```bash
pnpm preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.
