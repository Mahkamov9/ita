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
                    <a className='head_link' href="3">Kurslar</a>
                    <a className='head_link' href="3">Ta'lim</a>
                    <a className='head_link' href="3">Haqida</a>
                    {/* <a className='head_link' href="3">O'quvchilar</a> */}
                    <a className='head_link' href="3">Bo'glanish</a>
                </div>
                <div className="head_list">
                    <a className='head_link head_btn' href="#">Ro'yhatdan o'tish</a>
                </div>
            </div>
        </div>
    </div>
  )
}
