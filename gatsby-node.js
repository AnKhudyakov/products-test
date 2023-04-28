/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      products {
        allProducts {
          id
        }
      }
    }
  `)
  data.products.allProducts.forEach(product => {
    const { createPage } = actions
    createPage({
      path: `/product/${product.id}`,
      component: require.resolve("./src/templates/product.js"),
      context: { id: product.id },
      defer: true,
    })
  })
}
