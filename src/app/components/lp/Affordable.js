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
                scrub: true,
            },
        });

        // Define the animations for the timeline
        tl.to("#chakra-image", {
            transform: "translate(0px, 1px) scale(5)",
            duration: 1.5,
        });

        tl.to("#packages", {
            visibility: "inherit",
            transform: "scale(0.9)",
            duration: 1.5,
        }, ">");

        return () => {
            // Cleanup GSAP animations
            tl.kill();
        };
    }, []);

    return (
        <section id="affordable" className="affordable overflow-hidden relative">
            <div id="how-much-does-it-cost" className="h-screen flex justify-center relative bg-black z-10">
                <div className=" w-full container">
                    <div
                        id="packages"
                        className="absolute z-20 flex items-center flex-col gap-14 w-full left-0 bottom-0 h-full justify-center"
                    >
                       <Packages/>
                    </div>
                    <div className="mt-10 flex items-center justify-center">
                        <Image
                            id="chakra-image"
                            src="/images/affordable.png"
                            alt="First showcase image"
                            width={1400}
                            height={1021}
                            className="origin-center z-10"
                            style={{ width: '908px', height: '614px' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
