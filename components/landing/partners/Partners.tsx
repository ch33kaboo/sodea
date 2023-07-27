/* eslint-disable @next/next/no-img-element */
// @ts-ignore
"use client";
import Slider from "react-infinite-logo-slider";

const Component = () => {
  return (
    <div className="bg-gradient-to-b from-green-200 to-green-100 w-full px-20 text-gray-900 flex flex-col items-center justify-center text-center py-16">
      <h2 className="text-6xl font-bold font-poppins">Nos Partenaires</h2>
      <p className="opacity-95 text-lg">
        Parmi les leaders mondiaux dans leurs domaines
      </p>
      <div className="flex items-center justify-center w-full">
        <div className="opacity-80 bg-black my-2 h-[2px] w-16" />
      </div>
      <div className="my-12 w-full overflow-hidden">
        <Slider
          width="250px"
          duration={45}
          blurBorders={true}
          blurBoderColor={"#D0FADE"}
        >
          <Slider.Slide>
            <img
              src="partnersLogos/brand_1.png"
              alt="sodea partner"
              className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="partnersLogos/brand_2.png"
              alt="sodea partner"
              className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="partnersLogos/brand_3.png"
              alt="sodea partner"
              className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="partnersLogos/brand_4.png"
              alt="sodea partner"
              className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="partnersLogos/brand_5.png"
              alt="sodea partner"
              className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="partnersLogos/brand_6.png"
              alt="sodea partner"
              className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="partnersLogos/brand_7.png"
              alt="sodea partner"
              className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="partnersLogos/brand_8.png"
              alt="sodea partner"
              className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
          </Slider.Slide>
          <Slider.Slide>
            <img
              src="partnersLogos/brand_9.png"
              alt="sodea partner"
              className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
          </Slider.Slide>
        </Slider>
      </div>
    </div>
  );
};

export default Component;
