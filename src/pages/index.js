import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Header from '../components/Header/Header'
import Secction1 from "../components/Section1/Section1"
import Section1 from "../components/Section1/Section1"


const IndexPage = () => (
  <Layout>
    <Header/>
    <Section1/>
    <h1>Umbra</h1>
    
  </Layout>
)

export default IndexPage
