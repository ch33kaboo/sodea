/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
    return (
        <div className="px-16 pb-7 pt-10 w-full flex flex-col gap-7 bg-gray-950">
            <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col items-start justify-start gap-7">
                    <img
                        src="logo-white.png"
                        className="w-24"
                        alt="sodea logo"
                    />
                    <p className="max-w-sm text-gray-200">
                        <b className="font-semibold">SODEA Spa</b> est le pôle
                        et société de développement agricole, elle intervient
                        avec sa solution globale dans les aménagements
                        agricoles.
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start gap-5">
                    <p className="max-w-sm text-gray-300">
                        <b className="text-gray-200 font-semibold">Adresse</b> :
                        Commune Amarnas Beloualadi – Section N°04- Ilot 16- Bloc
                        Administratif « C » – Sidi-Bel-Abbès.
                    </p>
                    <p className="max-w-sm text-gray-300">
                        <b className="text-gray-200 font-semibold">Email</b> :
                        info@sodea-hasnaoui.com
                    </p>
                    <p className="max-w-sm text-gray-300">
                        <b className="text-gray-200 font-semibold">Tel</b> : 048
                        77 03 17 / 048 77 01 40
                    </p>
                </div>
                <div className="flex flex-col items-start justify-center"></div>
            </div>
            <hr className="opacity-75" />
            <div className="text-gray-200">
                Copyright © 2023 SODEA. All Right Reserved. Developed by GSH.
            </div>
        </div>
    );
}
