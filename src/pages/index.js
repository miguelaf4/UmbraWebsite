import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Header from '../components/Header/Header'
import Section1 from "../components/Section1/Section1"
import Hero from '../components/Hero/Hero'
import Lifestyle from '../components/Lifestyle/Lifestyle'



const IndexPage = () => (
  <Layout>
    <Header/>
    <Hero/>
    <Section1/>
    <Lifestyle />
  </Layout>
)

export default IndexPage
