'use client'

import { useState } from 'react'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function About() {
  const [activeSection, setActiveSection] = useState(null)

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section)
  }

  return (
    <section id="whatwedo" className="about relative h-screen bg-black bg-contain bg-no-repeat bg-left bg-[url('/images/about-bg.png')]">
      <div className="w-full container px-4">
        <div className="flex w-96 mx-auto gap-12 h-screen">
          <div
            className={`w-24 bg-primary h-2/5 flex items-end justify-end cursor-pointer transition-all duration-300 ${
              activeSection === 'digital-marketing' ? 'h-[90%]' : ''
            }`}
            onClick={() => toggleSection('digital-marketing')}
          >
            <div className="transform rotate-180 writing-mode pt-4 pl-1">
              <span className="text-xl font-normal whitespace-nowrap text-white">
                Digital<br />Marketing
              </span>
            </div>
          </div>
          <div
            className={`w-24 bg-primary h-2/5 flex items-end justify-end cursor-pointer transition-all duration-300 ${
              activeSection === 'seo' ? 'h-[90%]' : ''
            }`}
            onClick={() => toggleSection('seo')}
          >
            <div className="transform rotate-180 writing-mode pt-4 pl-1">
              <span className="text-xl font-normal whitespace-nowrap text-white">
                Search Engine<br />Optimization
              </span>
            </div>
          </div>
          <div
            className={`w-24 bg-primary h-2/5 flex items-end justify-end cursor-pointer transition-all duration-300 ${
              activeSection === 'web-design' ? 'h-[90%]' : ''
            }`}
            onClick={() => toggleSection('web-design')}
          >
            <div className="transform rotate-180 writing-mode pt-4 pl-1">
              <span className="text-xl font-normal whitespace-nowrap text-white">
                Website Design<br />& Development
              </span>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center h-min top-[44%]">
          <div className={`text-8xl font-bold text-transparent text-stroke bg-clip-text uppercase tracking-tighter text-center ${openSans.className}`}>
            What We Do
          </div>
        </div>
        <div className='text_details absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-2xl text-white text-center'>
          {activeSection === 'digital-marketing' && (
            <div className='details details1 animate-fade-in'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </div>
          )}
          {activeSection === 'seo' && (
            <div className='details details2 animate-fade-in'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </div>
          )}
          {activeSection === 'web-design' && (
            <div className='details details3 animate-fade-in'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}