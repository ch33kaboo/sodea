/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

export default function HeroImages() {
  return (
    <div className="w-full relative">
      <img
        className="absolute inset-0 w-full h-full object-cover animate-fade"
        style={{
          animationDelay: "35s",
        }}
        src={"/heroSectionAssets/slide-culture-eau.jpg"}
        alt="culture-eau"
      />
      <img
        className="absolute inset-0 w-full h-full object-cover animate-fade"
        style={{
          animationDelay: "28s",
        }}
        src={"/heroSectionAssets/slide-fertilisants.jpg"}
        alt="fertilisants"
      />
      <img
        className="absolute inset-0 w-full h-full object-cover animate-fade"
        style={{
          animationDelay: "21s",
        }}
        src={"/heroSectionAssets/slide-machinisme-agricole.jpg"}
        alt="machinisme-agricoles"
      />
      <img
        className="absolute inset-0 w-full h-full object-cover animate-fade"
        style={{
          animationDelay: "14s",
        }}
        src={"/heroSectionAssets/slide-prestations-agricoles.jpg"}
        alt="prestations-agricoles"
      />
      <img
        className="absolute inset-0 w-full h-full object-cover animate-fade"
        style={{
          animationDelay: "7s",
        }}
        src={"/heroSectionAssets/slide-production-plants.jpg"}
        alt="production-plants"
      />
      <img
        className="absolute inset-0 w-full h-full object-cover animate-fade"
        src={"/heroSectionAssets/slide-travaux-hydrauliques-environnement.jpg"}
        alt="travaux-hydrauliques-environnement"
      />
    </div>
  );
}
