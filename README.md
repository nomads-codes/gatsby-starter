# gatsby-starter

## 🖥 Preview
  - [https://nomads-codes.github.io/gatsby-starter/](https://nomads-codes.github.io/gatsby-starter/)
  - [nomadscodes-gatsby-starter.netlify.app](nomadscodes-gatsby-starter.netlify.app)

## 🚀 **Install all dependencies first.**

```shell
yarn install
```

## 🎛  **Start developing.**

```shell
# Simple start project
#
cd gatsby-starter && yarn start
```

```shell
# Cleanup .cache/public directories before start
#
cd gatsby-starter && yarn start:clean
```

```shell
# Start with verbose info about what is doing
#
cd gatsby-starter && yarn start:verbose
```

## 🗑  Remove modules and install them again

```shell
yarn purge
```

## 💥  Bump to the latest versions

```shell
yarn bump
```

## 〰️ Aliases in the project

```shell
# visual studio code config: jsconfig.json
{
  "compilerOptions": {
    "paths": {
      "~components": ["src/components"],
      "~containers": ["src/containers"],
      "~utils": ["src/utils"]
    }
  }
}
```

```js
# webpack config: gatsby/onCreateWebpackConfig.js

module.exports = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': path.resolve(__dirname, '../src/components'),
        '~containers': path.resolve(__dirname, '../src/containers'),
        '~utils': path.resolve(__dirname, '../src/utils'),
      },
    },
  });
};
```

## SEO

If we want to enable SEO metadata for pages, each of them should have a Graphql query. Otherwise, the metadata will not be added.
Look into `gatsby-wrapper.js`, there is used` SEOContainer` component and it is a responsible for adding metadata.

See these files for a better understanding:
- src/pages/*.js
- src/containers/SEOContainer.js
- src/utils/graphql-fragments.js
- src/markdown/pages/offer.mdx
- gatsby-wrapper.js

```markdown
---
title: ...
meta:
  description: ...
  title: ...
  permalink: /offer/
---
```

The graphql query for offer page:

```graphql
export const query = graphql`
  {
    page: mdx(
      fileAbsolutePath: { regex: "/markdown/pages/" }
      frontmatter: { meta: { permalink: { eq: "/offer/" } } }
    ) {
      frontmatter {
        ...META_FRAGMENT
      }
    }
  }
`;
```

## 🔮 Netlify
  ```shell
  # install globally
  npm install netlify-cli -g
  ```

  ```shell
  # login into account
  netlify login
  ```

  ```shell
  # check status after login
  netlify status
  ```

  ```shell
  # init project
  netlify init
  ```

  ```shell
  # development
  netlify dev
  ```

  ```shell
  # Dry build
  netlify build --dry

  ```

  ```shell
  # Build
  netlify build
  ```

  ```shell
  # Deploy
  netlify deploy
  ```

  ```shell
  # Deploy prod
  netlify deploy --prod

  ```

## 📖 Docs
**Github docs**
  - [https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/enabling-oauth-app-access-restrictions-for-your-organization](https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/enabling-oauth-app-access-restrictions-for-your-organization)

**Youtube tutorials**
  - [https://www.youtube.com/playlist?list=PLH8IAbt5kqZPgA4eItCBVgFzkXiUhqHUF](https://www.youtube.com/playlist?list=PLH8IAbt5kqZPgA4eItCBVgFzkXiUhqHUF)

**Netlify docs**
  - [https://docs.netlify.com/visitor-access/identity/](https://docs.netlify.com/visitor-access/identity/)
  - [https://docs.netlify.com/cli/get-started/](https://docs.netlify.com/cli/get-started/)

**Gatsby docs**
  - [https://www.gatsbyjs.com/docs/api-proxy/#advanced-proxying](https://www.gatsbyjs.com/docs/api-proxy/#advanced-proxying)
