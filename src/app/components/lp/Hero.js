"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



const leftColumnImages = [
  { id: 1, src: "/images/por-1.jpg", alt: "Image 1" },
  { id: 2, src: "/images/por-2.jpg", alt: "Image 2" },
  { id: 3, src: "/images/por-3.jpg", alt: "Image 3" },
  { id: 4, src: "/images/por-4.jpg", alt: "Image 4" },
  { id: 5, src: "/images/por-5.jpg", alt: "Image 5" },
]

const middleColumnImages = [
  { id: 1, src: "/images/por-2.jpg", alt: "Image 6" },
  { id: 2, src: "/images/por-3.jpg", alt: "Image 7" },
  { id: 3, src: "/images/por-4.jpg", alt: "Image 8" },
  { id: 4, src: "/images/por-5.jpg", alt: "Image 9" },
  { id: 5, src: "/images/por-6.jpg", alt: "Image 10" },
]

const rightColumnImages = [
  { id: 1, src: "/images/por-3.jpg", alt: "Image 11" },
  { id: 2, src: "/images/por-4.jpg", alt: "Image 12" },
  { id: 3, src: "/images/por-5.jpg", alt: "Image 13" },
  { id: 4, src: "/images/por-6.jpg", alt: "Image 14" },
  { id: 5, src: "/images/por-1.jpg", alt: "Image 15" },
]

const getRandomHeight = () => {
  return Math.floor(Math.random() * (300 - 200 + 1)) + 200
}

const assignHeights = (images) => {
  return images.map((image) => ({
    ...image,
    height: getRandomHeight(),
  }))
}

