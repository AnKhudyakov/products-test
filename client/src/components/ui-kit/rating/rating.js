import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./rating.module.scss"

const Rating = ({ rate, count }) => {
  let roundRate = Math.round(rate)

  const stFill = []
  const stEmpty = [0, 1, 2, 3, 4]

  for (let i = 0; i < roundRate; i++) {
    stFill.push(i)
    stEmpty.pop()
  }

  return (
    <div className={styles.rating}>
      {stFill.map((star, index) => (
        <StaticImage
          src="../../../images/starfill.svg"
          alt="Star"
          width={14}
          height={14}
          key={index}
          placeholder="blurred"
        />
      ))}
      {stEmpty.map((star, index) => (
        <StaticImage
          src="../../../images/star.svg"
          alt="Star"
          width={14}
          height={14}
          key={index}
          placeholder="blurred"
        />
      ))}
      <h5 className={styles.rate}>{count}</h5>
    </div>
  )
}

export default Rating
