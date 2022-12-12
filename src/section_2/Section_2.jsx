import React from "react";
import Card from "../component/Card";
// import {Link} from "react-router-dom";
import '../section_2/section_2.css'

function section_2(){
    return(
        <>
    <section id="section-2">
        <div className="icon-box-container container">
            <h1 className="manage-h1">We'll help manage your business</h1>
        <div>
        <Card/>
        </div>
        </div>
    </section>
        </>
    )
}
export default section_2