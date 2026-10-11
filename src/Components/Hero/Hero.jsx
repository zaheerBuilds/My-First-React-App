import React from "react";
import './Hero.css';


const Hero = () => {
    return(
        <div id="hero">
            <h1 className="brandName">zaheerBuilds</h1>
            <p className="brandDesc">
                Founded by Zaheer, our compnay is dedicated to crafting high-performace software solutions.
                We turn complex problems into simple, elegant code.
            </p>
            <div className="btnsDiv">
                <button className="btnContact"> Contact Us</button>
                <button className="btnStory">Our Story</button>
            </div>
        </div>
    )
}

export default Hero;