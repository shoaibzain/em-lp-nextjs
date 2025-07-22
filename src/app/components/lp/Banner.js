"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"


const leftColumnImages = [
  { id: 1, src: "/por-1.png", alt: "Image 1" },
  { id: 2, src: "/two.avif", alt: "Image 2" },
  { id: 3, src: "/three.avif", alt: "Image 3" },
  { id: 4, src: "/four.avif", alt: "Image 4" },
  { id: 5, src: "/one.avif", alt: "Image 1" },
]

const middleColumnImages = [
  { id: 1, src: "/five.avif", alt: "Image 6" },
  { id: 2, src: "/six.avif", alt: "Image 7" },
  { id: 3, src: "/seven.avif", alt: "Image 8" },
  { id: 4, src: "/eight.avif", alt: "Image 9" },
  { id: 5, src: "/five.avif", alt: "Image 15" },
]

const rightColumnImages = [
  { id: 1, src: "/nine.avif", alt: "Image 11" },
  { id: 2, src: "/ten.avif", alt: "Image 12" },
  { id: 3, src: "/eleven.avif", alt: "Image 13" },
  { id: 4, src: "/twelve.avif", alt: "Image 14" },
  { id: 5, src: "/nine.avif", alt: "Image 15" },
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

export default function ScrollingBanner() {
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
        className="relative overflow-hidden rounded-lg mb-3 w-full md:w-[185px] min-h-[200px]"
      >
        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
      </div>
    )
  }

  return (
    <section className="relative w-full bg-[#00172d] text-white overflow-hidden min-h-screen">
     
       

        <div className="relative w-full md:w-[40%] h-[60vh] md:h-screen order-2 md:order-2 md:pl-[10px]">
          {/* Mobile-specific gradient overlays */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#00172d] via-[#00172d]/80 z-20 pointer-events-none md:hidden" />
          <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#00172d] via-[#00172d]/80 z-20 pointer-events-none md:hidden" />

          <div className="grid grid-cols-3 gap-2 md:gap-3 h-full w-full overflow-hidden">
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
        </div>
    </section>
  )
}
