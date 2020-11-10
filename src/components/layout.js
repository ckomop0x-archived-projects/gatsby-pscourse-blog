import React from "react"
import styles from "./layout.module.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <main>
    <Header className={styles.container} />
    <div className={styles.container}>{children}</div>
    <Footer className={styles.container}>My new Gatsby Blog 2020</Footer>
  </main>
)

export default Layout
