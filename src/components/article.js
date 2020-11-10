import React from "react"
import { Link } from "gatsby"
import styles from "./article.module.scss"

const Article = ({ to, id, keywords, title, date, excerpt }) => (
  <Link to={to}>
    <article className={styles.articleBox} key={id}>
      <div className={styles.left}>
        <img src={"https://source.unsplash.com/150x150/?" + keywords} alt={title} />
      </div>
      <div className={styles.right}>
        <h3>{title}</h3>
        <div className={styles.date}>{date}</div>
        <div>{excerpt}</div>
      </div>
    </article>
  </Link>
)

export default Article
