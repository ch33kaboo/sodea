import React from "react";

export default function HeroText() {
  return (
    <div className="w-7/12 relative">
      <div
        className="bg-gray-100 flex flex-col p-7 items-start justify-center gap-3 absolute inset-0 animate-fade"
        style={{
          animationDelay: "35s",
        }}
      >
        <p className="-mb-4 ml-[2px]">SODEA</p>
        <h1 className="text-7xl font-bold font-poppins">
          Culture de l{"'"}eau
        </h1>
        <p className="opacity-75 text-2xl">filtration et irrigation.</p>
        <p className="opacity-75">
          des solutions pour les secteurs agricoles, industriels et urbains.
        </p>
        <button className="bg-green-600 rounded-full px-5 py-2 text-gray-100 font-medium uppercase shadow-xl hover:translate-y-1 hover:shadow-none transition-all mt-4">
          En Savoir plus
        </button>
      </div>
      <div
        className="bg-gray-100 flex flex-col p-7 items-start justify-center gap-3 absolute inset-0 animate-fade"
        style={{
          animationDelay: "28s",
        }}
      >
        <p className="-mb-4 ml-[2px]">SODEA</p>
        <h1 className="text-7xl font-bold font-poppins">fertilisants</h1>
        <p className="opacity-75">la solution Globale.</p>
        <button className="bg-green-600 rounded-full px-5 py-2 text-gray-100 font-medium uppercase shadow-xl hover:translate-y-1 hover:shadow-none transition-all mt-4">
          En Savoir plus
        </button>
      </div>
      <div
        className="bg-gray-100 flex flex-col p-7 items-start justify-center gap-3 absolute inset-0 animate-fade"
        style={{
          animationDelay: "21s",
        }}
      >
        <p className="-mb-4 ml-[2px]">SODEA</p>
        <h1 className="text-7xl font-bold font-poppins">
          machinisme agricoles
        </h1>
        <p className="opacity-75">
          Broyeurs, Compresseurs, Atomiseurs & Équipements.
        </p>
        <button className="bg-green-600 rounded-full px-5 py-2 text-gray-100 font-medium uppercase shadow-xl hover:translate-y-1 hover:shadow-none transition-all mt-4">
          En Savoir plus
        </button>
      </div>
      <div
        className="bg-gray-100 flex flex-col p-7 items-start justify-center gap-3 absolute inset-0 animate-fade"
        style={{
          animationDelay: "14s",
        }}
      >
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
      <div
        className="bg-gray-100 flex flex-col p-7 items-start justify-center gap-3 absolute inset-0 animate-fade"
        style={{
          animationDelay: "7s",
        }}
      >
        <p className="-mb-4 ml-[2px]">SODEA</p>
        <h1 className="text-7xl font-bold font-poppins">
          Production des plants
        </h1>
        <p className="opacity-75">
          arbres fruitiers, Oliviers et plantes maraîcheres.
        </p>
        <button className="bg-green-600 rounded-full px-5 py-2 text-gray-100 font-medium uppercase shadow-xl hover:translate-y-1 hover:shadow-none transition-all mt-4">
          En Savoir plus
        </button>
      </div>
      <div className="bg-gray-100 flex flex-col p-7 items-start justify-center gap-3 absolute inset-0 animate-fade">
        <p className="-mb-4 ml-[2px]">SODEA</p>
        <h1 className="text-5xl font-bold font-poppins">
          Travaux <br />
          hydrauliques et <br />d{"'"}environnement
        </h1>
        <p className="opacity-75"></p>
        <button className="bg-green-600 rounded-full px-5 py-2 text-gray-100 font-medium uppercase shadow-xl hover:translate-y-1 hover:shadow-none transition-all mt-4">
          En Savoir plus
        </button>
      </div>
    </div>
  );
}
