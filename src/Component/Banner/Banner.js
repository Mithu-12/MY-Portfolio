import React, {useState} from 'react';
import logo from '../images/Bannerbackground.jpg'
import './Banner.css'
import TypeWriter from 'typewriter-effect';

const Banner = () => {

    const [state] = useState({
            title: "Hello, ",
            title2: "My name is",
            title3: "Mithu Vowmick"
    })
    return (
        <div>
            <div className='banner' style={{background: `url(${logo}) center no-repeat`}}>
            <div className="max-width">
                <div className="banner-content">
                    <div className="text-1">{state.title} </div>
                    <div className="text-3">{state.title2}</div>
                    <div className="text-2">{state.title3}</div>
                    
                </div>
                <div className="text">
                    <TypeWriter
                    options={{autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                        'I am a web developer',
                        'I am a web deginer',
                        'I am a frelancer'
                    ],
                }}
                    />
                </div>
                <a href="https://drive.google.com/file/d/1NEBsn9ldIS6cjwGBWR-v7Ffxiqr3MP_i/view?usp=sharing" download>Download Resume<span></span></a>
            </div>
        </div>
        </div>
    );
};

export default Banner;