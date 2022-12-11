import React from 'react'
import BlogBannar from '../Blog/BlogBannar/BlogBannar'

import Footer from '../Component/Footer/Footer'
import FooterEnd from '../Component/Footer/FooterEnd'

import Navbar from '../Component/Navber/Navbar'


function Blog() {
  return (
    <div>
      <Navbar></Navbar>
      <BlogBannar></BlogBannar>
      <Footer></Footer>
      <FooterEnd></FooterEnd> 
    </div>
  )
}

export default Blog
