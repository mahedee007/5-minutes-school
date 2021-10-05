import React from 'react';
import img from "../../images/flaticon1.png"

const Faq = () => {
    return (
        <section className ="container" id="faq">
        <div className="text-center">
            <h2 >Frequently Asked <span>Question</span></h2>
        </div>

       
        <div className="row align-items-center my-5 gy-5">
            <div className="col-lg-6">
                <img src={img} className="w-75 d-block mx-auto" alt=""/>

            </div>
            <div className="col-lg-6">
                <div className="accordion" id="accordionExample">

                   
                    <div className="accordion-item">
                      <h2 className="accordion-header " id="headingOne">
                        <button className="accordion-button accordion-title-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Is it worth learning JavaScript in 2020?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        
                            Yes, of course, you need to learn JavaScript because it has a lot of usage in the web developing world, and its the only language which runs on the browser. And the average salary of a JavaScript Expert is about $112,436 per year in the united states. 
                        </div>
                      </div>
                    </div>

                    
                    <div className="accordion-item my-3 border">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button accordion-title-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Is web development a dying career 2021?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Without a doubt, with the advancement of automated tools, this profession will change to adapt to present realities, but it will not go extinct. So, is web design a dying career? The answer is no
                        </div>
                      </div>
                    </div>

                    
                    <div className="accordion-item border">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button accordion-title-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Is it hard to learn digital marketing?
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Like many professions, digital marketing requires both a core set of hard skills (which can be relatively straightforward to learn) and a longer list of career attributes that might take years to master.
                        </div>
                      </div>
                    </div>

                    
                    <div className="accordion-item my-3 border">
                      <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button accordion-title-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        How long is the learning phase for Facebook ads?
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        The Facebook ads learning phase is really a important part of Facebook's ad set optimization process. It usually lasts until 50 optimization events have been generated and is reset when significant edits are made to an ad set or the ads within it..
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            </div>


    </section>
    );
};

export default Faq;