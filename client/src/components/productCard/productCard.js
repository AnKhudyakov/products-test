import * as React from "react"
import { Link } from "gatsby-link"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useState } from "react"

import * as styles from "./ProductCard.module.scss"
import Counter from "../ui-kit/counter/counter"
import Button from "../ui-kit/button/button"
import Rating from "../ui-kit/rating/rating"
import FavorButton from "../ui-kit/favorButton/favorButton"
import Bestseller from "../ui-kit/bestseller/bestseller"

const ProductCard = ({ product }) => {
  const [countItem, setCountItem] = useState(0)
  const [favorIn, setfavorIn] = useState(false)
  const { title, price, description, category, rating } = product
  const image = getImage(product.imageSharp)

  const handleIncreaseCount = e => {
    if (e.keyCode === 13) {
      setCountItem(countItem + 1)
    }
  }

  return (
    <article className={styles.container}>
      <Link to={`/product/${product.id}`} className={styles.link} />
      <div className={styles.wrapper}>
        <Bestseller rating={rating}/>
        <div className={styles.content_card}>
          <div className={styles.image_wrapper}>
            <GatsbyImage
              image={image}
              alt="Image product"
              objectFit="contain"
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
        <div className={styles.footer_card}>
          <h2>${price.toFixed(0)}</h2>
          <div className={styles.btns}>
            {!countItem ? (
              <Button
                count={countItem}
                onClick={() => setCountItem(countItem + 1)}
                onKeyDown={handleIncreaseCount}
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
      </div>
    </article>
  )
}
export default ProductCard
