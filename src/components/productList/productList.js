import * as React from "react"

import * as styles from "./productList.module.scss"
import ProductCard from "../productCard/productCard"

const ProductList = ({ products }) => {
  return (
    <section className={styles.container}>
      {products.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  )
}
export default ProductList
