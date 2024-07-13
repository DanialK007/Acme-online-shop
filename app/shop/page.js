import { Discover } from '@/components/component/discover'
import { Ecommerce } from '@/components/component/ecommerce'
import Featured from '@/components/component/Featured'
import Footer from '@/components/component/footer'
import { Navbar } from '@/components/component/navbar'
import { TimeLimited } from '@/components/component/time-limited'
import React from 'react'

function Shop() {
    return (
        <>
            <Navbar />
            <Discover />
            <Featured />
            <TimeLimited />
            <Ecommerce />
            <Footer />
        </>
    )
}

export default Shop
