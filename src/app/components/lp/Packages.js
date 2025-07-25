"use client"
import { useState } from "react"

export default function Packages() {

    const [activeTab, setActiveTab] = useState("social-media")

    const services = [
        { id: "social-media", name: "Social Media Marketing" },
        { id: "web-design", name: "Website Design & Development" },
        { id: "app-dev", name: "App Development" },
        { id: "seo", name: "Search Engine Optimization" },
        { id: "marketing", name: "Marketing & Advertising" },
        { id: "branding", name: "Branding & Designing" },
    ]

    const packages = [
        { name: "Starter", price: "999", platforms: "Facebook & Instagram", package: "Basic Social Media Package", service: "social-media" },
        { name: "Express", price: "1,599", platforms: "Facebook & Instagram", package: "Social Media Growth Accelerator", service: "social-media" },
        { name: "Business", price: "2,999", platforms: "Facebook, Instagram, Linkedin & Twitter", package: "Comprehensive Social Media Marketing Package", service: "social-media" },
        { name: "Business", price: "2,999", platforms: "Facebook, Instagram, Linkedin & Twitter", package: "Comprehensive Social Media Marketing Package", service: "social-media" },

        { name: "Enterprise", price: "3,599", platforms: "Facebook, Instagram, Linkedin & Twitter", package: "Advance Social Media Marketing Package", service: "web-design" },
        { name: "Express", price: "1,599", platforms: "Facebook & Instagram", package: "Social Media Growth Accelerator", service: "web-design" },
        { name: "Business", price: "2,999", platforms: "Facebook, Instagram, Linkedin & Twitter", package: "Comprehensive Social Media Marketing Package", service: "web-design" },

        { name: "Starter", price: "999", platforms: "Facebook & Instagram", package: "Basic Social Media Package", service: "app-dev" },
        { name: "Express", price: "1,599", platforms: "Facebook & Instagram", package: "Social Media Growth Accelerator", service: "app-dev" },
        { name: "Business", price: "2,999", platforms: "Facebook, Instagram, Linkedin & Twitter", package: "Comprehensive Social Media Marketing Package", service: "app-dev" },


        { name: "Enterprise", price: "3,599", platforms: "Facebook, Instagram, Linkedin & Twitter", package: "Advance Social Media Marketing Package", service: "seo" },
        { name: "Express", price: "1,599", platforms: "Facebook & Instagram", package: "Social Media Growth Accelerator", service: "seo" },
        { name: "Business", price: "2,999", platforms: "Facebook, Instagram, Linkedin & Twitter", package: "Comprehensive Social Media Marketing Package", service: "seo" },


        { name: "Starter", price: "999", platforms: "Facebook & Instagram", package: "Basic Social Media Package", service: "marketing" },
        { name: "Express", price: "1,599", platforms: "Facebook & Instagram", package: "Social Media Growth Accelerator", service: "marketing" },
        { name: "Business", price: "2,999", platforms: "Facebook, Instagram, Linkedin & Twitter", package: "Comprehensive Social Media Marketing Package", service: "marketing" },


        { name: "Enterprise", price: "999", platforms: "Facebook & Instagram", package: "Basic branding Package", service: "branding" },
        { name: "Express", price: "1,599", platforms: "Facebook & Instagram", package: "Social Media Growth Accelerator", service: "branding" },
        { name: "Business", price: "2,999", platforms: "Facebook, Instagram, Linkedin & Twitter", package: "Comprehensive Social Media Marketing Package", service: "branding" },

    ];

    return (
        <div className="w-full box-content" style={{
            background: 'linear-gradient(90deg, rgba(4, 83, 98, 1) 36%, rgba(13, 106, 123, 1) 61%, rgba(14, 109, 127, 1) 100%)',
            minHeight: '100vh',
            color: 'white',
            padding: '20px',
        }}>


            <div className="lg:w-4/5 md:w-4/5  mx-auto sm:px-4 md:mt-2 mt-0 lg:mt-2 lg:mb-16 md:scale-[0.9]  lg:scale-[0.9]">
                {/* <h2 className="text-5xl md:text-7xl lg:text-9xl mb-2 sm:-mb-6 tracking-widest font-black text-white text-center">
                    PACKAGES
                </h2> */}


                <div className="flex flex-wrap gap-4 lg:mb-10 mb-5 justify-center lg:w-10/12 mx-auto">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            className={`transition ease-in-out delay-150 px-2 py-0 rounded-xl border-2 text-xs sm:text-lg duration-300 ${activeTab === service.id ? "bg-secondary border-secondary" : "bg-transparent text-white hover:bg-secondary hover:border-secondary  hover:text-white"
                                }`}
                            onClick={() => setActiveTab(service.id)}
                        >
                            {service.name}
                        </button>
                    ))}
                </div>


                {services.map((service) => (
                    <div key={service.id} className= {activeTab === service.id ? "block" : "hidden" }  >
                        <div className="webkit-box sm:grid sm:grid-cols-2 md::grid-cols-4 lg:grid-cols-4 gap-3 overflow-auto box-content ">
                            {packages
                                .filter((pkg) => pkg.service === service.id) // Filter packages based on service
                                .map((pkg, index) => (
                                    <div key={index} className="w-80 sm:w-auto  bg-slate-50/20 backdrop-blur-lg text-white rounded-3xl border-2 py-3 px-4 flex flex-wrap content-between">
                                        <div className="w-full">
                                            <h3 className="text-4xl font-bold mb-2">{pkg.name}</h3>
                                            <p className="text-6xl font-thin mb-2"><span>{pkg.price}</span> <sup className="text-3xl font-bold -top-6">AED</sup></p>
                                            <p className="mb-4 font-semibold">AED Billed Monthly</p>
                                            <p className="mb-0 font-semibold">Platforms:</p>
                                            <p className="mb-4">{pkg.platforms}</p>
                                            <p className="text-lg mb-4 font-semibold">{pkg.package}</p>
                                        </div>
                                        <div className="text-center w-full mt-5">
                                            {/* <button className="group rounded-full bg-primary px-2 py-1 text-base font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-0 focus:bg-neutral-700 focus:ring-offset-2 focus:ring-offset-neutral-700">
                                                Get Started
                                            </button> */}
                                            <a
                                                href="#"
                                                download
                                                className="group relative inline-flex items-center overflow-hidden rounded-full px-6 py-2 text-base  font-semibold transition-colors focus:outline-none"
                                            >
                                                {/* Expanding Circle Effect */}
                                                <span className="absolute left-0 top-0 h-full w-10 bg-three transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-secondary rounded-full z-0"></span>

                                                {/* Text Content */}
                                                <span className="relative z-10 ">
                                                    <span className="inline-block relative z-10 ">Get</span> Started
                                                </span>
                                            </a>


                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}

                <div className="flex flex-col  items-center  mx-auto mt-5 lg:mt-10 md:mt-10">
                    <h2 className="text-4xl font-extralight font-glancyr lg:text-[45px] text-[30px]">Not sure what plans suits your business?</h2>
                    <a
                        href="#"
                        download
                        className="group relative inline-flex items-center overflow-hidden rounded-full mt-5 px-6 py-2 text-base text-xl  font-semibold transition-colors focus:outline-none"
                    >
                        {/* Expanding Circle Effect */}
                        <span className="absolute left-0 top-0 h-full w-11 bg-three transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-secondary rounded-full z-0"></span>

                        {/* Text Content */}
                        <span className="relative z-10 ">
                            <span className="inline-block relative z-10 ">Let’s </span> jump on a call
                        </span>
                    </a>
                </div>

            </div>
        </div>
    );
}
