import React from 'react'
import './Navber.css'

function Navbar() {
    return (
        <div>
            <nav>
                <div className="containar">
                    <div className="main">
                        <div className="img">
                            <a><img src="./images/logo.png" alt="" /></a>
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a href="../home/index.html">Home</a></li>
                                <li><a>About us</a></li>
                                <li><a href="#">featurse</a></li>
                                <li><a href="#">phicing</a></li>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">blog</a></li>
                                <li><a className="btn" href="#">contuct us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
