import React from 'react';
import Layout from '../../layout/Layout';
import "../contact/contact.css";
import {MdLocationOn} from "react-icons/md";
import {BsFillTelephoneFill} from "react-icons/bs";
import {FaFax} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {FaFacebookF} from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import {FiInstagram} from "react-icons/fi";

const Contact = () => {
  return (
    <Layout>
        <div className='contact-section'>

        </div>

        <div className="contact-section2">
            <div className="container">
                <div className="flex-box">
                    <div className="location-box">
                        <div className='MdLocationOn h1-font'>
                            <h1> <MdLocationOn/> </h1>
                        </div>
                        <h1 className='location-h1'>our main office</h1>
                        <p className='location-p'>soho 94 broadway st new <br /> york, ny 1001</p>
                    </div>

                    <div className="location-box">
                        <div className='BsFillTelephoneFill h1-font'>
                            <h1><BsFillTelephoneFill/></h1>
                        </div>
                        <h1 className='location-h1'>phone number</h1>
                        <p className='location-p'>234-9876-5400 <br /> 888-0123-4567 (Toll Free)</p>
                    </div>

                    <div className="location-box">
                        <div className='FaFax h1-font'>
                            <h1><FaFax/></h1>
                        </div>
                        <h1 className='location-h1'>fax</h1>
                        <p className='location-p'>1-234-567-8900</p>
                    </div>

                    <div className="location-box">
                        <div className='MdEmail h1-font'>
                            <h1><MdEmail/></h1>
                        </div>
                        <h1 className='location-h1'>email</h1>
                        <p className='location-p'>hello@theme.coms</p>
                    </div>
                </div>

                <div className="touch-container">
                    <div className="touch-box">
                        <h1 className='touch-h1'>get in touch</h1>
                        <h3 className="touch-h3">We can ensure reliability, low cost fares and most <br /> important, with safety and comfort in mind.</h3>
                        <p className="touch-p">Etiam sit amet convallis erat - class aptent taciti sociosqu ad litora <br /> torquent per conubia! Maecenas gravida lacus. Lorem etiam sit <br /> amet convallis erat.</p>
                        <div className="icon-container">
                            <div className='icon-font1'>
                                <h1><FaFacebookF/></h1>
                            </div>
                            <div className='icon-font1'>
                                <h1><BsTwitter/></h1>
                            </div>
                            <div className='icon-font1'>
                                <h1><FiInstagram/></h1>
                            </div>
                            <div className='icon-font1'>
                                <h1>in</h1>
                            </div>
                        </div>
                    </div>


                    <div className='submit-container'>
                        <form action="">
                            <div className="email">
                                <label htmlFor="email">email</label> <br />
                                <input type="email" id='email' name='email' placeholder='enter a valid email address' required />
                            </div>

                            <div className="email">
                                <label htmlFor="name">name</label> <br />
                                <input type="text" id='name' name='name' placeholder='enter your name' required />
                            </div>

                            <div className="email">
                                <label htmlFor="message">message</label> <br />
                                <textarea name="message" id="message" cols="30" rows="5" placeholder='enter your message'></textarea>
                            </div>

                            <div className="submit">
                                <input type="submit" value={"submit"} />
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    </Layout>
  )
}

export default Contact
