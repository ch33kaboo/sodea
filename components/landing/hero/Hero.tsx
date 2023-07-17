import React from "react";
import HeroText from "./HeroText";
import HeroImages from "./HeroImages";

const Hero = () => {
  return (
    <div className="md:h-screen flex flex-col md:flex-row w-full">
      <HeroText></HeroText>
      <HeroImages></HeroImages>
    </div>
  );
};

export default Hero;
