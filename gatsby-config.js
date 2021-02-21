// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

// eslint-disable-next-line import/no-unresolved
const { createProxyMiddleware } = require('http-proxy-middleware');

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const gatsbyRemarkPlugins = [
  `gatsby-remark-embedder`, // gatsby-remark-embedder must go before gatsby-remark-[ images, iframe ]
  `gatsby-remark-relative-images`, // gatsby-remark-relative-images must go before gatsby-remark-images
  `gatsby-remark-images`,
  {
    resolve: `gatsby-remark-images`,
    options: {
      backgroundColor: `transparent`,
      linkImagesToOriginal: false,
    },
  },
];

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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/navigations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: gatsbyRemarkPlugins,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: gatsbyRemarkPlugins,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/utils/cms.js`,
        manualInit: true,
      },
    },
  ],
};
