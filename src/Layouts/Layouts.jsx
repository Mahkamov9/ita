import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

export default function Layouts( {children} ) {
  return (
    <>
        <Navbar/>
            {children}
        <Footer/>
    </>
  )
}
