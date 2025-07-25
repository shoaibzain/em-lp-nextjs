"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
    useEffect(() => {
        // Create a matchMedia instance
        const mm = gsap.matchMedia();

        // Desktop animations (default)
        mm.add("(min-width: 1024px)", () => {
            // Define the transform values for desktop
            const transformValues = [
                {
                    id: "#image1",
                    transform: "translate(-714.4px, 221px) rotate(-45deg)",
                },
                {
                    id: "#image2",
                    transform: "translate(714.4px, 221px) rotate(45deg)",
                },
                {
                    id: "#image3",
                    transform: "translate(-701.6px, -100px) rotate(-35deg)",
                },
                {
                    id: "#image4",
                    transform: "translate(701.6px, -100px) rotate(35deg)",
                },
                {
                    id: "#image5",
                    transform: "translate(-230.4px, -262.6px) rotate(-30deg)",
                },
                {
                    id: "#image6",
                    transform: "translate(230.4px, -262.6px) rotate(30deg)",
                },
            ];

            // Apply desktop animations
            transformValues.forEach(({ id, transform }) => {
                gsap.to(id, {
                    scrollTrigger: {
                        trigger: "#portfolio",
                        start: "top 50%",
                        end: "bottom top",
                        scrub: true,
                    },
                    transform,
                    duration: 1.5,
                });
            });
        });

        // Tablet animations
        mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
            const transformValues = [
                {
                    id: "#image1",
                    transform: "translate3d(-356px, 0px, 0px)",
                },
                {
                    id: "#image2",
                    transform: "translate3d(356px, 0px, 0px)",
                },
                {
                    id: "#image3",
                    transform: "translate3d(-668px, 0px, 0px)",
                },
                {
                    id: "#image4",
                    transform: "translate3d(668px, 0px, 0px)",
                },
                {
                    id: "#image5",
                    transform: "translate3d(-356px, 0px, 0px)",
                },
                {
                    id: "#image6",
                    transform: "translate3d(356px, 0px, 0px)",
                },
            ];

            transformValues.forEach(({ id, transform }) => {
                gsap.to(id, {
                    scrollTrigger: {
                        trigger: "#portfolio",
                        start: "top 50%",
                        end: "bottom top",
                        scrub: true,
                    },
                    transform,
                    duration: 1.5,
                });
            });
        });

        // Mobile animations
        mm.add("(max-width: 767px)", () => {
            const transformValues = [
                {
                    id: "#image1",
                    transform: "translate3d(175.5px, 0px, 0px)",
                },
                {
                    id: "#image3",
                    transform: "translate3d(-292.093px, 0px, 0px)",
                },
                {
                    id: "#image4",
                    transform: "translate3d(265.474px, 0px, 0px)",
                },
                {
                    id: "#image6",
                    transform: "translate(-350.5px, 0px)",
                },
            ];

            transformValues.forEach(({ id, transform }) => {
                gsap.to(id, {
                    scrollTrigger: {
                        trigger: "#portfolio",
                        start: "top 50%",
                        end: "bottom top",
                        scrub: true,
                    },
                    transform,
                    duration: 1.5,
                });
            });
        });

        // Text and button animations (common for all devices)
        gsap.to("#textportfolio", {
            scrollTrigger: {
                trigger: "#portfolio",
                start: "top 0px",
                end: "15% top",
                scrub: true,
            },
            opacity: 1,
            duration: 1.5,
        });

        gsap.to("#btnportfolio", {
            scrollTrigger: {
                trigger: "#portfolio",
                start: "top 0%",
                end: "20% top",
                scrub: true,
            },
            transform: "translate(0px, 0px)",
            duration: 1.5,
        });

        return () => {
            // Cleanup
            mm.revert();
        };
    }, []);

    return (
        <section id="portfolio" className="relative w-full text-center pt-20 sm:pt-36 bg-[#dfdfdf]">
            <div className="px-6 sm:px-12 xl:px-20 ">
                <div className="absolute z-50 w-full left-2/4 top-2/4 pt-32 xl:pt-0 xl:pb-56 transform translate-x-[-50%] translate-y-[-50%]">
                    <div id="textportfolio" className="relative inline-block m-auto float-none z-10 opacity-0">
                        <div className="mb-6 leading-tight text-black text-2xl font-glancyr">
                            As the first light breaks<br />
                            the silence, a glimpse of our<br />
                            creativity unfolds.
                        </div>
                        <a
                            href="#"
                            download
                            className="group relative inline-flex items-center overflow-hidden rounded-full px-6 py-2 text-base font-semibold transition-colors focus:outline-none"
                        >
                            {/* Expanding Circle Effect */}
                            <span className="absolute left-0 top-0 h-full w-10 bg-three transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-secondary rounded-full z-0"></span>

                            {/* Text Content */}
                            <span className="relative z-10">
                                <span className="inline-block relative z-10">D</span>ownload Profile
                            </span>
                        </a>


                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-10 xl:gap-y-0 gap-x-10 relative w-full -mb-44 z-10 ">
                    <div id="image1" className="overflow-hidden rounded-3xl will-change-transform">
                        <Image
                            src="/images/por-2.jpg"
                            alt="First showcase image"
                            width={600}
                            height={448}
                            className="w-full transition-opacity duration-300"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg=="
                        />
                    </div>
                    <div id="image2" className="overflow-hidden rounded-3xl will-change-transform hidden sm:block">
                        <Image
                            src="/images/por-6.jpg"
                            alt="Left showcase image"
                            width={600}
                            height={448}
                            className="w-full"
                        />
                    </div>
                    <div id="image3" className="overflow-hidden rounded-3xl will-change-transform -left-2/4 relative sm:static">
                        <Image
                            src="/images/por-3.jpg"
                            alt="Left showcase image"
                            width={600}
                            height={448}
                            className="w-full"
                        />
                    </div>
                    <div id="image4" className="overflow-hidden rounded-3xl will-change-transform -right-2/4 relative sm:static">
                        <Image
                            src="/images/por-4.jpg"
                            alt="Left showcase image"
                            width={600}
                            height={448}
                            className="w-full"
                        />
                    </div>
                    <div id="image5" className="overflow-hidden rounded-3xl will-change-transform hidden sm:block">
                        <Image
                            src="/images/por-5.jpg"
                            alt="Left showcase image"
                            width={600}
                            height={448}
                            className="w-full"
                        />
                    </div>
                    <div id="image6" className="overflow-hidden rounded-3xl will-change-transform	">
                        <Image
                            src="/images/por-1.jpg"
                            alt="Left showcase image"
                            width={600}
                            height={448}
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}