import React from "react";

export default function HeroText() {
  return (
    <div className="bg-gray-100 w-7/12 flex flex-col p-7 items-start justify-center gap-3">
      <p className="-mb-4 ml-[2px]">SODEA</p>
      <h1 className="text-7xl font-bold font-poppins">Prestations Agricoles</h1>
      <p className="opacity-75">
        Analyse, Prestation, Travaux de sol & Conseils techniques.
      </p>
      <button className="bg-green-600 rounded-full px-5 py-2 text-gray-100 font-medium uppercase shadow-xl hover:translate-y-1 hover:shadow-none transition-all mt-4">
        En Savoir plus
      </button>
    </div>
  );
}
