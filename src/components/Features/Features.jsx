'use client';

import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';

const demoData = [
  {
    id: 1,
    title: 'Demo Layout XVIII',
    features: ['Network, Marketing', '3D illustrations', 'SVG icons', 'Gradient image'],
    image1: '/images/image1.jpg',
    image2: '/images/image2.jpg',
  },
  {
    id: 2,
    title: 'Demo Layout XIX',
    features: ['E-commerce', 'Custom animations', 'Responsive design', 'Dark mode'],
    image1: '/images/image1.jpg',
    image2: '/images/image2.jpg',
  },
  {
    id: 3,
    title: 'Demo Layout XX',
    features: ['Minimalist UI', 'Lightweight components', 'High performance', 'SEO optimized'],
    image1: '/images/image1.jpg',
    image2: '/images/image2.jpg',
  }
];

export default function DemoSection() {
  return (
    <section className="pb-10">
      <div className="container mx-auto px-4 font-[THICCCBOI, sans-serif]">
        <h2 className="text-[3.5rem] font-bold text-indigo-500 text-center">21</h2>
        <p className="text-[2.5rem] font-semibold text-gray-800 mt-2 text-center max-w-[600px] mx-auto leading-tight">
          Functional, impressive and rich demos to start with
        </p>
        <p className="text-sm text-gray-500 uppercase mt-4 text-center">NEW DEMOS</p>

        {demoData.map((demo, demoIndex) => (
          <div key={demo.id} className="bg-bgSoftPrimary py-8 mt-8 flex flex-wrap justify-center gap-8 items-center z-0 relative">
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 items-center md:items-stretch">
              {[demo.image1, demo.image2].map((image, index) => (
                <div
                  key={index}
                  className={`relative w-[250px] h-[350px] md:w-[300px] md:h-[400px] flex items-start overflow-hidden group cursor-pointer 
                 `}
                >
                  <Image
                    src={image}
                    alt={`Demo Layout ${demo.id} - ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className={`rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105  ${index % 2 === 0 ? 'mt-10' : 'mt-[-40px]'}`}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">See the full demo</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 md:p-8 rounded-lg text-center md:text-left z-20">
              <h3 className="text-[30px] font-bold text-headingText">{demo.title}</h3>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-700">
                {demo.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheck className='text-primary pr-2 text-lg'/> {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-indigo-500 text-white py-3 px-6 rounded-full text-sm font-semibold hover:bg-indigo-600 flex items-center justify-center">
                See more
              </button>
            </div>
          </div>
        ))}

        <div className="mt-12 text-center">
          <button className="bg-indigo-500 text-[16px] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-indigo-600">
            See All Demos
          </button>
        </div>
      </div>
    </section>
  );
}
