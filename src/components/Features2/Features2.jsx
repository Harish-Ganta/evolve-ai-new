"use client";

import Image from 'next/image';
import { FaLayerGroup, FaEdit, FaStar } from 'react-icons/fa';

const sections = [
  {
    images: ['/images/image5.jpg', '/images/image6.jpg', '/images/image7.jpg', '/images/image8.jpg'],
    features: [
      {
        icon: <FaLayerGroup className="inline-block text-primary text-xl" />,
        title: 'Modern Portfolio Layouts',
        description: 'Build and manage an eye-catching and impressive portfolio fast and without effort.'
      },
      {
        icon: <FaEdit className="text-primary text-xl" />,
        title: 'Useful Blog Layouts',
        description: 'Create an attractive and stunning journal to tell the world your wonderful stories.'
      },
      {
        icon: <FaStar className="text-primary text-xl" />,
        title: 'Cool Features & Elements',
        description: 'Sandbox includes amazing features and elements to create rich and attractive pages.'
      }
    ]
  },
  {
    images: ['/images/image5.jpg', '/images/image6.jpg', '/images/image7.jpg', '/images/image8.jpg'],
    features: [
      {
        icon: <FaLayerGroup className="text-primary text-xl" />,
        title: 'Customizable Components',
        description: 'Easily customize components to match your brand’s style and requirements.'
      },
      {
        icon: <FaEdit className="text-primary text-xl" />,
        title: 'Advanced UI Elements',
        description: 'Enhance your pages with modern UI elements designed for a seamless experience.'
      },
      {
        icon: <FaStar className="text-primary text-xl" />,
        title: 'Optimized for Performance',
        description: 'Fast-loading and optimized code to keep your website running smoothly.'
      }
    ]
  }
];

export default function FeaturesSection() {
  return (
    <section className="relative py-16 bg-[#F2F3FB] overflow-hidden">
      {/* Curved / Wave Background */}
      <div className="absolute inset-0 top-0 -z-10">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 320"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,208C384,213,480,171,576,149.3C672,128,768,128,864,160C960,192,1056,256,1152,245.3C1248,235,1344,149,1392,106.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl text-center">
        {/* Heading */}
        <h2 className="text-[3rem] mx-auto font-thicccboi leading-tight text-headingText font-bold">
          Save your time and money by choosing <span className='text-primary'>Sandbox</span> for your website.
        </h2>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-indigo-500">
          {[
            { count: '250+', label: 'UI elements' },
            { count: '130+', label: 'Pre-made blocks' },
            { count: '100+', label: 'Neatly coded pages' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-5xl font-bold text-primary">{stat.count}</p>
              <p className="mt-3 text-lg text-paraText">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mt-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            {/* Image grid */}
            <div className={`grid grid-cols-2 gap-4 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              {section.images.map((imgSrc, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`bg-white p-2 rounded-lg shadow-md transition-transform hover:scale-105 ${{
                    true: '-translate-y-2',
                    false: 'translate-y-2'
                  }[imgIndex % 2 === 0]}`}
                >
                  <Image
                    src={imgSrc}
                    alt={`Feature Image ${imgIndex + 1}`}
                    width={400}
                    height={300}
                    className="rounded-md w-full h-auto"
                  />
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-6">
              {section.features.map((feature, featIndex) => (
                <div key={featIndex} className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-200 rounded-full">
                    {feature.icon}
                  </div>
                  <div className='text-left md:max-w-sm'>
                    <h3 className="text-xl font-bold text-headingText">{feature.title}</h3>
                    <p className="mt-2 text-[18px] text-paraText">
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
