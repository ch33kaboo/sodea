/* eslint-disable @next/next/no-async-client-component */
"use client";
/* eslint-disable @next/next/no-img-element */
import { getAboutContent } from "@/sanity/sanity-utils";
import React from "react";

export default async function AboutContent() {
    let about = await getAboutContent();
    return (
        <div className="w-full flex flex-col gap-28 px-[160px] my-28">
            <p className="text-center text-gray-950 font-semibold">
                {about[0].description_header}
            </p>
            <div className="flex flex-row gap-9">
                <p className="text-gray-950 font-thin opacity-90">
                    {about[0].first_section.first_sub_paragraphe}
                    <br></br>
                    <br></br>
                    {about[0].first_section.second_sub_paragraphe}
                    <br></br>
                    <br></br>
                    {about[0].first_section.third_sub_paragraphe}
                </p>
                <img
                    src={`${about[0].first_section.imageUrl}`}
                    className="w-[55%] object-cover"
                    alt="about sodea"
                />
            </div>
            <div className="flex flex-row-reverse gap-9">
                <p className="text-gray-950 font-thin opacity-90">
                    {about[0].second_section.first_sub_paragraphe}
                    <br></br>
                    <br></br>
                    {about[0].second_section.second_sub_paragraphe}
                    <br></br>
                    <br></br>
                    {about[0].second_section.third_sub_paragraphe}
                </p>
                <img
                    src={`${about[0].second_section.imageUrl}`}
                    className="w-[55%] object-cover"
                    alt="about sodea"
                />
            </div>
        </div>
    );
}
