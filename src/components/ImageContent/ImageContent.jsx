import Image from "next/image";

export default function ResponsiveSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen p-10 bg-white">
      {/* Left Side: Single Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="">
          <Image
            src="/images/mobile.webp"
            alt="Mockup"
            width={300}
            height={400}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        <p className="text-sm text-gray-500 uppercase">Fully Responsive</p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Responsive images & texts <br /> no matter the screen size.
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Sandbox is responsive so the layout will adapt to different screen sizes that will make your website
          compatible with any device such as smartphones, tablets, and computers.
        </p>
        {/* QR Code (Placeholder) */}
        <div className="mt-6">
          <Image src="/qr-code.png" alt="QR Code" width={64} height={64} className="w-16 h-16 mx-auto md:mx-0" />
        </div>
      </div>
    </section>
  );
}
