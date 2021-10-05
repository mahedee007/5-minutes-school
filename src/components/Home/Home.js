import React from 'react';
import { Container } from 'react-bootstrap';
import herobg from "../../images/flaticon2.png"

const Home = () => {
    return (
        <Container className="d-flex align-items-center justify-content-between ">
           <div>
           <h2 className="text-success fs-3 fw-bolder" >let's Grow Together</h2>
            <h1 className="fs-1 fw-bolder">Make Learning Fun</h1>
            <button className="btn btn-lg btn-danger mt-3" >Sign in</button>
           </div>
            <div>
                <img src = {herobg} alt="profile-img"/>
            </div>

        </Container>
    );
};

export default Home;