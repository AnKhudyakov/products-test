import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const Product = ({ data }) => {
  const { Product } = data.products
  const image = getImage(Product.imageSharp)
  return (
    <Layout>
      <Seo title={`Product | ${Product.title}`} />
      <div>
        
      </div>
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
        imageSharp {
          childImageSharp {
            gatsbyImageData( width: 220, formats: AUTO, placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  }
`