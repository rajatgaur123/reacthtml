import React from "react";
import '../section_6/section6.css';
import  Dowson from  '../assets/Mark Dowson.jpg'

function Section6(){
    return(
        <>
    <section id="section-6">
        <div className="container">
            <div className="new-york-container">
                <div className="york-box-no">
                    <h1 className="york-h1">001-234-5678</h1>
                    <h1 className="york-h1">001-987-7654</h1>
                    <p className="york-p">121 rock sreet, 21 avenue, new <br /> york, NY 92103-9000</p>
                    <p className="freepik-p2">image from freepik</p>
                </div>
                <div className="york-img-box">
                    <img src={Dowson} alt="Mark Dowson" />
                </div>
            </div>
            <div className="new-york2-container">
                <div className="call-box">
                    <h1>call us</h1>
                    <p>1(234)567-891</p>
                    <p>1(234)567-891</p>
                </div>
                <div className="call-box location">
                    <h1>location</h1>
                    <p>121 Rock Sreet, 21 Avenue, <br /> New York, NY 92103-9000</p>
                </div>
                <div className="call-box hours">
                    <h1>hours</h1>
                    <p>Mon - Fri …… 11 am - 8 pm,</p>
                    <p>sat,sun …… 6 am - 8 pm,</p>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default Section6