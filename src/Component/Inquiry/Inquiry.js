import React from 'react'
import './Inquiry.css'

function Inquiry() {
  return (
    <div>
            <section className="contuct">
                <div className="containar">
                    <div className="contuct_main">
                        <div className="contuct_img">

                            <div className="contuct_text">
                                <h2>Building stellar </h2>
                                <h2>websites for</h2>
                                <h2> early startups</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                <p>sed do eiusmod tempor incididunt ut labore et </p>
                                <p>dolore magna aliqua ut enim.</p>
                            </div>
                        </div>
                        <div className="contuct_from">
                            <div className="from_heading">
                                <h2>Send inquiry</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                <p>lit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                        <div className="from">
                            <form action="">
                                <div className="name">
                                    <input type="text" placeholder="Entar your name" className="input"/>
                                </div>
                                <div className="Email">

                                    <input type="email" placeholder="email" className="input"/>
                                </div>
                                <div className="url">

                                    <input type="url" placeholder="passed your figma design URL" className="input"/>
                                </div>



                            </form>
                            <div className="button">
                                <input type="submit" value="send and uniqiry" className="btn"/>
                            </div>

                        </div>


                    </div>
                </div>

        </div>

    </section >
    </div>
  )
}

export default Inquiry
