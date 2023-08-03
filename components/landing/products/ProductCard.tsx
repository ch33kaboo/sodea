// @ts-nocheck
/* eslint-disable @next/next/no-img-element */

import React from "react";

export default function ProductCard({ title, description, imgUrl }) {
    return (
        <div className="card w-96 bg-base-100 bg-opacity-20 text-gray-950 shadow-xl">
            <figure>
                <img
                    className="object-cover w-full h-56"
                    src={imgUrl}
                    alt="Product"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}
