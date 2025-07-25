'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Packages from "./Packages";

gsap.registerPlugin(ScrollTrigger);

export default function PackageReveal() {
  const sectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const headingRef = useRef(null);
  const packagesRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrapper = imageWrapperRef.current;
    const heading = headingRef.current;
    const packages = packagesRef.current;

    if (!section || !imageWrapper || !heading || !packages) return;

    const ctx = gsap.context(() => {
      // Zoom only the image
      gsap.fromTo(
        imageWrapper,
        { scale: 1 },
        {
          scale: 2.7,
          transformOrigin: "center center",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=1200",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        }
      );

      // Fade out the heading
      gsap.fromTo(
        heading,
        { opacity: 1 },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=480",
            scrub: true,
          },
        }
      );

      // Reveal the Packages component
      ScrollTrigger.create({
        trigger: section,
        start: "center center",
        end: "+=1200",
        onUpdate: (self) => {
          if (self.progress > 0.95) {
            gsap.to(packages, { autoAlpha: 1, duration: 0.5 });
          } else {
            gsap.to(packages, { autoAlpha: 0, duration: 0.5 });
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full  h-screen  "
    >
      {/* This wrapper will zoom */}
      <div
        ref={imageWrapperRef}
        className="absolute inset-0 w-full lg:h-full md:h-full h-[60%] z-0"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/images/mobile.png"
          alt="Zoomed image"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h2
            ref={headingRef}
            className="text-white text-4xl md:text-7xl font-extralight font-glancyr drop-shadow-lg -mb-10 text-center"
          >
            Dive Into<br /> Strategic<br /> Success
          </h2>
        </div>
      </div>

      {/* This stays fixed and doesn't zoom */}
      <div
        ref={packagesRef}
        className="absolute inset-0 z-10 opacity-0 "
      >
        <Packages />
      </div>
    </section>
  );
}
