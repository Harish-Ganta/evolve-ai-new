'use client';

import Image from 'next/image';
import { FaLayerGroup, FaEdit, FaStar } from 'react-icons/fa';

// Data for sections
const sections = [
  {
    images: ['/images/image5.jpg', '/images/image6.jpg', '/images/image7.jpg', '/images/image8.jpg'],
    features: [
      { icon: <FaLayerGroup className="inline-block  text-indigo-500 text-2xl" />, title: 'Modern Portfolio Layouts', description: 'Build and manage an eye-catching and impressive portfolio fast and without effort.' },
      { icon: <FaEdit className="text-indigo-500 text-2xl" />, title: 'Useful Blog Layouts', description: 'Create an attractive and stunning journal to tell the world your wonderful stories.' },
      { icon: <FaStar className="text-indigo-500 text-2xl" />, title: 'Cool Features & Elements', description: 'Sandbox includes amazing features and elements to create rich and attractive pages.' }
    ]
  },
  {
    images: ['/images/image5.jpg', '/images/image6.jpg', '/images/image7.jpg', '/images/image8.jpg'],
    features: [
      { icon: <FaLayerGroup className="text-indigo-500 text-2xl" />, title: 'Customizable Components', description: 'Easily customize components to match your brand’s style and requirements.' },
      { icon: <FaEdit className="text-indigo-500 text-2xl" />, title: 'Advanced UI Elements', description: 'Enhance your pages with modern UI elements designed for a seamless experience.' },
      { icon: <FaStar className="text-indigo-500 text-2xl" />, title: 'Optimized for Performance', description: 'Fast-loading and optimized code to keep your website running smoothly.' }
    ]
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Save your time and money by <br /> choosing <span className="text-indigo-500">Sandbox</span> for your website.
        </h2>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap justify-around gap-10 text-indigo-500 font-bold text-2xl ">
          <div className="text-center">
            <p className='text-4xl text-primary'>250+</p>
            <p className="text-paraText text-sm mt-3 font-serif  font-semiBold ">UI elements</p>
          </div>
          <div className="text-center">
            <p className='text-4xl text-primary'>130+</p>
            <p className="text-paraText text-sm mt-3 font-serif  font-semiBold">Pre-made blocks</p>
          </div>
          <div className="text-center">
            <p className='text-4xl text-primary'>100+</p>
            <p className="text-paraText text-sm font-serif  font-semiBold  mt-3">Neatly coded pages</p>
          </div>
        </div>

        {/* Dynamic Sections */}
        {sections.map((section, index) => (
  <div
    key={index}
    className="mt-12 grid grid-cols-2 items-center gap-32"
  >
    {/* Image grid */}
    <div
      className={`grid grid-cols-2 gap-4 relative ${index % 2 !== 0 ? 'order-2' : 'order-1'}`}
    >
      {section.images.map((imgSrc, imgIndex) => (
        <div
          key={imgIndex}
          className={`bg-white p-2 py-8 rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer transform ${
            imgIndex % 2 === 0 ? '-translate-y-3' : 'translate-y-3'
          }`}
        >
          <Image
            src={imgSrc}
            alt={`Feature Image ${imgIndex + 1}`}
            width={400}
            height={60}
            className="rounded-md w-full"
          />
        </div>
      ))}
    </div>

    {/* Features with Icons */}
    <div
      className={`space-y-6 text-left ${index % 2 !== 0 ? 'order-1' : 'order-2'}`}
    >
      {section.features.map((feature, featIndex) => (
        <div key={featIndex} className="flex items-start justify-start space-x-4">
          <div className="inline-flex items-center justify-center p-4 bg-gray-200 rounded-full">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-headingText">
              {feature.title}
            </h3>
            <p className="text-paraText max-w-80 text-[.85rem] leading-[1.8]">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
))}

      </div>
    </section>
  );
}
