/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const { createRemoteFileNode } = require("gatsby-source-filesystem")

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
    })
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`type Rating {
    rate: Float
    count: Int
  }
  
  type Product {
    id: ID!
    title: String
    price: Float
    description: String
    category: String
    image: String
    imageSharp: File @link(from: "fields.localFile")
    rating: Rating
  }

  type ProductSharp implements Node {
    product : Product
    featuredImg: File @link(from: "fields.localFile")
  }
  
  type Products {
    Product(id: ID!): Product
    allProducts: [Product]
  }

  type Query {
    products : Products
  }
  `)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  // For all Product nodes that have a featured image url, call createRemoteFileNode
  if (node.internal.type === "ProductSharp" && node.product.image !== null) {
    const fileNode = await createRemoteFileNode({
      url: node.product.image, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      getCache,
    })

    // if the file was created, extend the node with "localFile"
    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id })
    }
  }
}
