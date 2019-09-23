import React from 'react'

import GLayout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <GLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </GLayout>
)

export default NotFoundPage
