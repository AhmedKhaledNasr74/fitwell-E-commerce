import React from "react";
import heroPhoto from "./bg_hero.svg";
import mainCharacter from "./woman_hero.png";
import Intro from "./IntroText/Intro";
const Hero = () => {
    return (
        <div className="position-relative">
            <img src={heroPhoto} alt="Hero" className="w-100" />
            <img src={mainCharacter} alt="Hero" className="mainCharacter" />
            <Intro />
        </div>
    );
};

export default Hero;
