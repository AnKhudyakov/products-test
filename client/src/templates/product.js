import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { useState } from "react"

import * as styles from "./product.module.scss"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Counter from "../components/ui-kit/counter/counter"
import Button from "../components/ui-kit/button/button"
import Rating from "../components/ui-kit/rating/rating"
import FavorButton from "../components/ui-kit/favorButton/favorButton"
import Bestseller from "../components/ui-kit/bestseller/bestseller"

const Product = ({ data }) => {
  const [countItem, setCountItem] = useState(0)
  const [favorIn, setfavorIn] = useState(false)
  const { Product } = data.products
  const { title, price, description, category, rating } = Product
  const image = getImage(Product.imageSharp)
  return (
    <Layout>
      <Seo title={`Product | ${Product.title}`} />
      <section className={styles.container}>
        <div className={styles.image_wrapper}>
          <GatsbyImage image={image} alt="Image product" objectFit="contain" />
        </div>
        <article className={styles.text}>
          <Bestseller rating={rating} />
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.params}>
            <h4 className={styles.category}>{category}</h4>
            <Rating count={rating.count} rate={rating.rate} />
          </div>
          <div className={styles.footer_card}>
            <h2>${price.toFixed(0)}</h2>
            <div className={styles.btns}>
              {!countItem ? (
                <Button
                  count={countItem}
                  onClick={() => setCountItem(countItem + 1)}
                >
                  Add
                </Button>
              ) : (
                <Counter countItem={countItem} setCountItem={setCountItem} />
              )}
              <FavorButton
                onClick={() => setfavorIn(!favorIn)}
                favorIn={favorIn}
              ></FavorButton>
            </div>
          </div>
          <hr className={styles.devider} />
          <div className={styles.delivery}>
            <StaticImage
              src="../images/delivery.svg"
              alt="delivery"
              width={40}
              height={40}
              placeholder="blurred"
              objectFit="contain"
            />
            <p>Shipping, arrives by tomorrow to Singapore, 370012</p>
          </div>
          <div className={styles.delivery}>
            <StaticImage
              src="../images/pickup.svg"
              alt="delivery"
              width={40}
              height={40}
              placeholder="blurred"
              objectFit="contain"
            />
            <p>Pickup not available at Singapore Supercenter</p>
          </div>
          <Link to="/" className={styles.link}>
            Check availability nearby
          </Link>
        </article>
        <article className={styles.product_desc}>
          <h2>About this item</h2>
          <hr className={styles.devider} />
          <h3>Product details</h3>
          <p className={styles.desc}>{description}.</p>
        </article>
      </section>
    </Layout>
  )
}

export default Product

export const query = graphql`
  query ProductPage($id: ID!) {
    products {
      Product(id: $id) {
        title
        price
        description
        category
        rating {
          rate
          count
        }
        image
        imageSharp {
          childImageSharp {
            gatsbyImageData(
              width: 300
              formats: [AUTO, WEBP, AVIF]
              placeholder: NONE
            )
          }
        }
      }
    }
  }
`
