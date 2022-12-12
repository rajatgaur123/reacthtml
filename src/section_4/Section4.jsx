import React from "react";
import '../section_4/section4.css';
import {FaFacebook} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {FaInstagram} from "react-icons/fa";
import  brown from  '../assets/bob brown.jpg'
import  Smith from  '../assets/Mary Smith.jpg'
import  Dark from  '../assets/Nick Dark.jpg'
import  Dowson from  '../assets/Mark Dowson.jpg'
// import  Nilson from  '../assets/Betty Nilson.jpg'
import  Scold from  '../assets/Adrian Scold.jpg'
function Section4(){
    return(
        <>
    <section id="section-4">
        <div className="container">
            <h1 className="our-team">0ur team</h1>
            <p className="it-team-p">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br /> ut aliquip ex ea commodo consequat.</p>
            <div className="media-container">
                <div className="media-1">
                    <img src={brown} alt="bob brown" />
                    <h3>creative leader</h3>
                    <h1>bob brown</h1>
                    <p>Glavi amet ritnisl libero molestie <br /> ante ut fringilla purus eros quis <br /> glavrid from dolor amet iquam <br /> lorem bibendum</p>
                    <div className="media-icons">
                        <div className="FaFacebook">
                            <h2><FaFacebook/></h2>
                        </div>
                        <div className="AiFillTwitterCircle">
                            <h2><AiFillTwitterCircle/></h2>
                        </div>
                        <div className="FaInstagram">
                            <h2><FaInstagram/></h2>
                        </div>
                    </div>
                </div>
                <div className="media-1">
                    <img src={Smith} alt="Mary Smith" />
                    <h3>chief accountant</h3>
                    <h1>mary smith</h1>
                    <p>Glavi amet ritnisl libero molestie <br /> ante ut fringilla purus eros quis <br /> glavrid from dolor amet iquam <br /> lorem bibendum</p>
                    <div className="media-icons">
                        <div className="FaFacebook">
                            <h2><FaFacebook/></h2>
                        </div>
                        <div className="AiFillTwitterCircle">
                            <h2><AiFillTwitterCircle/></h2>
                        </div>
                        <div className="FaInstagram">
                            <h2><FaInstagram/></h2>
                        </div>
                    </div>
                    
                </div>
                <div className="media-1">
                    <img src={Dark} alt="Nick Dark" />
                    <h3>SALES MANAGER</h3>
                    <h1>nick dark</h1>
                    <p>Glavi amet ritnisl libero molestie <br /> ante ut fringilla purus eros quis <br /> glavrid from dolor amet iquam <br /> lorem bibendum</p>
                    <div className="media-icons">
                        <div className="FaFacebook">
                            <h2><FaFacebook/></h2>
                        </div>
                        <div className="AiFillTwitterCircle">
                            <h2><AiFillTwitterCircle/></h2>
                        </div>
                        <div className="FaInstagram">
                            <h2><FaInstagram/></h2>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="media-icon-container">
                <div className="media-1">
                    <img src={Dowson} alt="Mark Dowson" />
                    <h3>FINANCIAL DIRECTOR</h3>
                    <h1>mark dowson</h1>
                    <p>Glavi amet ritnisl libero molestie <br /> ante ut fringilla purus eros quis <br /> glavrid from dolor amet iquam <br /> lorem bibendum</p>
                    <div className="media-icons">
                        <div className="FaFacebook">
                            <h2><FaFacebook/></h2>
                        </div>
                        <div className="AiFillTwitterCircle">
                            <h2><AiFillTwitterCircle/></h2>
                        </div>
                        <div className="FaInstagram">
                            <h2><FaInstagram/></h2>
                        </div>
                    </div>
                </div>
                <div className="media-1">
                    <img src={Smith} alt="Mary Smith" />
                    <h3>DESIGNEER</h3>
                    <h1>betty nilson</h1>
                    <p>Glavi amet ritnisl libero molestie <br /> ante ut fringilla purus eros quis <br /> glavrid from dolor amet iquam <br /> lorem bibendum</p>
                    <div className="media-icons">
                        <div className="FaFacebook">
                            <h2><FaFacebook/></h2>
                        </div>
                        <div className="AiFillTwitterCircle">
                            <h2><AiFillTwitterCircle/></h2>
                        </div>
                        <div className="FaInstagram">
                            <h2><FaInstagram/></h2>
                        </div>
                    </div>
                    
                </div>
                <div className="media-1">
                    <img src={Scold} alt="Adrian Scold" />
                    <h3>DEVELOPER</h3>
                    <h1>adrian scold</h1>
                    <p>Glavi amet ritnisl libero molestie <br /> ante ut fringilla purus eros quis <br /> glavrid from dolor amet iquam <br /> lorem bibendum</p>
                    <div className="media-icons">
                        <div className="FaFacebook">
                            <h2><FaFacebook/></h2>
                        </div>
                        <div className="AiFillTwitterCircle">
                            <h2><AiFillTwitterCircle/></h2>
                        </div>
                        <div className="FaInstagram">
                            <h2><FaInstagram/></h2>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default Section4