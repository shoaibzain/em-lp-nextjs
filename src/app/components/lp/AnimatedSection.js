"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Open_Sans } from 'next/font/google';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Packages from './Packages';

gsap.registerPlugin(ScrollTrigger);

const openSans = Open_Sans({
    weight: ['400', '500', '600', '700'], // Specify the weights you need
    subsets: ['latin'], // Specify the subsets you need
    display: 'swap', // Optional: 'swap' for better performance
});

export default function AnimatedSection() {

    useEffect(() => {
        const affordableTl = gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                pin: true,
                trigger: "#affordable-box",
                start: "50% 50%",
                endTrigger: "#affordable",
                end: "bottom 50%",

            },
        });
        affordableTl.to("#affordable-box", {
            // Applying both translate and scale transformations
            transform: "translate(0px, 1px) scale(5, 5)",
            duration: 3, // Adjust duration as necessary
            endTrigger: "#affordable-content",
        });
        affordableTl.to("#affordable-content", {
            opacity: 0, // Fade out the content
            duration: 3, // Match duration or adjust as necessary
        }, "<");

        // Show the packages after the affordable content fades out
        affordableTl.to("#packages", {
            transform: "translate(0px, 0px)", // Reset transform
            opacity: 1, // Make it visible
            visibility: "inherit", // Change visibility to inherit
            duration: 1, // Duration for the visibility transition
        }, ">"); // Use ">" to start after the previous animation finishes

        // Cleanup function to kill the ScrollTrigger instance when the component unmounts
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <section
            id="affordable"
            className={`affordable bg-black py-32 overflow-hidden relative ${openSans.className}`}
        >
            <div className="flex justify-center">
                <div
                    className="transition-all duration-300 cursor-pointer w-2/4 md:w-4/5 lg:w-3/5 xl:w-2/5"
                >
                    <div id="affordable-box" className="border-2 p-4 rounded-2xl">
                        <div className="bg-primary-gradient rounded py-10 text-center origin-center">
                            <div id="affordable-content" >
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

            </div>
              <Packages />
        </section>
    );
}
