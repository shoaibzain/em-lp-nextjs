'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Services() {
  const services = [
    { id: '01', title: 'Branding & Design', image: '/images/por-1.jpg' },
    { id: '02', title: 'Web Development', image: '/images/por-2.jpg' },
    { id: '03', title: 'Search Engine Optim', image: '/images/por-3.jpg' },
    { id: '04', title: 'Social Media Manag', image: '/images/por-4.jpg' },
    { id: '04', title: 'Performance Marketing', image: '/images/por-5.jpg' },
    { id: '04', title: 'App Development', image: '/images/por-6.jpg' },
  ];

  const [selected, setSelected] = useState(0);
  return (
    <section className="mx-auto w-full px-10 py-6">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full px-8">
          {/* Left - Services */}
          <div className="flex flex-col gap-8 justify-center">
            {services.map((service, index) => {
              const isActive = selected === index;
              return (
                <button
                  key={index}
                  onClick={() => setSelected(index)}
                  className={`flex items-center justify-between px-6 py-4 rounded-full text-left transition-all duration-300 ${isActive
                      ? 'bg-[#004D4C] text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                    }`}
                >
                  <div className="flex items-center gap-3 font-medium">
                    <span className={`text-lg ${isActive ? 'text-yellow-400' : 'text-gray-400'}`}>
                      {service.id}
                    </span>
                    <span>{service.title}</span>
                  </div>
                  <span className="text-xl">→</span>
                </button>
              );
            })}
          </div>

          {/* Right - Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={services[selected].image}
              alt={services[selected].title}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
