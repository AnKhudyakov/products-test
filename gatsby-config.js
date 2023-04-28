/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Products`,
    description: `Test project`,
    author: `@AnKhudyakov`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Products",
        fieldName: "products",
        url: "http://localhost:3004",
      },
    },
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-plugin-alias-imports`,
    //   options: {
    //     alias: { "@": path.resolve(__dirname, "src") },
    //     extensions: [],
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Roboto"],
      },
    },
    {
      resolve: "gatsby-image-graphql-schema",
      options: {
        imageNames: ["image"],
        schemaTypeName: "Products_Product",
      },
    },
  ],
}
