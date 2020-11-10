import React from "react"
import { Link } from "gatsby"
import styles from "./404.module.scss"
import Layout from "../components/layout"

export default function page404() {
  return (
    <Layout>
      <div className={styles.content}>
        <h1 className={styles.header}>This page does not exist!</h1>
        <p className={styles.errorMessage}>You can go back to the main page</p>
        <Link to="/">Home page</Link>
      </div>
    </Layout>
  )
}
