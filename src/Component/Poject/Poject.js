import React from 'react'
import './Poject.css'

function Poject() {
  return (
    <div>
          <section className="poject">
              <div className="containar">
                  <div className="poject_head">
                      <h3>view our poject</h3>
                      <a href="">veiw more <i className="fa-sharp fa-solid fa-arrow-right right_arrow" ></i></a>
                  </div>
                  <div className="img_ovarly">
                      <div className="left_img">
                          <img src="./images/cardimg1.png" alt=""/>
                              <div className="ovarly">
                                  <div className="text">
                                      <h3>Workhub office Webflow</h3>
                                      <h3> Webflow Design</h3>
                                      <p>Euismod faucibus turpis eu gravida </p>
                                      <p>mi. Pellentesque et velit aliquam </p>
                                      <a href=""><i className="fa-sharp fa-solid fa-arrow-right right_arrow" ></i></a>
                                  </div>
                              </div>

                      </div>
                      <div className="right_img">
                          <div className="right_img_1">
                              <img src="./images/cardimg2.png" alt=""/>
                                  <div className="right-img_1_ovarly">
                                      <div className="innar_text">
                                          <h3>Unisaas Website </h3>
                                          <h3>Design</h3>
                                      </div>

                                  </div>
                          </div>
                          <div className="right_img_2">
                              <img src="./images/Cardimg3.png" alt=""/>
                                  <div className="right_img_2_ovarly">

                                  </div>
                          </div>

                      </div>


                  </div>
              </div>

          </section>
    </div>
  )
}

export default Poject
