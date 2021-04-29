import * as React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Lifestyle from '../components/Lifestyle/Lifestyle'
import Location from '../components/Location/Location'

const IndexPage = () => (
  <Layout>
    <Seo title="Umbra True Living" />
    <Header/>
    <Hero/>
    <Lifestyle />
    <Location />
  </Layout>
)

export default IndexPage
