// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

// eslint-disable-next-line import/no-unresolved
const { createProxyMiddleware } = require('http-proxy-middleware');

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

module.exports = {
  siteMetadata: {
    siteGithub: `https://github.com/nomads-codes/gatsby-starter`,
    siteUrl: `https://nomadscodes-gatsby-starter.netlify.app`,
    siteTitle: `Nomads Codes`,
  },
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      }),
    );
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/utils/cms.js`,
        manualInit: true,
      },
    },
    { resolve: `gatsby-transformer-sharp` },
    { resolve: `gatsby-plugin-sharp` },
    { resolve: `gatsby-plugin-styled-components` },
    { resolve: `gatsby-plugin-react-helmet` },
    { resolve: `gatsby-plugin-mdx` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: `images`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/navigations`,
        name: `mdxnavigations`,
      },
      __key: `mdxnavigations`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/pages`,
        name: `mdxpages`,
      },
      __key: `mdxpages`,
    },
  ],
};
