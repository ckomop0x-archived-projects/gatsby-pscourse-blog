import React from "react"
import styles from "./footer.module.scss"

const Footer = ({ children }) => (
  <footer className={styles.container}>
    <div className={styles.footer}>{children}</div>
  </footer>
)

export default Footer
