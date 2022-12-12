import React from "react";
import {Link} from "react-router-dom"
import '../section/Section.css'
function section(){
    return(
        <>
    <section id="section-1">
        <div className="container section-container">
            <div className="link-container">
                <ul className="project-links">
                    <li className="project-link"><Link to="#">what we do</Link></li>
                    <li className="project-link"><Link to="#">our principles</Link></li>
                    <li className="project-link"><Link to="#">project</Link></li>
                    <li className="project-link"><Link to="#">amazing team</Link></li>
                </ul>
                <div className="button-container">
                    <button className="btn"><Link to="#">learn more</Link></button>
                </div>
            </div>
            <div className="business-container">
                <h1>The key to <br /> unlocking your <br /> business success!</h1>
                <Link to="#">image forom <span className="freepik">freepik</span></Link>
            </div>
        </div>
    </section>    
        </>
    )
}
export default section