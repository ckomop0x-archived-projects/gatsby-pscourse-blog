import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

export default function Home() {
  return (
    <Layout>
      <Title>Welcome</Title>
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at aut blanditiis dignissimos dolorem,
        laboriosam laborum modi molestiae pariatur provident quasi, quo unde ut. Culpa deleniti dolorem enim labore
        vitae?
      </p>
    </Layout>
  )
}
