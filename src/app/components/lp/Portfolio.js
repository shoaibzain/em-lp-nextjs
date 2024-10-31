"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
    useEffect(() => {
        // Animate each image separately
        const images = [
          { id: "#left-image-1", x: -100, y: 0, rotation: -10 },
          { id: "#left-image-2", x: -200, y: -30, rotation: -20 },
          { id: "#left-image-3", x: -200, y: -100, rotation: -15 },
          { id: "#right-image-1", x: 100, y: 0, rotation: 10 },
          { id: "#right-image-2", x: 80, y: -30, rotation: 20 },
          { id: "#right-image-3", x: 120, y: -100, rotation: 15 },
        ];
    
        images.forEach(({ id, x, y, rotation }) => {
          gsap.to(id, {
            scrollTrigger: {
              trigger: id,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
            x,
            y,
            rotation,
          });
        });
    
        // Fade-in animation for #center_content
        gsap.to("#center_content", {
          scrollTrigger: {
            trigger: "#left-image-2",
            start: "top center", // Adjust based on when you want the fade to start
            end: "top top",
            scrub: 1,
          },
          opacity: 1, // Fade in effect
          duration: 3,
        });
      }, []);
    
    

    return (
        <div id="portfolio" className="flex min-h-screen flex-col items-center justify-center bg-black py-32 overflow-hidden">
            <div className="flex w-full">
                {/* Left showcase images */}
                <div className="w-2/4">
                    <Image
                        id="left-image-1"
                        src="/images/por-2.jpg"
                        alt="Left showcase image"
                        width={600}
                        height={1000}
                        className="rounded-2xl object-cover -z-1"
                    />
                    <Image
                        id="left-image-2"
                        src="/images/por-3.jpg"
                        alt="Left showcase image"
                        width={600}
                        height={1000}
                        className="rounded-2xl object-cover"
                    />
                    <Image
                        id="left-image-3"
                        src="/images/por-5.jpg"
                        alt="Left showcase image"
                        width={600}
                        height={1000}
                        className="rounded-2xl object-cover z-10"
                    />
                </div>

                {/* Right showcase images */}
                <div className="w-2/4 flex flex-wrap justify-end">
                    <Image
                        id="right-image-1"
                        src="/images/por-1.jpg"
                        alt="Right showcase image"
                        width={600}
                        height={1000}
                        className="rounded-2xl object-cover -z-1"
                    />
                    <Image
                        id="right-image-2"
                        src="/images/por-4.jpg"
                        alt="Right showcase image"
                        width={600}
                        height={1000}
                        className="rounded-2xl object-cover"
                    />
                    <Image
                        id="right-image-3"
                        src="/images/por-6.jpg"
                        alt="Right showcase image"
                        width={600}
                        height={1000}
                        className="rounded-2xl object-cover z-10"
                    />
                </div>
            </div>
            <div id="center_content" className="absolute opacity-0">
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="mb-6 text-base leading-tight text-white sm:text-base md:text-base">
                        Like a lion&apos;s roar echoing through <br /> the jungle, a hint of our creative<br /> minds emerges.
                    </h2>
                    <button className="group inline-flex items-center rounded-full bg-primary px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:bg-neutral-700">
                        See full Portfolio

                    </button>
                </div>
            </div>
        </div>
    );
}
