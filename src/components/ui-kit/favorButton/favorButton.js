import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./favorButton.module.scss"

const FavorButton = ({ favorIn, ...restProps }) => {
  return (
    <button
      className={favorIn ? styles.favor_wrapper_fill : styles.favor_wrapper}
      {...restProps}
    >
      {favorIn ? (
        <StaticImage
          src="../../../images/favorfill.svg"
          className={styles.favor}
          alt="favor"
          width={24}
          height={24}
          placeholder="blurred"
        />
      ) : (
        <StaticImage
          src="../../../images/favor.svg"
          className={styles.favor}
          alt="favor"
          width={24}
          height={24}
          placeholder="blurred"
        />
      )}
    </button>
  )
}

export default FavorButton