const leftImagesWithHeight = assignHeights(leftColumnImages)
const middleImagesWithHeight = assignHeights(middleColumnImages)
const rightImagesWithHeight = assignHeights(rightColumnImages)
export default function Hero() {
  const leftColumnRef = useRef(null)
  const middleColumnRef = useRef(null)
  const rightColumnRef = useRef(null)


  useEffect(() => {
    const leftColumn = leftColumnRef.current
    const middleColumn = middleColumnRef.current
    const rightColumn = rightColumnRef.current

    if (leftColumn && middleColumn && rightColumn) {
      const leftHeight = leftColumn.scrollHeight / 2
      const middleHeight = middleColumn.scrollHeight / 2
      const rightHeight = rightColumn.scrollHeight / 2

      middleColumn.style.transform = `translateY(${-middleHeight}px)`

      let leftPosition = 0
      let middlePosition = -middleHeight
      let rightPosition = 0

      const animate = () => {
        leftPosition -= 0.7
        if (leftPosition <= -leftHeight) leftPosition = 0
        leftColumn.style.transform = `translateY(${leftPosition}px)`

        middlePosition += 0.7
        if (middlePosition >= 0) middlePosition = -middleHeight
        middleColumn.style.transform = `translateY(${middlePosition}px)`

        rightPosition -= 0.7
        if (rightPosition <= -rightHeight) rightPosition = 0
        rightColumn.style.transform = `translateY(${rightPosition}px)`

        requestAnimationFrame(animate)
      }

      const animationId = requestAnimationFrame(animate)

      return () => {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  const renderImage = (image, keyPrefix) => {
    return (
      <div
        key={`${keyPrefix}-${image.id}`}
        className="relative overflow-hidden mb-3 w-full aspect-[3/3]"
      >
        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
      </div>
    )
  }

  const containerRef = useRef(null);
  const topBlockRef = useRef(null);
  const bottomBlockRef = useRef(null);
  const spanRef = useRef(null);
  const pRef = useRef(null);
  const servicesRef = useRef(null); // for "Services"

  useEffect(() => {
    const topBlock = topBlockRef.current;
    const bottomBlock = bottomBlockRef.current;
    const span = spanRef.current;
    const p = pRef.current;
    const services = servicesRef.current;

    const chars = span.querySelectorAll(".span-char");
    const scrollDistance =
      bottomBlock.offsetTop - topBlock.offsetTop - topBlock.offsetHeight;

    const ctx = gsap.context(() => {
      // Pin top block
      ScrollTrigger.create({
        trigger: topBlock,
        start: "center center",
        end: `+=${scrollDistance}`,
        pin: topBlock,
        pinSpacing: false,
        scrub: true,
      });

      // Fade out <p>
      gsap.to(p, {
        scrollTrigger: {
          trigger: topBlock,
          start: "center center",
          end: `+=${scrollDistance * 0.4}`,
          scrub: true,
        },
        opacity: 0,
        y: -50,
        ease: "power1.out",
      });

      // Animate span letters
      gsap.to(chars, {
        scrollTrigger: {
          trigger: topBlock,
          start: "center center",
          end: `+=${scrollDistance}`,
          scrub: true,
        },
        opacity: 0,
        y: -25,
        stagger: 0.03,
        ease: "power2.out",
      });

      // Fade in bottom-block
      gsap.from(bottomBlock, {
        scrollTrigger: {
          trigger: bottomBlock,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });

      // 🌈 Smooth color transition for "Services"
      gsap.to(services, {
        scrollTrigger: {
          trigger: bottomBlock,
          start: "bottom bottom", // bottomBlock touches bottom of screen
          end: "top 55%",      // ends when it scrolls up
          scrub: true,
        },
        backgroundImage: "linear-gradient(42deg, #D6A456 0%, #AB8134 70%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mx-auto w-full px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-end rounded-[2rem] h-[60vh] bg-[#dfdfdf] p-6 md:p-10 text-black relative">
            <div className="absolute top-0 right-0 w-24 h-24">
              <Image src="/images/icon.png" alt="icon" fill className="object-cover" />
            </div>
            <h1 className="text-2xl md:text-5xl font-medium font-glancyr">
              Think Big. <br />
              Spend Small. <br />
              Grow Fast
            </h1>
          </div>

          <div
            ref={containerRef}
            className="rounded-[2rem] h-[70vh] bg-primary p-6 md:p-10 text-white relative flex flex-col justify-between"
          >
            <div ref={topBlockRef} className="top-block">
              <p ref={pRef} className="text-2xl md:text-4xl font-light font-glancyr mb-2">
                with our result oriented
              </p>
              <h2 className="text-2xl md:text-5xl font-medium font-glancyr">
                <span ref={spanRef} className="inline-block whitespace-nowrap">
                  {`Digital Marketing`.split("").map((char, i) => (
                    <span key={i} className="inline-block span-char">{char}</span>
                  ))}
                </span>
                <br />
                <span
                  ref={servicesRef}
                  className="inline-block transition-all duration-500"
                  style={{ color: "#fff" }} // initially white
                >
                  Services
                </span>
              </h2>
            </div>
            <div ref={bottomBlockRef} className="bottom-block mt-20">
              <p className="text-2xl md:text-3xl font-light font-glancyr mb-2">That Turn</p>
              <h2 className="text-2xl md:text-4xl font-medium font-glancyr">
                Business Challenges
                <br /> into Opportunities
              </h2>
            </div>

          </div>
        </div>

        {/* Right Column (Image Grid) */}
        <div className="flex flex-col gap-4 justify-between">
          <div className="grid grid-cols-3 gap-1 md:gap-2 rounded-[2rem] h-[calc(100vh-120px)] w-full overflow-hidden">
            <div className="relative overflow-hidden">
              <div ref={leftColumnRef} className="flex flex-col items-center" style={{ willChange: "transform" }}>
                {leftImagesWithHeight.map((image) => renderImage(image, "left-1"))}
                {leftImagesWithHeight.map((image) => renderImage(image, "left-2"))}
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div ref={middleColumnRef} className="flex flex-col items-center" style={{ willChange: "transform" }}>
                {middleImagesWithHeight.map((image) => renderImage(image, "middle-1"))}
                {middleImagesWithHeight.map((image) => renderImage(image, "middle-2"))}
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div ref={rightColumnRef} className="flex flex-col items-center" style={{ willChange: "transform" }}>
                {rightImagesWithHeight.map((image) => renderImage(image, "right-1"))}
                {rightImagesWithHeight.map((image) => renderImage(image, "right-2"))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 px-8">
            {/* See how we work card */}
            <div className="bg-[#959595] rounded-[2rem] p-6 md:p-8 flex flex-col justify-between min-h-[320px] text-white">
              <p className="text-lg font-normal mb-4">
                Ever wondered how
                <br />
                design magic happens?
              </p>
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-3xl font-medium font-glancyr">See how <br /> we work</h3>
                <ArrowUpRight className="w-20 h-20 p-5 bg-[#333333] rounded-[99px]" />
              </div>
            </div>

            {/* Meet our expert card */}
            <div className="bg-three   rounded-[2rem] p-6 md:p-8 flex flex-col justify-between min-h-[320px]">
              <p className="text-lg font-normal mb-4">
                Looking for design      <br />
                experts who can bring      <br />
                your vision to life?
              </p>
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-3xl font-medium font-glancyr">Meet our <br /> expert</h3>
                <ArrowUpRight className="w-20 h-20 p-5 bg-white rounded-[99px]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}