import React from 'react'
import { Link } from 'gatsby'

import GLayout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <GLayout page="3">
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </GLayout>
)

export default SecondPage
