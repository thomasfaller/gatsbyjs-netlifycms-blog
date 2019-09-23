import React from 'react'
import { Link } from 'gatsby'

import GLayout from '../components/layout'
import Bio from '../components/bio'
import SEO from '../components/seo'

const AboutPage = () => (
  <GLayout page="4">
    <SEO title="About" />
    <h1>Hi from the About page</h1>
    <Bio />
    <Link to="/">Go back to the homepage</Link>
  </GLayout>
)

export default AboutPage
