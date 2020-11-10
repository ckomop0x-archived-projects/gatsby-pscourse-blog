import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import ArticleList from "../components/article-list"

export default function Home() {
  return (
    <Layout>
      <Title>Welcome</Title>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at aut blanditiis dignissimos dolorem,
        laboriosam laborum modi molestiae pariatur provident quasi, quo unde ut. Culpa deleniti dolorem enim labore
        vitae?
      </p>
      <ArticleList />
    </Layout>
  )
}
