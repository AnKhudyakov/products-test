import * as React from "react"

import * as styles from "./counter.module.scss"

const Counter = ({ countItem, setCountItem }) => {
  const handleIncreaseCount = e => {
    if (e.keyCode === 13) {
      setCountItem(countItem + 1)
    }
  }

  const handleDecreaseCount = e => {
    if (e.keyCode === 13) {
      setCountItem(Math.max(countItem - 1, 0))
    }
  }

  return (
    <div className={styles.btn}>
      <button
        className={styles.wrapper_minus}
        onClick={() => setCountItem(Math.max(countItem - 1, 0))}
        onKeyDown={handleDecreaseCount}
      >
        <div className={styles.minus}></div>
      </button>
      <p className={styles.counter}>{countItem}</p>
      <button
        className={styles.wrapper_plus}
        onClick={() => setCountItem(countItem + 1)}
        onKeyDown={handleIncreaseCount}
      >
        <div className={styles.plus}></div>
      </button>
    </div>
  )
}

export default Counter
