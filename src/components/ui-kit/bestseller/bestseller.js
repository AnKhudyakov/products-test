import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./bestseller.module.scss"

const Bestseller = ({ rating }) => {
  return (
    <>
      {rating.count > 300 && rating.rate > 4 && (
        <div className={styles.bestseller}>
          <StaticImage
            src="../../../images/bestseller.png"
            alt="bestseller"
            width={80}
            height={80}
            placeholder="blurred"
          />
        </div>
      )}
    </>
  )
}

export default Bestseller
