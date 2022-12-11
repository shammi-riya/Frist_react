import React from 'react'
import Bannar from '../Bannar/Bannar'


import Work from '../Component/Work/Work'
import Poject from '../Component/Poject/Poject'
import Inquiry from '../Component/Inquiry/Inquiry'
import Blog2 from '../Component/Blog2/Blog2'
import Footer from '../Component/Footer/Footer'
import FooterEnd from '../Component/Footer/FooterEnd'
import Navbar from '../Component/Navber/Navbar'



function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Bannar></Bannar>
            <Work></Work>
            <Poject></Poject>
            <Inquiry></Inquiry>
            <Blog2></Blog2>
            <Footer></Footer>
            <FooterEnd></FooterEnd>





        </div>
    )
}

export default Home
