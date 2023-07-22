"use client";

import { Tab, initTE } from "tw-elements";
import { useEffect } from "react";

const MyTabs = () => {
  useEffect(() => {
    initTE({ Tab });
  }, []);

  return (
    <div className="bg-gradient-to-b from-green-100 to-green-200 w-full px-16">
      <ul
        className="mb-5 flex flex-row border-b-0"
        role="tablist"
        data-te-nav-ref
      >
        <li role="presentation" className="flex-auto text-center">
          <a
            className="hover:bg-gray-900 hover:bg-opacity-5 hover:text-gray-950 transition-all select-none cursor-pointer my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary"
            data-te-toggle="pill"
            data-te-target="#tabs-home01"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-home01"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li role="presentation" className="flex-auto text-center">
          <a
            className="hover:bg-gray-900 hover:bg-opacity-5 hover:text-gray-950 transition-all select-none cursor-pointer focus:border-transparen my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary"
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
            className="hover:bg-gray-900 hover:bg-opacity-5 hover:text-gray-950 transition-all select-none cursor-pointer my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary"
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

      <div className="mb-6">
        <div
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-home01"
          role="tabpanel"
          aria-labelledby="tabs-home-tab01"
          data-te-tab-active
        >
          Tab 1 content
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-profile01"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab01"
        >
          Tab 2 content
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-messages01"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab01"
        >
          Tab 3 content
        </div>
      </div>
    </div>
  );
};

export default MyTabs;
