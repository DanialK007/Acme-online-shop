import React from 'react'

import { Ecommerce } from '@/components/component/ecommerce'
import { Navbar } from '@/components/component/navbar'
import { Hero } from '@/components/component/hero'
import Footer from '@/components/component/footer'
import Customer from '@/components/component/Customer'
import Featured from '@/components/component/Featured'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Ecommerce />
      <Customer />
      <Footer />
    </>
  )
}

export default Home