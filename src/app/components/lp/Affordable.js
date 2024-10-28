"use client";

// import { useState } from 'react';
import Image from 'next/image';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  weight: ['400', '500', '600', '700'], // Specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
  display: 'swap', // Optional: 'swap' for better performance
});

export default function Affordable() {
  // const [activeSection, setActiveSection] = useState(null);

  // const toggleSection = (section) => {
  //   setActiveSection(activeSection === section ? null : section);
  // };
  // ${
  //   activeSection ? 'w-full' : 'w-2/5'
  // }
  // onClick={() => toggleSection('digital-marketing')}

  return (
    <section
      id="affordable"
      className={`affordable bg-black py-32 ${openSans.className}`}
    >
      <div className="container">
        <div className="flex justify-center">
          <div
            className={`border-2 p-4 rounded-2xl transition-all duration-300 cursor-pointer w-2/4 md:w-4/5 lg:w-3/5 xl:w-2/5 `}
          >
            <div className="bg-primary-gradient rounded py-10 text-center">
              <div className="text-4xl md:text-6xl font-bold text-transparent text-stroke bg-clip-text uppercase tracking-tighter">
                Big Ideas
              </div>
              <div className="text-4xl md:text-6xl font-extrabold uppercase text-white tracking-tighter">
                Affordable
              </div>
              <div className="text-4xl md:text-6xl font-bold text-transparent text-stroke bg-clip-text uppercase tracking-tighter">
                Prices !
              </div>
              <Image
                src="/images/hand.png"
                alt="Right showcase image"
                width={86}
                height={86}
                className="rounded-lg object-cover mx-auto mt-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
