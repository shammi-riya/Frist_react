import React from 'react'
import './Bannar.css'

function Bannar() {
    return (
        <div>
            <section className="bannar">
                <div className="containar">
                    <div className="banar_mains">
                        <div className="bannar_text">
                            <h3>Building stellar </h3>
                            <h3> websites for early</h3>
                            <h3>startups</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            <p> eiusmod tempor incididunt.</p>
                       
                            <div className="bannar_btn">
                                <a href="#"> veiw our work</a>
                                <a href="#" className="icon"> view our pricing <i className="fa-sharp fa-solid fa-arrow-right right_arrow" ></i> </a>
                            </div>
                        </div> 

                        <div className="bannar_img">
                            <img src="./images/bg-img.png" alt="" />

                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Bannar
