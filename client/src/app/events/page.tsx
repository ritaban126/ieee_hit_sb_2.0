
import Events from '@/components/events/events'
// import NavbarEvents from '@/components/events/navbar-event'
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/sections/Navbar'
import React from 'react'


const page = () => {
  return (
      <>
      <main className="relative bg-black">
         {/* <NavbarEvents/> */}
         <Navbar/>
        {/* vertical lines div */}
        <div className="relative z-10">
           <Events/>
          {/* baaki sections */}
        </div>
        <Footer/>
      </main>
    </>
  )
}

export default page
