import * as React from "react"
import { ScrollingProvider, Section } from "react-scroll-section";

import Seo from "../components/seo"
import Layout from "../components/layout"
import Header from '../components/Header/Header'
import Section1 from "../components/Section1/Section1"
import Section2 from "../components/Section1/Section2"
import Hero from '../components/Hero/Hero'
import Lifestyle from '../components/Lifestyle/Lifestyle'
import Location from '../components/Location/Location'


const IndexPage = () => (
  <Layout>
    <Seo title="Umbra True Living" />
    <Header/>
    <Hero/>
    
    <Section1/>
    <Section2/>
    <Lifestyle />
    <Location />
  </Layout>
)

export default IndexPage
