import * as React from "react"
import { Link } from "gatsby-link"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import * as styles from "./ProductCard.module.scss"

import Counter from "../ui-kit/counter/counter"
import Button from "../ui-kit/button/button"
import Rating from "../ui-kit/rating/rating"
import { useState } from "react"

const ProductCard = ({ product }) => {
  const [countItem, setCountItem] = useState(0)
  const [favorIn, setfavorIn] = useState(false)
  const { title, price, description, category, rating } = product
  const image = getImage(product.imageSharp)

  const handleIncreaseCount = (e) => {
    if (e.keyCode === 13) {
      setCountItem(countItem + 1)
    }
  }

  return (
    <article className={styles.container}>
      <Link to={`/product/${product.id}`} className={styles.link} />
      <div className={styles.wrapper}>
        {rating.count > 300 && rating.rate > 4 && (
          <div className={styles.bestseller}>
            <StaticImage
              src="../../images/bestseller.png"
              alt="bestseller"
              width={80}
              height={80}
              placeholder="blurred"
            />
          </div>
        )}
        <div>
          <div className={styles.image_wrapper}>
            <GatsbyImage
              image={image}
              alt="Image product"
              className={styles.img}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.params}>
              <h5 className={styles.category}>{category}</h5>
              <Rating count={rating.count} rate={rating.rate} />
            </div>
            <h3>{title}</h3>
            <p className={styles.desc}>{description.slice(0, 120)}...</p>
          </div>
        </div>
        <div className={styles.product_desc}>
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
                    onKeyDown={handleIncreaseCount}
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
                    src="../../images/favorfill.svg"
                    className={styles.favor}
                    alt="favor"
                    width={24}
                    height={24}
                    placeholder="blurred"
                  />
                ) : (
                  <StaticImage
                    src="../../images/favor.svg"
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
      </div>
    </article>
  )
}
export default ProductCard
