import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

import * as styles from "./product.module.scss"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Counter from "../components/ui-kit/counter/counter"
import Button from "../components/ui-kit/button/button"
import Rating from "../components/ui-kit/rating/rating"
import { useState } from "react"
//import Counter from "../components/ui-kit/counter/counter"

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
          <GatsbyImage
            image={image}
            alt="Image product"
            className={styles.img}
          />
        </div>
        <article className={styles.text}>
          {rating.count > 300 && rating.rate > 4 && (
            <div className={styles.bestseller}>
              <StaticImage
                src="../images/bestseller.png"
                alt="bestseller"
                width={80}
                height={80}
                placeholder="blurred"
              />
            </div>
          )}
          <div className={styles.params}>
            <h4 className={styles.category}>{category}</h4>
            <Rating count={rating.count} rate={rating.rate} />
          </div>
          <h2>{title}</h2>
          <div className={styles.product_content}>
            <div className={styles.footer_card}>
              <div className={styles.price}>
                <h2>${price.toFixed(0)}</h2>
              </div>
              <div className={styles.btns}>
                {!countItem ? (
                  <div>
                    <Button
                      count={countItem}
                      onClick={() => setCountItem(countItem + 1)}
                    >
                      Add
                    </Button>
                  </div>
                ) : (
                  <Counter countItem={countItem} setCountItem={setCountItem} />
                )}
                <button
                  className={
                    favorIn ? styles.favor_wrapper_fill : styles.favor_wrapper
                  }
                  onClick={() => setfavorIn(!favorIn)}
                >
                  {favorIn ? (
                    <StaticImage
                      src="../images/favorfill.svg"
                      className={styles.favor}
                      alt="favor"
                      width={24}
                      height={24}
                      placeholder="blurred"
                    />
                  ) : (
                    <StaticImage
                      src="../images/favor.svg"
                      className={styles.favor}
                      alt="favor"
                      width={24}
                      height={24}
                      placeholder="blurred"
                    />
                  )}
                </button>
              </div>
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
            />
            <p>Pickup not available at Singapore Supercenter</p>
            <Link to="/" className={styles.link}>
              Check availability nearby
            </Link>
          </div>
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
  query ProductQuery($id: ID!) {
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
            gatsbyImageData(
              width: 300
              formats: AUTO
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
    }
  }
`
