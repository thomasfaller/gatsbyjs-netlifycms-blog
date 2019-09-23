import React from 'react'
import { Link, graphql } from 'gatsby'
import GLayout from '../components/layout'
// import Image from '../components/image'
import Bio from '../components/bio'
import SEO from '../components/seo'

import { List } from 'antd'

const IndexPage = ({ data }) => (
  <GLayout page="1">
    <SEO
      title="Home"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `blog`,
        `web development`,
        `html`,
        `css`,
      ]}
    />

    <List
      itemLayout="horizontal"
      dataSource={data.allMarkdownRemark.edges}
      renderItem={({ node }) => (
        <List.Item extra=<Link to={node.frontmatter.slug}>Read more</Link>>
          <List.Item.Meta
            title={
              <span style={{ fontSize: '2rem' }}>
                <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
              </span>
            }
            description={
              <p style={{ paddingTop: '16px', lineHeight: '1.25' }}>
                {node.excerpt}
              </p>
            }
          />
        </List.Item>
      )}
    />
    <Bio />
  </GLayout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        tagline
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            author
            title
            date
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
