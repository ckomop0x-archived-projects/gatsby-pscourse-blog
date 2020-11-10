import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"

export default function Home({data}) {
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

      <div>
        {data && data.allMarkdownRemark.edges.map(({node}) => (
          <article>
            <div>
              <strong>{node.frontmatter.title}</strong>
            </div>
            <div>
              {node.excerpt}
            </div>
            {/*{JSON.stringify(node)}*/}
          </article>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql `query IndexPageQuery {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          date(formatString: "MMM YYYY")
          image
          title
        }
        excerpt
      }
    }
  }
}`
