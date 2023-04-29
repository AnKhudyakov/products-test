import * as React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"

import * as styles from "./header.module.scss"

const Header = ({ siteTitle }) => {
  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      navigate("/")
    }
  }

  return (
    <header className={styles.container}>
      <div className={styles.header_wrapper}>
        <Link
          to="/"
          className={styles.link}
          onKeyPress={handleKeyPress}
          aria-label="menu"
        >
          {siteTitle}
        </Link>
      </div>
    </header>
  )
}

export default Header
