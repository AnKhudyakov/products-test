import * as React from "react"

import * as styles from "./rating.module.scss"
import starEmpty from "../../../images/star.svg"
import starfill from "../../../images/starfill.svg"

const Rating = ( props ) => {
  const rate = Math.round(props.rate)

  const stFill = []
  const stEmpty = [0, 1, 2, 3, 4]

  for (let i = 0; i < rate; i++) {
    stFill.push(i)
    stEmpty.pop()
  }

  return (
    <div className={styles.rating}>
      {stFill.map((star, index) => (
        <img src={starfill} alt="Star" width={14} height={14} key={index} />
      ))}
      {stEmpty.map((star, index) => (
        <img src={starEmpty} alt="Star" width={14} height={14} key={index} />
      ))}
      <h5 className={styles.rate}>{props.count}</h5>
    </div>
  )
}

export default Rating
