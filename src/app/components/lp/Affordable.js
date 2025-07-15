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
        // Create a matchMedia instance for responsive animations
        const mm = gsap.matchMedia();

        // Initial states
        gsap.set("#packages", {
            visibility: "hidden",
            opacity: 0,
            scale: 0,
            y: 0,
            willChange: "transform, opacity"
        });

        gsap.set("#chakra-image", {
            scale: 1,
            willChange: "transform",
            transformOrigin: '50% 50%'
        });

        gsap.set("#chakra-content", {
            scale: 1,
            opacity: 1,
            willChange: "transform, opacity",
            transformOrigin: '50% 50%'
        });

        // Desktop & Tablet Animations (> 768px)
        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#how-much-does-it-cost",
                    start: "top top",
                    end: "+=1200",
                    pin: true,
                    pinSpacing: true,
                    scrub: 0.5,
                    snap: {
                        snapTo: [0, 0.5, 1],
                        duration: { min: 0.1, max: 0.5 },
                        ease: "power1.inOut"
                    }
                },
            });

            tl.addLabel('start')
                .to("#chakra-image", {
                    scale: 4.5,
                    duration: 1,
                    ease: "power3.inOut"
                })
                .to("#chakra-content", {
                    scale: 2.5,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.inOut"
                }, ">-0.8")
                .set("#packages", {
                    visibility: "visible"
                })
                .to("#packages", {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out"
                }, ">-0.3")
                .addLabel('end');
        });

        // Mobile Animations (< 768px)
        mm.add("(max-width: 767px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#how-much-does-it-cost",
                    start: "top top",
                    end: "+=800",
                    pin: true,
                    pinSpacing: true,
                    scrub: 0.3,
                    snap: {
                        snapTo: [0, 0.5, 1],
                        duration: { min: 0.1, max: 0.3 },
                        ease: "power1.inOut"
                    }
                },
            });

            tl.addLabel('start')
                .to("#chakra-image", {
                    scale: 3,
                    duration: 0.8,
                    ease: "power3.inOut"
                })
                .to("#chakra-content", {
                    scale: 2,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.inOut"
                }, ">-0.6")
                .set("#packages", {
                    visibility: "visible"
                })
                .to("#packages", {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out"
                }, ">-0.2")
                .addLabel('end');
        });

        return () => {
            mm.revert();
        };
    }, []);

    return (
        <section id="affordable" className="affordable z-0 relative">
            <div id="how-much-does-it-cost" className="min-h-screen flex items-center justify-center relative bg-black z-10 overflow-hidden">
                <div className="w-full container relative">
                    <div
                        id="packages"
                        className="absolute z-20 flex items-center flex-col gap-14 w-full inset-0 justify-center"
                    >
                        <Packages />
                    </div>
                    <div className="flex items-center justify-center relative">
                        <div id="chakra-image" className={`w-full md:w-4/5 lg:w-3/5 xl:w-2/5 border-2 p-4 rounded-2xl ${openSans.className}`}>
                            <div className="bg-primary-gradient rounded py-48 sm:py-10 text-center">
                                <div id="chakra-content" className="transform-gpu">
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
