import React from 'react';
import logo from '../images/banner2.jpg'
import './Banner.css'

const Banner = () => {
    
    return (
        <div>
            <div className='banner' style={{background: `url(${logo}) center no-repeat`}}>
            <div className="max-width">
                <div className="banner-content">
                    <div className="text-1">Hello, My Name Is </div>
                    <div className="text-2">Mithu Vowmick</div>
                    <div className="text-3">And I'm a Web <span>Developer</span></div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;