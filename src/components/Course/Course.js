import React from 'react';

const Course = (props) => {
    const {img,name,price,instructor,duration}= props.course;

    return (
        <div className = "col-md-6 mt-4 mb-3">
            <div className="card h-100">
                    <img src={img} alt="..."/>
                    <div className="card-body text-center">
                      <h1 className="card-title"> {name}</h1>
                      <p><span>{instructor}</span></p>
                      
                        <p>Total Duration: {duration}</p>
                        
                        <p>Course Fee : ${price}</p>
                      
                    </div>
                  </div>


            
        </div>
    );
};

export default Course;