/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Tab, initTE } from "tw-elements";
import { useEffect } from "react";
import { getProducts } from "@/sanity/sanity-utils";
import TabsContent from "./TabsContent";

const MyTabs = () => {
    useEffect(() => {
        initTE({ Tab });
    }, []);

    let products: any;

    (async () => {
        products = await getProducts();
    })();

    return (
        <div className="bg-gradient-to-b from-green-100 to-green-200 w-full px-16 flex flex-col text-gray-900 items-center justify-center text-center">
            <h2 className="text-6xl font-bold font-poppins">
                Nouveaux Produits
            </h2>
            <p className="opacity-95 text-lg">
                Récemment ajouté sur notre boutique en ligne
            </p>
            <div className="flex items-center justify-center w-full">
                <div className="opacity-80 bg-black my-4 h-[2px] w-16" />
            </div>
            <ul
                className="mb-3 flex flex-row border-b-0 self-stretch"
                role="tablist"
                data-te-nav-ref
            >
                <li role="presentation" className="flex-auto text-center">
                    <a
                        className="hover:bg-gray-900 hover:bg-opacity-5 rounded-t-xl hover:text-gray-950 transition-all select-none cursor-pointer my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary"
                        data-te-toggle="pill"
                        data-te-target="#tabs-home01"
                        data-te-nav-active
                        role="tab"
                        aria-controls="tabs-home01"
                        aria-selected="true"
                    >
                        &nbsp; Home&nbsp;&nbsp;&nbsp;&nbsp;
                    </a>
                </li>
                <li role="presentation" className="flex-auto text-center">
                    <a
                        className="hover:bg-gray-900 hover:bg-opacity-5 rounded-t-xl hover:text-gray-950 transition-all select-none cursor-pointer focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary"
                        data-te-toggle="pill"
                        data-te-target="#tabs-profile01"
                        role="tab"
                        aria-controls="tabs-profile01"
                        aria-selected="false"
                    >
                        Profile
                    </a>
                </li>
                <li role="presentation" className="flex-auto text-center">
                    <a
                        className="hover:bg-gray-900 hover:bg-opacity-5 rounded-t-xl hover:text-gray-950 transition-all select-none cursor-pointer my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary"
                        data-te-toggle="pill"
                        data-te-target="#tabs-messages01"
                        role="tab"
                        aria-controls="tabs-messages01"
                        aria-selected="false"
                    >
                        Messages
                    </a>
                </li>
            </ul>
            <TabsContent></TabsContent>
        </div>
    );
};

export default MyTabs;
