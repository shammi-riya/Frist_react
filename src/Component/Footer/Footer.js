import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
          <footer className="footer">
              <div className="container footer_main">
                  <div className="footer_left">
                      <img src="images/logo.png" alt=""/>
                          <p>We are always open to discuss your project and improve your online presence.</p>
                          <div className="footer_last">
                              <div className="footer_one">
                                  <h3>Email me at</h3>
                                  <a href="#">contact@website.com</a>
                              </div>
                              <div className="footer_two">
                                  <h4>Call us</h4>
                                  <h6>0927 6277 28525</h6>
                              </div>
                          </div>
                  </div>
                  <div className="footer_right">
                      <h2>Lets Talk!</h2>
                      <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                  </div>
              </div>

          </footer>
    </div>
  )
}

export default Footer
