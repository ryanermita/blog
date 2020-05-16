import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="" keywords={[`blog`, `ryan ermita`, `tech blog`]} />
    <LandingBio />
  </Layout>
)

export default IndexPage
