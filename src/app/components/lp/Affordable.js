"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Open_Sans } from 'next/font/google';
import Packages from './Packages';

gsap.registerPlugin(ScrollTrigger);

const openSans = Open_Sans({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function Affordable() {
    useEffect(() => {
        // Initially set the packages element state
        gsap.set("#packages", {
            visibility: "hidden",
            transform: "scale(0, 0)",
        });

        // Create a GSAP timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#how-much-does-it-cost",
                start: "top top",
                end: "+=500",
                pin: true,
                scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                snap: {
                    snapTo: 'labels', // snap to the closest label in the timeline
                    duration:1.5, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                    delay: 0.2
                }
            },
        });

        // Define the animations for the timeline
        tl.to("#chakra-image", {
            transform: "translate(0px, 1px) scale(5)",
            duration: 1.5
        });

        // Define the animations for the timeline
        tl.to("#chakra-content", {
            transform: "translate(0px, 1px) scale(3)",
            opacity: 0,
            duration: 10
        });

        tl.to("#packages", {
            visibility: "inherit",
            transform: "scale(0.95)",
            duration: 15
        }, ">");

        return () => {
            // Cleanup GSAP animations
            tl.kill();
        };
    }, []);

    return (
        <section id="affordable" className="affordable z-0 relative">
            <div id="how-much-does-it-cost" className="h-screen flex justify-center relative bg-black z-10">
                <div className=" w-full container">
                    <div
                        id="packages"
                        className="absolute z-20 flex items-center flex-col gap-14 w-full left-0 bottom-0 h-full justify-center"
                    >
                        <Packages />
                    </div>
                    <div className="mt-10 flex items-center justify-center">
                        <div id="chakra-image" className={` w-full md:w-4/5 lg:w-3/5 xl:w-2/5 border-2 p-4 rounded-2xl ${openSans.className}`}>
                            <div className="bg-primary-gradient rounded py-48 sm:py-10 text-center !origin-top sm:origin-center">
                                <div id="chakra-content" >
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
                                        className="rounded-lg object-cover mx-auto mt-4 sm:mt-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
