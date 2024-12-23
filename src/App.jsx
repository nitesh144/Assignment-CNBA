import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Call from './components/Call'
import Whatsapp from './components/Whatsapp'
import Contact from './components/Contact'
import VisionSection from './components/Vision'
import AboutUsSection from './components/About'
import ServicesSection from './components/Service'
import Header from './components/Header'

//import './App.css'

function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Header />
      <VisionSection/>
      <ServicesSection/>
      <AboutUsSection/>
      <Contact/>
      <Call/>
      <Whatsapp/>
      
    </div>
      
    </>
  )
}

export default App
