import React from 'react'
import './HomePage.css';

import NoTransitionExample from '../../Components/HomeCarusel/HomeCarusel'
import AllCourses from '../../Components/AllCourses/AllCourses';
import VerticalLinearStepper from '../../Components/Stepped/Stepped';
// import Head from '../../Components/Head/Head';


export default function HomePage() {
  return (
    <>
    <div className="homepage">
        <div className="container">
            <div className="home_box">
                <h1>Barcha kurslar bir joyda</h1>
                <h1>Dashturlashni biz bilan o'rganing</h1>
            </div>
            <div className="carusel_box">
            <NoTransitionExample/>
            <div className="carusel_text">
                <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
            </div>
            <div>
                <AllCourses/>
                <AllCourses/>
            </div>
            <div>
                <VerticalLinearStepper/>
            </div>
        </div>
        {/* <Head/> */}
    </div>
    </>
  )
}
