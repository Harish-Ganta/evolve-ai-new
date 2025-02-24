'use client';

import Image from 'next/image';

export default function FeatureShowcase() {
  return (
    <section className="py-16 bg-gray-50 flex flex-col items-center">
      {/* Main Content Box */}
      <div className="relative w-full max-w-4xl bg-white shadow-xl rounded-lg p-6 md:p-8">
        
        {/* Main Image Section with Content */}
        <div className="relative">
          <Image
            src="/images/DE1.JPG"
            alt="Feature Showcase"
            width={800}
            height={400}
            className="rounded-lg w-full h-auto"
          />
          
          {/* Content Over Image */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white p-4">
            <h2 className="text-lg md:text-xl font-bold"></h2>
            <p className="text-xs md:text-sm text-gray-200 mt-2"></p>
          </div>

          {/* Corporate Plan Card */}
          <div className="absolute top-1/2 right-0 md:right-[-100px] transform -translate-y-1/2 bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-md md:text-lg font-semibold text-gray-700">$49/month</h3>
            <p className="text-xs md:text-sm text-gray-500">Corporate Plan</p>
          </div>
        </div>        

        {/* Floating Elements (Features) */}
        <div className="absolute top-[10rem] left-[-80px] md:left-[-100px] hidden md:block bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm font-medium text-gray-600">Feature A</p>
          <p className="text-xs text-gray-500">Description of feature A.</p>
        </div>

        <div className="absolute bottom-[10rem] left-[-80px] md:left-[-100px] hidden md:block bg-white p-4 rounded-lg shadow-md">
          <p className="text-sm font-medium text-gray-600">Feature B</p>
          <p className="text-xs text-gray-500">Description of feature B.</p>
        </div>
      </div>

      {/* Icons Gallery */}
      <div className="mt-12 w-full max-w-7xl px-4">
        <h2 className="text-lg md:text-xl font-bold text-center mb-4"></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {companyData.map((company, index) => (
            <CompanyCard key={index} logo={company.logo} name={company.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyCard({ logo, name }) {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg">
      <Image src={logo} alt={name} width={80} height={80} className="rounded-full w-16 h-16 md:w-20 md:h-20" />
      <h4 className="mt-2 text-sm md:text-md font-semibold text-gray-700">{name}</h4>
    </div>
  );
}

// Example company data
const companyData = [
  { logo: "/images/fi1@2X.PNG", name: "Company One" },
  { logo: "/images/fi2@2X.PNG", name: "Company Two" },
  { logo: "/images/fi3@2X.PNG", name: "Company Three" },
  { logo: "/images/fi4@2X.PNG", name: "Company Four" },
  { logo: "/images/fi5@2X.PNG", name: "Company Five" },
  { logo: "/images/fi6@2X.PNG", name: "Company Six" },
  { logo: "/images/fi7@2X.PNG", name: "Company Seven" },
  { logo: "/images/fi8@2X.PNG", name: "Company Eight" },
  { logo: "/images/fi9@2X.PNG", name: "Company Nine" },
  { logo: "/images/fi10@2X.PNG", name: "Company Ten" },
];
