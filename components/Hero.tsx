/* eslint-disable @next/next/no-img-element */
"use client";

const images = [
  "/heroSectionAssets/slide-culture-eau.jpg",
  "/heroSectionAssets/slide-fertilisants.jpg",
  "/heroSectionAssets/slide-machinisme-agricole.jpg",
  "/heroSectionAssets/slide-prestations-agricoles.jpg",
  "/heroSectionAssets/slide-production-plants.jpg",
  "/heroSectionAssets/slide-travaux-hydrauliques-environnement.jpg",
];
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [topImageOpacity, setTopImageOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTopImageOpacity(1);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    setImageIndex((prevImageIndex) => (prevImageIndex + 1) % images.length);
    setTopImageOpacity(0);
  };

  return (
    <div className="md:h-screen flex flex-col md:flex-row w-full">
      <div className="bg-gray-100 w-7/12 flex flex-col p-7 items-start justify-center gap-3">
        <p className="-mb-4 ml-[2px]">SODEA</p>
        <h1 className="text-7xl font-bold font-poppins">
          Prestations Agricoles
        </h1>
        <p className="opacity-75">
          Analyse, Prestation, Travaux de sol & Conseils techniques.
        </p>
        <button className="bg-green-600 rounded-full px-5 py-2 text-gray-100 font-medium uppercase shadow-xl hover:translate-y-1 hover:shadow-none transition-all mt-4">
          En Savoir plus
        </button>
      </div>
      <div className="w-full relative">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={images[(imageIndex + 1) % images.length]}
          alt="culture-eau"
          style={{
            width: "100%",
            position: "absolute",
            opacity: topImageOpacity,
            transition: "opacity 1s ease-in-out",
          }}
          onTransitionEnd={handleTransitionEnd}
        />
      </div>
    </div>
  );
};

export default Hero;
