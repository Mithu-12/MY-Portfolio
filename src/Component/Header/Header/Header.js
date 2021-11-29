import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    // (document).ready(function(){
    //     (window).scroll(function(){
    //         if(this.scrollY> 20){

    //         }
    //     })
    // })
    return (
        <div>
            <nav className="navbar active">
                <div className="max-width">
                    <div className="logo"><a href="#">Portfo<span style={{color: "crimson"}}>lio.</span></a></div>
                    <ul className="menu">
                        <NavLink to="/home" className="items"><li>Home</li></NavLink>
                        <NavLink to="/about" className="items"><li>About</li></NavLink>
                        <NavLink to="/services" className="items"><li>Services</li></NavLink>
                        <NavLink to="/skills" className="items"><li>Skills</li></NavLink>
                        <NavLink to="/contact" className="items"><li>Contact</li></NavLink>
                        <NavLink to="terms" className="items"><li></li></NavLink>
                        
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;