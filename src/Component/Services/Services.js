import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div>
            <div className='services'>
        <div className='mb-5'>
        <h2 className="title my-5 text-center">My Service</h2>
        </div>
        <div className="max-width">
           <div className="service-content">
            <div className="container">
                <div className="row ">
                    <div className="card1  col-sm-12  col-md-4">
                        <div className="box mr-2">
                            <i className="fas fa-paint-brush"></i>
                            <h3>Web Design</h3>
                            <h5>At HATERMUTHOYBAZAR.COM. HaterMuthoy  is the first ever appbased home delivery company since 2020 with higher rating of 9.</h5>
                        </div>
                    </div>
                    <div className=" card1 col-sm-12 col-md-4">
                        <div className="box">
                            <i className="fas fa-paint-brush"></i>
                            <h3>Bloger</h3>
                            <h5>Blog is comming soon . </h5>
                        </div>
                    </div>
                    <div className=" card1 col-sm-12 col-md-4">
                        <div className="box">
                            <i className="fas fa-code"></i>
                            <h3>Web Development</h3>
                            <h5>At NEXTIVE SOLUTION. Nextive Solution is a Website and App Developer Company in Bangladesh that offers web design, software development etc</h5>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Services;