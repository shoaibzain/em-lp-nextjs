"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
    useEffect(() => {
        const isIpad = window.innerWidth <= 1024 && window.innerWidth > 767; // iPad check
        const isMobile = window.innerWidth <= 767; // Mobile check

        // Define the transform values based on the device type
        const transformValues = [
            {
                id: "#image1",
                transform: isIpad
                    ? "translate3d(-356px, 0px, 0px)" // iPad transform
                    : isMobile
                        ? "translate3d(175.5px, 0px, 0px)" // Mobile transform
                        : "translate(-714.4px, 221px) rotate(-45deg)", // Desktop transform
            },
            {
                id: "#image2",
                transform: isIpad
                    ? "translate3d(356px, 0px, 0px)"
                    : isMobile
                        ? "translate3d(300px, 150px, 0px)"
                        : "translate(714.4px, 221px) rotate(45deg)",
            },
            {
                id: "#image3",
                transform: isIpad
                    ? "translate3d(-668px, 0px, 0px)"
                    : isMobile
                        ? "translate3d(-292.093px, 0px, 0px)"
                        : "translate(-701.6px, -100px) rotate(-35deg)",
            },
            {
                id: "#image4",
                transform: isIpad
                    ? "translate3d(668px, 0px, 0px)"
                    : isMobile
                        ? "translate3d(265.474px, 0px, 0px)"
                        : "translate(701.6px, -100px) rotate(35deg)",
            },
            {
                id: "#image5",
                transform: isIpad
                    ? "translate3d(-356px, 0px, 0px)"
                    : isMobile
                        ? "translate3d(-100px, -150px, 0px)"
                        : "translate(-230.4px, -262.6px) rotate(-30deg)",
            },
            {
                id: "#image6",
                transform: isIpad
                    ? "translate3d(356px, 0px, 0px)"
                    : isMobile
                        ? "translate(-175.5px, 0px)"
                        : "translate(230.4px, -262.6px) rotate(30deg)",
            },
        ];

        // Loop through the transform values and create animations
        transformValues.forEach(({ id, transform }) => {
            gsap.to(id, {
                scrollTrigger: {
                    trigger: "#portfolio",
                    start: "top 50%",
                    end: "bottom top",
                    scrub: true,
                },
                transform: transform,
                duration: 1.5,
            });
        });

        // Animation for #textportfolio
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
    }, []);
    return (
        <section id="portfolio" className="relative w-full text-center pt-20 sm:pt-36 overflow-hidden">
            <div className="px-6 sm:px-12 xl:px-20">
                <div className="absolute z-10 w-full left-2/4 top-2/4 pt-32 xl:pt-0 xl:pb-56 transform translate-x-[-50%] translate-y-[-50%]">
                    <div id="textportfolio" className="relative inline-block m-auto float-none z-10 opacity-0">
                        <div className="mb-6 leading-tight text-white text-2xl ">
                            Like a lion&apos;s roar <br />echoing through the<br /> jungle, a hint of our <br /> creativeminds emerges.
                        </div>
                        <button id="btnportfolio" className="translate-y-12 group inline-flex items-center rounded-full bg-primary px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:bg-neutral-700">
                            See full Portfolio
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-10 xl:gap-y-0 gap-x-10 relative w-full">
                    <div id="image1" className="overflow-hidden rounded-3xl will-change-transform">
                        <Image
                            src="/images/por-2.jpg"
                            alt="First showcase image"
                            width={600}
                            height={448}
                            className="w-full"
                        />
                    </div>
                    <div id="image2" className="overflow-hidden rounded-3xl will-change-transform hidden sm:block">
                        <Image
                            src="/images/por-1.jpg"
                            alt="Second showcase image"
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
                            src="/images/por-6.jpg"
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
