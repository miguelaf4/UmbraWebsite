import * as React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Header from '../components/Header/Header'
import Section1 from "../components/Section1/Section1"
import Section2 from "../components/Section1/Section2"
import Hero from '../components/Hero/Hero'
import Lifestyle from '../components/Lifestyle/Lifestyle'
import Location from '../components/Location/Location'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'
import Scan from '../components/Scan/Scan'
import Map from '../components/Room/Room'


import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'



const IndexPage = () => (
  <>
    <Layout>
    <Seo title="Umbra True Living" />
    <Header/>
    <Hero/>
    <Section1/>
    <Section2/>
    {/* <Map/> */}
    <Lifestyle />
    <Location />
    <Form/>
    <Scan />
    <Footer/>
  </Layout>
  <WhatsAppWidget phoneNumber="529994480966" message="¡Hola! Ponte en contacto con nuestro equipo." companyName="Umbra" textReplyTime="Te contestamos en unos minutos" sendButton="Enviar"/>
  </>
  
)

export default IndexPage
