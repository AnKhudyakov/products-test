import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const Product = ({ data }) => {
  console.log(data)
  const { Product } = data.products
  return (
    <Layout>
      <Seo title={`Product | ${Product.title}`} />
      <div></div>
    </Layout>
  )
}

export default Product

export const query = graphql`
  query ProductQuery($id: ID!){
    products {
      Product(id: $id) {
        title
        price
        description
        category
        image
        rating 
      }
    }
  }
`