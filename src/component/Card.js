import React from 'react'
import '../component/card.css'
import { AiFillSignal } from "react-icons/ai";
import {IoRocketOutline} from "react-icons/io5";
import {AiOutlineSound} from "react-icons/ai";
import {RiCoinsLine} from "react-icons/ri";
import {FaHorseHead} from "react-icons/fa";
import {RiExchangeDollarLine} from "react-icons/ri";
const Card = () => {
  return (
    <div>
    <div className="icons-container">
    <div className="icon-box-1">
        <div className="anti-crisis marketing">
            <p>anti-crisis</p>
            <div className="AiFillSignal icon-font">
                <h1><AiFillSignal/></h1>
            </div>
        </div>
        <div className="startups marketing">
            <p>startups</p>
            <div className="IoRocketOutline icon-font">
                <h1><IoRocketOutline/></h1>
            </div>
        </div>
        <div className="market marketing">
            <p>marketing</p>
            <div className="AiOutlineSound icon-font">
                <h1><AiOutlineSound/></h1>
            </div>
        </div>
    </div>

    <div className="icon-box-2">
        <div className="consultations marketing">
            <p>consultations</p>
            <div className="RiCoinsLine icon-font">
                <h1><RiCoinsLine/></h1>
            </div>
        </div>
        <div className="strategy marketing">
            <p>strategy</p>
            <div className="FaHorseHead icon-font">
                <h1><FaHorseHead/></h1>
            </div>
        </div>
        <div className="investment marketing">
            <p>investment</p>
            <div className="RiExchangeDollarLine icon-font">
                <h1><RiExchangeDollarLine/></h1>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Card
