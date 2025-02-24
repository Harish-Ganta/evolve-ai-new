"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 relative">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 flex items-center"
        >
          Sandbox
          <span className="ml-1 text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.26 5.82 22 7 14.14l-5-4.87 6.91-1.01z"
              />
            </svg>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 ">
          {[
            "Demos",
            "Pages",
            "Projects",
            "Blog",
            "Blocks",
            "Documentation",
          ].map((item) => (
            <div key={item} className="">
              <button
                onClick={() => toggleMenu(item)}
                className="flex items-center text-paraText hover:text-blue-500 transition"
              >
                {item}
                <FaChevronDown className="ml-1 text-sm" />
              </button>

              {openMenu === item && (
                <div className="absolute left-0 w-full bg-white rounded-lg shadow-lg mt-2 transition-all duration-500 ease-in-out z-50">
                  <div className="grid grid-cols-3 gap-6 p-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {item} Option 1
                      </h4>
                      <ul className="space-y-1 text-sm text-paraText">
                        <li>
                          <Link href="#">Feature 1</Link>
                        </li>
                        <li>
                          <Link href="#">Feature 2</Link>
                        </li>
                        <li>
                          <Link href="#">Feature 3</Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-paraText mb-2">
                        {item} Option 2
                      </h4>
                      <ul className="space-y-1 text-sm text-paraText">
                        <li>
                          <Link href="#">Option 1</Link>
                        </li>
                        <li>
                          <Link href="#">Option 2</Link>
                        </li>
                        <li>
                          <Link href="#">Option 3</Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-paraText mb-2">
                        {item} Option 3
                      </h4>
                      <ul className="space-y-1 text-sm text-paraText">
                        <li>
                          <Link href="#">Resource 1</Link>
                        </li>
                        <li>
                          <Link href="#">Resource 2</Link>
                        </li>
                        <li>
                          <Link href="#">Resource 3</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          {/* <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
            <i className="fas fa-info-circle text-gray-700"></i>
          </button> */}

          <button className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;