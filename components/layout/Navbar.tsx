/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-transparent absolute top-0 left-0 right-0 z-[9999] px-7">
      <div className="navbar-start flex flex-row gap-20 items-center justify-start">
        <div className="flex justify-center items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <img src="/logo-sodea.png" alt="sodea logo" className="h-14" />
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-gray-900 hover:text-gray-900 text-base">
                Item 1
              </a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="text-gray-900 hover:text-gray-900 text-base">
                  Parent
                </summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="text-gray-900 hover:text-gray-900 text-base">
                Item 3
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-md"></div>
          <button className="relative bg-green-600 rounded-full px-5 py-2 text-gray-100 font-medium capitalize">
            Contactez nous
          </button>
        </div>
      </div>
    </div>
  );
}
