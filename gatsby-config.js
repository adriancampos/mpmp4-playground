module.exports = {
  siteMetadata: {
    title: `MPMP4-Playground`,
    description: `A playground for Matt Parker's Maths Puzzles - Puzzle 4`,
    author: `@adriancampos`,
  },
  pathPrefix: "/mpmp4-playground",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MPMP4-Playground`,
        short_name: `MPMP4-Playground`,
        start_url: `/`,
        background_color: `#282c34`,
        theme_color: `#3f51b5`,
        display: `standalone`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-plugin-material-ui',
    //   options: {},
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
