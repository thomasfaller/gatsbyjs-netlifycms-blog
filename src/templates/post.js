import React from 'react'
import GLayout from '../components/layout'
import Bio from '../components/bio'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'

export default ({ data }) => {
  const { title, date } = data.markdownRemark.frontmatter
  const __html = data.markdownRemark.html
  return (
    <GLayout>
      <SEO title={title} description={data.markdownRemark.excerpt} />
      <h1>{title}</h1>
      <p>Published on {date}</p>
      <div dangerouslySetInnerHTML={{ __html }} />
      <Bio />
    </GLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
      }
    }
  }
`
