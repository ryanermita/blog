import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const ArticleDate = styled.h4`
  display: inline;
  color: #606060;

  ::after {
    content: "-";
    margin: 0 12px;
  }
`

const ArticleTitle = styled.h4`
  display: inline;
  color: #606060;
`

const Article = styled.div`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Software Engineering Journal" />
      <Content>
        <h1>Software Engineering Journal</h1>
        {data.allMarkdownRemark.edges
          .map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <Article>
                  <ArticleDate>{node.frontmatter.rawDate}</ArticleDate>
                  <ArticleTitle>{node.frontmatter.title}</ArticleTitle>
                </Article>
              </Link>
            </div>
          ))}
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
          site {
          siteMetadata {
          title
        }
    }
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {draft: {eq: false } } }
    ) {
          totalCount
      edges {
          node {
          id
          frontmatter {
          title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
          }
          fields {
          slug
            readingTime {
          text
        }
          }
          excerpt
        }
      }
    }
  }
`
