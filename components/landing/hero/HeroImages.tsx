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

export default function HeroImages() {
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
  );
}
