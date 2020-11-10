import React from "react"
import styles from "./title.module.scss"

const Title = ({ children, subtitle }) => (
  <section className={styles.container}>
    <h1 className={styles.title}>{children}</h1>
    <div className={styles.subtitle}>{subtitle}</div>
  </section>
)

export default Title
