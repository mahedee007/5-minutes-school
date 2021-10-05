import React from 'react';
import { Container } from 'react-bootstrap';
import herobg from "../../images/flaticon2.png"

import Courses from '../Courses/Courses';
import Faq from '../FAQ/Faq';

const Home = () => {
    return (
        <div>
        <div className="container d-flex align-items-center justify-content-between ">
           <div>
           <h2 className="text-success fs-3 fw-bolder" >let's Grow Together</h2>
            <h1 className="fs-1 fw-bolder">Make Learning Fun</h1>
            <button className="btn btn-lg btn-danger mt-3" >Sign in</button>
           </div>
            <div>
                <img src = {herobg} alt="profile-img"/>
            </div>

        </div>
        <div>
            <Faq></Faq>
        </div>
        <div className="container">
            <h1 className="text-center mt-2 mb-3">Our Popular Courses</h1>
        <Courses></Courses>
    </div>
        </div>
        
        
    );
};

export default Home;