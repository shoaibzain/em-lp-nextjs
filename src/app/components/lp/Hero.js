"use client";
import { useEffect } from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero h-screen flex items-center relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        aria-hidden="true"
        preload="none"
      >
        <source src="/videos/hero-background.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-1"></div>
      <div className="container relative z-2">
        <div className="columns-1">
          <div className="text-white text-center">
            <p className="text-3xl">Reach New Heights with the assistance of our</p>
            <h1 className="text-5xl leading-normal font-bold mt-5 flex flex-wrap justify-center">
              <span>Digital</span>
              <b className="bg-primary font-bold my-2 mx-2 rounded-full px-4 leading-snug transform -rotate-6">
                Marketing
              </b>
              <span>Solutions</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}