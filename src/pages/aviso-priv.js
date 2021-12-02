import * as React from "react"



import Seo from "../components/seo"
import Layout from "../components/layout"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Terms from '../components/Terms/Terms'

const SecondPage = () => (
  <Layout>
   <Seo title="Umbra True Living" />
    <Header/>
    <Terms/>
    <Footer/>
  </Layout>
)

export default SecondPage
