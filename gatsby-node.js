const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/post.js`)
  return graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allMarkdownRemark(
          limit: $limit
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date
                slug
              }
              excerpt
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    // console.log(JSON.stringify(result, null, 2))
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(post => {
      createPage({
        path: post.node.frontmatter.slug,
        component: blogTemplate,
        context: {
          slug: post.node.frontmatter.slug,
        },
      })
    })
  })
}
