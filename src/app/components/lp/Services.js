'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Services() {
  const services = [
    { id: '01', title: 'Branding & Design', image: '/images/por-1.jpg' },
    { id: '02', title: 'Web Development', image: '/images/por-2.jpg' },
    { id: '03', title: 'Search Engine Optimization', image: '/images/por-3.jpg' },
    { id: '04', title: 'Social Media Manager', image: '/images/por-4.jpg' },
    { id: '05', title: 'Performance Marketing', image: '/images/por-5.jpg' },
    { id: '06', title: 'App Development', image: '/images/por-6.jpg' },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <section className="mx-auto w-full lg:px-10 md:px-10 px-5 pt-6 pb-32">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full md:px-8 px-0 lg:px-8">

          {/* Left - Services */}
          <div className="flex flex-col gap-8 justify-center">
            {services.map((service, index) => {
              const isActive = selected === index;

              return (
                <button
                  key={index}
                  onClick={() => setSelected(index)}
                  className="relative group overflow-hidden border-2 rounded-full text-left transition-all duration-300 ease-in-out active:scale-[0.98]"
                >
                  {/* Animated background fill */}
                  <span
                    className={`absolute left-0 top-0 h-full w-10 rounded-full z-0 transition-all duration-500 ease-in-out
      ${isActive ? 'w-full bg-primary' : 'bg-[#f1f1f1] group-hover:w-full group-hover:bg-primary'}`}
                  ></span>

                  {/* Button content */}
                  <div
                    className={`relative z-10 flex items-center justify-between px-6 py-4 font-glancyr w-full ${isActive ? 'text-white' : 'text-[#777777] group-hover:text-white'
                      }`}
                  >
                    <div className="flex items-center gap-3 font-medium">
                      <span
                        className={`text-lg transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-[#777777] group-hover:text-secondary'
                          }`}
                      >
                        {service.id}
                      </span>
                      <span>{service.title}</span>
                    </div>
                    <span className="text-xl transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </div>
                </button>

              );
            })}
          </div>

          {/* Right - Image */}
          <div className="rounded-3xl overflow-hidden shadow-xl relative w-full">
            <Image
              key={services[selected].image}
              src={services[selected].image}
              alt={services[selected].title}
              width={600}
              height={400}
              className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
