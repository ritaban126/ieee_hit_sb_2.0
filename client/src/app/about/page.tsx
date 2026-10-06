

import About from '@/components/about/about'
// import NavbarEvents from '@/components/events/navbar-event'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'
import React from 'react'

const page = () => {
  return (
      <>
      <main className="relative bg-black">
         <Navbar/>
        {/* vertical lines div */}
        <div className="relative z-10">
           <About/>
        </div>
        <Footer/>
      </main>
    </>
  )
}

export default page