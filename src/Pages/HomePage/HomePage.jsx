import React from 'react'
import './HomePage.css';

import NoTransitionExample from '../../Components/HomeCarusel/HomeCarusel'
import AllCourses from '../../Components/AllCourses/AllCourses';
import VerticalLinearStepper from '../../Components/Stepped/Stepped';
// import Head from '../../Components/Head/Head';
import ddd from "../../Assets/Img/coding-language.png";
import aaa from "../../Assets/Img/arrow-down.png";

export default function HomePage() {
    return (
        <>
            <div className="homepage">
                <div className="container">
                    <div className="home_box">
                        <h1 className='home_title'>Barcha kurslar bir joyda. <span className='dasturlash'>Dasturlash</span>ni biz bilan o'rganing !</h1>
                        <img className='home_img' src={ddd} alt="" />
                    </div>
                    <div className="carusel_box">
                        <NoTransitionExample />
                        <div className="carusel_text">
                            <h1 className='carusel_right_title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab mollitia voluptatum quisquam obcaecati laboriosam, in exercitationem similique rem explicabo esse?</h1>
                        </div>
                    </div>
                    <div>
                        <h1 className='course_title'>Kurslar</h1>
                        <AllCourses />
                        <AllCourses />
                    </div>
                    <div>
                        <VerticalLinearStepper />
                    </div>
                </div>
                {/* <Head/> */}
            </div>
        </>
    )
}

