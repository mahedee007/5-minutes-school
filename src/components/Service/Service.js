import React from 'react';


const Service = (props) => {
    const {name, price, instructor, img, ratings, lectures, duration}= props.service;
    return (
        <div className="col-md-4 mt-4 mb-3">
                 <div className="card h-100">
                    <img src={img} alt="..."/>
                    <div className="card-body text-center">
                      <h1 className="card-title"> {name}</h1>
                      <p><span>{instructor}</span></p>
                      <p>Total Lectures: {lectures}</p>
                        <p>Total Duration: {duration}</p>
                        <p>Ratings:{ratings}</p>
                        <p>Course Fee : ${price}</p>
                      
                    </div>
                  </div>
                 </div>
    );
};

export default Service;