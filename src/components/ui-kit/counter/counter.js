import * as React from "react"

import * as styles from "./counter.module.scss"

const Counter = ({ countItem, setCountItem }) => {
  return (
    <div className={styles.btn}>
      <div className={styles.wrapper_minus} onClick={() => setCountItem(Math.max(countItem - 1, 0))}>
        <div
          className={styles.minus}
        ></div>
      </div>
      <p className={styles.counter}>{countItem}</p>
      <div className={styles.wrapper_plus} onClick={() => setCountItem(countItem + 1)}>
        <div
          className={styles.plus}
        ></div>
      </div>
    </div>
  )
}

export default Counter
