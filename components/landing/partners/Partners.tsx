// /* eslint-disable @next/next/no-img-element */
// // @ts-nocheck
// "use client";
// import React, { useEffect, useRef } from "react";
// import classes from "./Partners.module.css";

// export default function Partners() {
//   const logosSlideRef = useRef(null);

//   useEffect(() => {
//     const logosSlide = logosSlideRef.current;
//     const logos = logosSlide.children;
//     let logoWidth = logos[0].offsetWidth;
//     let currentLogo = 0;

//     const slide = () => {
//       if (currentLogo >= logos.length - 1) {
//         currentLogo = 0;
//         logosSlide.style.transform = `translateX(0)`;
//       } else {
//         currentLogo++;
//         logosSlide.style.transform = `translateX(-${
//           currentLogo * logoWidth
//         }px)`;
//       }
//     };

//     const intervalId = setInterval(slide, 2000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="bg-gradient-to-b from-green-200 to-green-300 w-full px-24 text-gray-900 flex flex-col items-center justify-center text-center py-16">
//       <h2 className="text-6xl font-bold font-poppins">Nos Partenaires</h2>
//       <p className="opacity-95 text-lg">
//         Parmi les leaders mondiaux dans leurs domaines
//       </p>
//       <section className={classes.container}>
//         <div className={`${classes.logosSlide} my-8`} ref={logosSlideRef}>
//           <img
//             src="partnersLogos/brand_8.png"
//             alt="sodea partner"
//             className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all hover:grayscale-0 cursor-pointer grayscale"
//           />
//           <img
//             src="partnersLogos/brand_1.png"
//             alt="sodea partner"
//             className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all hover:grayscale-0 cursor-pointer grayscale"
//           />
//           <img
//             src="partnersLogos/brand_2.png"
//             alt="sodea partner"
//             className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all hover:grayscale-0 cursor-pointer grayscale"
//           />
//           <img
//             src="partnersLogos/brand_3.png"
//             alt="sodea partner"
//             className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all hover:grayscale-0 cursor-pointer grayscale"
//           />
//           <img
//             src="partnersLogos/brand_4.png"
//             alt="sodea partner"
//             className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all hover:grayscale-0 cursor-pointer grayscale"
//           />
//           <img
//             src="partnersLogos/brand_5.png"
//             alt="sodea partner"
//             className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all hover:grayscale-0 cursor-pointer grayscale"
//           />
//           <img
//             src="partnersLogos/brand_6.png"
//             alt="sodea partner"
//             className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all hover:grayscale-0 cursor-pointer grayscale"
//           />
//           <img
//             src="partnersLogos/brand_7.png"
//             alt="sodea partner"
//             className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all hover:grayscale-0 cursor-pointer grayscale"
//           />
//           <img
//             src="partnersLogos/brand_9.png"
//             alt="sodea partner"
//             className="w-96 opacity-70 hover:opacity-100 hover:scale-105 transition-all hover:grayscale-0 cursor-pointer grayscale"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }
