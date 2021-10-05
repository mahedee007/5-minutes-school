import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const[services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/courses.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h1 className="text-center mt-5">Our Courses</h1>

          <Container>
          <div className="row">
            {
                services.map(service => <Service key={service.key} service={service} ></Service>)
            }
            </div>
          </Container>
            
        </div>
    );
};

export default Services;