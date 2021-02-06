module.exports = {
  siteMetadata: {
    siteGithub: `https://github.com/nomads-codes/gatsby-starter`,
    siteUrl: `https://nomadscodes-gatsby-starter.netlify.app`,
    siteTitle: `Nomads Codes`,
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
