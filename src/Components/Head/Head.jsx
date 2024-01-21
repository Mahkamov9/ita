import React from 'react'
import "./Head.css";

import logo from "../../Assets/Img/ita-logo.png";

export default function Head() {
  return (
    <div className="head">
        <div className="container">
            <div className="head_box">
                <div className="head_list"><a href="#"><img className='logo' src={logo} alt="Logo" /></a></div>
                <div className="head_list head_link_box">
                    <a className='head_link' href="3">Home</a>
                    <a className='head_link' href="3">About</a>
                    <a className='head_link' href="3">Courses</a>
                    <a className='head_link' href="3">Ceryers</a>
                    <a className='head_link' href="3">Contact</a>
                </div>
                <div className="head_list">
                    <a className='head_link head_btn' href="#">Sign in</a>
                </div>
            </div>
        </div>
    </div>
  )
}
