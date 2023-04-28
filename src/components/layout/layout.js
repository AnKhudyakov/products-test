/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import "./layout.module.scss"
import 'normalize.css';
import "../../styles/global.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} &middot; Built with ❤️ by <a href="https://ankhudyakov.github.io/My_CV/">Andrey Khudyakov</a></footer>
    </>
  )
}

export default Layout
