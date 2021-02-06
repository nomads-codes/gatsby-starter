module.exports = {
  siteMetadata: {
    title: `gatsby-starter`,
  },
  plugins: [
    { resolve: `gatsby-plugin-netlify-cms` },
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
        path: `${__dirname}/src/markdown/pages`,
        name: `mdxpages`,
      },
      __key: `mdxpages`,
    },
  ],
};
