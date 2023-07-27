/* eslint-disable @next/next/no-img-element */
import React from "react";

const Sectors = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-start justify-around gap-2 bg-gradient-to-b from-gray-100 to-green-100 py-24 px-9">
      <div className="flex flex-col gap-4 items-center justify-center">
        <img
          src="sodeaSectorsAssets/eau.png"
          className="w-40"
          alt="sodea eau"
        />
        <p className="w-36 text-center capitalize text-lg font-medium text-gray-900">
          culture de l’eau
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <img
          src="sodeaSectorsAssets/fertilisants.png"
          className="w-40"
          alt="sodea fertilisants"
        />
        <p className="w-36 text-center capitalize text-lg font-medium text-gray-900">
          Fertilisants
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <img
          src="sodeaSectorsAssets/hydrauliques.png"
          className="w-40"
          alt="sodea hydrauliques"
        />
        <p className="w-36 text-center capitalize text-lg font-medium text-gray-900">
          Travaux hydrauliques et d’environnement
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <img
          src="sodeaSectorsAssets/machinisme.png"
          className="w-40"
          alt="sodea machinisme"
        />
        <p className="w-36 text-center capitalize text-lg font-medium text-gray-900">
          machinisme agricoles
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <img
          src="sodeaSectorsAssets/plants.png"
          className="w-40"
          alt="sodea plants"
        />
        <p className="w-36 text-center capitalize text-lg font-medium text-gray-900">
          production des plants
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <img
          src="sodeaSectorsAssets/prestations.png"
          className="w-40"
          alt="sodea prestations"
        />
        <p className="w-36 text-center capitalize text-lg font-medium text-gray-900">
          prestations agricoles
        </p>
      </div>
    </div>
  );
};

export default Sectors;
