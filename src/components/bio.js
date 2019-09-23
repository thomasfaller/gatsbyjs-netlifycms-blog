import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import { List, Avatar, Divider } from 'antd'

const { Item } = List,
  { Meta } = Item

const Bio = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author
            authorImage
            authorBio
          }
        }
      }
    `}
    render={data => (
      <div>
        <Divider orientation="left">Author</Divider>
        <Item>
          <Meta
            avatar={
              <Avatar
                size={64}
                src={data.site.siteMetadata.authorImage}
                alt="Photo of Thomas Faller"
              />
            }
            title={<Link to="/about">{data.site.siteMetadata.author}</Link>}
            description={data.site.siteMetadata.authorBio}
          />
        </Item>
      </div>
    )}
  />
)

export default Bio
