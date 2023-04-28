import * as React from "react"
import { Link } from "gatsby"

import * as styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.container}>
    <div className={styles.header_wrapper}>
      <Link to="/" className={styles.link}>
        {siteTitle}
      </Link>
    </div>
  </header>
)

export default Header
