import * as React from "react"
import { Link } from "gatsby"

import * as styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.container}>
    <Link to="/" className={styles.link}>
      {siteTitle}
    </Link>
  </header>
)

export default Header
