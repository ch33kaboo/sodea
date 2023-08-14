/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function Banner() {
    return (
        <div className="h-48 bg-gray-300 w-full flex flex-row items-center justify-between overflow-hidden">
            <img
                src="fruits/apple.png"
                className="w-64 -ml-28 rotate-12 opacity-90"
                alt="fruit"
            />
            <div className="flex flex-col items-center justify-center gap-3">
                <h4 className="text-4xl font-semibold text-gray-950">
                    Qui Sommes–Nous ?
                </h4>
                <div className="text-gray-800 flex flex-row gap-3">
                    <Link href="/">
                        <p>Accueil</p>
                    </Link>{" "}
                    / <p className="text-green-700">Qui Sommes–Nous ?</p>
                </div>
            </div>
            <img
                src="fruits/strawberry.png"
                className="w-64 -mr-28 -rotate-12 opacity-90"
                alt="fruit"
            />
        </div>
    );
}
