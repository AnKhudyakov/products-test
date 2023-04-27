import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.scss"

const IndexPage = ({ data }) => {
  const { allProducts } = data.products
  console.log(allProducts)
  return (
    <Layout>
      <section className={styles.container}></section>
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
