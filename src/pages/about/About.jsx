import React from 'react'
import Layout from '../../layout/Layout'
import "../about/about.css";

const About = () => {
  return (
    <>
    <Layout>
      <div className="about-section">
        <div className="container about-container">
          <div className="about-box">
            <h1 className='about-h1'>about us</h1>
            <p className='about-p'>Duis aute irure dolor in reprehenderit in voluptate <br /> velit esse cillum dolore eu fugiat nulla pariatur. <br /> Excepteur sint occaecat cupidatat non proident, <br /> sunt in culpa qui officia deserunt mollit anim.</p>
            <p className='about-p1'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore.</p>
            <p className='about-p2'>image from <span>freepik</span></p>
            <div className="about-button">
              <button>book a call</button>
            </div>
          </div>

          <div className="div-box"></div>
        </div>

        <div className="container about-container2">
          <div className="project-box">
            <h1 className='project-h1'><span>01</span> Development</h1>
            <p className='project-p'>Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit</p>
          </div>

          <div className="project-box">
            <h1 className='project-h1'><span>02</span> Design projects</h1>
            <p className='project-p'>Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit</p>
          </div>

          <div className="project-box">
            <h1 className='project-h1'><span>03</span> New materials</h1>
            <p className='project-p'>Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit</p>
          </div>
        </div>
      </div>
    </Layout>
   
    </>
  )
}

export default About
