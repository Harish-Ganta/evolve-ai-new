'use client';

import Image from 'next/image';

export default function Last() {
  return (
    <section className="bg-gray-50 py-16 text-center flex flex-col items-center">
      {/* Logo (Optional) */}
      <div className="mb-4">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
      </div>

      {/* Title & Description */}
      <h1 className="text-2xl md:text-4xl font-bold text-headingText">
        Think unique and be creative. <br />
        <span className="text-gray-700">Make a difference with Sandbox.</span>
      </h1>
      <p className="mt-4 text-headingText max-w-2xl">
        Everything you need to create your next unique and professional website, including impressive and ready-made blocks and pages.
      </p>

      {/* Button */}
      <a href="#" className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-indigo-500 transition">
        Buy Sandbox
      </a>

      {/* Images Overlapping */}
      <div className="relative mt-12 w-full max-w-4xl flex justify-center">
        {/* Left Image */}
        <div className="absolute left-[-10%] top-10 hidden md:block">
          <Image src="/images/image1.jpg" alt="Left" width={280} height={180} className="rounded-lg shadow-lg" />
        </div>

        {/* Center Image */}
        <div className="relative z-10">
          <Image src="/images/image2.jpg" alt="Center" width={400} height={250} className="rounded-lg shadow-2xl" />
        </div>

        {/* Right Image */}
        <div className="absolute right-[-10%] top-10 hidden md:block">
          <Image src="/images/image1.jpg" alt="Right" width={280} height={180} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}
