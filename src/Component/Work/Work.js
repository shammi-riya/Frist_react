import React from 'react'
import './Work.css'

function Work() {
  return (
    <div>
          <section className="work">
              <div className="containar">
                  <div className="work_main">
                      <div className="work_left">
                          <h3>How we work</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur </p>
                          <p>adipiscing elit, sed do eiusmod tempor.</p>
                          <a href="">Get in touch with us <i className="fa-sharp fa-solid fa-arrow-right right_arrow" ></i></a>
                      </div>
                      <div className="work_right">
                          <div className="work_right_main">
                              <div className="left">
                                  <div className="one">
                                      <img src="./images/card1.png" alt=""/>
                                          <h3>Strategy</h3>
                                          <p>Euismod faucibus turpis eu gravida mi</p>
                                          <p>mi. Pellentesque et velit aliquam .</p>

                                  </div>
                                  <div className="one">
                                      <img src="./images/card2.png" alt=""/>
                                          <h3>Wireframing</h3>

                                          <p>Euismod faucibus turpis eu gravida </p>
                                          <p>mi. Pellentesque et velit aliquam .</p>
                                  </div>


                              </div>
                              <div className="right">
                                  <div className="one">
                                      <img src="./images/card3.png" alt=""/>
                                          <h3>design</h3>
                                          <p>Euismod faucibus turpis eu gravida </p>
                                          <p>mi. Pellentesque et velit aliquam .</p>

                                  </div>
                                  <div className="one">
                                      <img src="./images/card4.png" alt=""/>
                                          <h3>development</h3>
                                          <p>Euismod faucibus turpis eu gravida </p>
                                          <p>mi. Pellentesque et velit aliquam .</p>
                                  </div>

                              </div>
                          </div>


                      </div>
                  </div>
              </div>

          </section>
    </div>
  )
}

export default Work
