import React from 'react'
import "./AllCourses.css";

import kurs from "../../Assets/Img/kurs.png";

export default function AllCourses() {
    return (
        <>
            <div className="allcourses">
                <div className='course_card_box'>
                    <div className="couse_card">
                        <img className='course_card_img' src={kurs} alt="kurs"/>
                    </div>
                    <div className="couse_card">
                        <img className='course_card_img' src={kurs} alt="kurs"/>
                    </div>
                    <div className="couse_card">
                        <img className='course_card_img' src={kurs} alt="kurs"/>
                    </div>
                    <div className="couse_card">
                        <img className='course_card_img' src={kurs} alt="kurs"/>
                    </div>
                </div>
            </div>
        </>
    )
}
