import * as React from "react"
import { Link } from "gatsby-link"

import * as styles from "./ProductCard.module.scss"
import bestseller from "@/images/bestseller.png"
import favor from "@/images/favor.svg"
import favorFill from "@/images/favorfill.svg"
import Counter from "../ui-kit/counter/counter"
import Button from "../ui-kit/Button/button"
import Rating from "../ui-kit/rating/rating"
import { useState } from "react"
import { useEffect } from "react"

const ProductCard = ({ product }) => {
  const [countItem, setCountItem] = useState(0)
  const [favorIn, setfavorIn] = useState(false)
  const [cart, setCart] = useState([])
  const { id, title, price, description, category, image, rating } = product

  return (
    <article className={styles.container}>
      <Link to={`/product/${product.id}`} className={styles.link} />
      <div className={styles.wrapper}>
        {rating.count > 300 && rating.rate > 4 && (
          <div className={styles.bestseller}>
            <img src={bestseller} alt="bestseller" width={80} height={80} />
          </div>
        )}
        <img
          src={image}
          alt="Image product"
          className={styles.img}
          width={220}
          height={220}
        />
        <div className={styles.product_desc}>
          <div className={styles.text}>
            <div className={styles.params}>
              <h5 className={styles.category}>{category}</h5>
              <Rating count={rating.count} rate={rating.rate} />
            </div>
            <h3>{title}</h3>
            <p className={styles.desc}>{description.slice(0, 120)}...</p>
          </div>
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

              <div
                className={
                  favorIn ? styles.favor_wrapper_fill : styles.favor_wrapper
                }
                onClick={() => setfavorIn(!favorIn)}
              >
                <img
                  src={favorIn ? favorFill : favor}
                  className={styles.favor}
                  alt="favor"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
export default ProductCard
