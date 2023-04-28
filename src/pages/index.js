import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.scss"
import ProductList from "../components/productList/productList"

const IndexPage = ({ data }) => {
  const { allProducts } = data.products
  return (
    <Layout>
      <ProductList products={allProducts}/>
    </Layout>
  )
}

export const Head = () => <Seo title="Products" />

export default IndexPage

export const query = graphql`
  query MainPage {
    products {
      allProducts {
        id
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
