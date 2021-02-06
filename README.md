# gatsby-starter

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

## Aliases in the project

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
