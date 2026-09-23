# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Mixpanel

1. Crie um projeto no Mixpanel e copie o `Project Token`.
2. Crie um arquivo `.env` na raiz a partir de `.env.example`:

```bash
NUXT_PUBLIC_MIXPANEL_TOKEN=seu-project-token
```

O plugin registra automaticamente o evento `Page Viewed` nas navegações. Para registrar ações específicas em componentes:

```ts
const { track } = useAnalytics()

track('Project Clicked', {
	project: 'Lomed',
})
```

Para usuários autenticados, use `identify(id, properties)` depois do login. O token não deve ser colocado diretamente em componentes ou commitado no repositório.

## SEO

Configure o domínio público no arquivo `.env` para gerar URLs absolutas:

```bash
NUXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

O sitemap e o arquivo de rastreamento ficam disponíveis em `/sitemap.xml` e `/robots.txt`.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
