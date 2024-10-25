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

        { name: "Starter", price: "999", platforms: "Facebook & Instagram", package: "Basic Social Media Package", service: "web-design" },
        { name: "Express", price: "1,599", platforms: "Facebook & Instagram", package: "Social Media Growth Accelerator", service: "web-design" },
        { name: "Business", price: "2,999", platforms: "Facebook, Instagram, Linkedin & Twitter", package: "Comprehensive Social Media Marketing Package", service: "web-design" },
        { name: "Enterprise", price: "3,599", platforms: "Facebook, Instagram, Linkedin & Twitter", package: "Advance Social Media Marketing Package", service: "web-design" },

        { name: "Starter", price: "999", platforms: "Facebook & Instagram", package: "Basic Social Media Package", service: "app-dev" },
        { name: "Express", price: "1,599", platforms: "Facebook & Instagram", package: "Social Media Growth Accelerator", service: "app-dev" },
        { name: "Business", price: "2,999", platforms: "Facebook, Instagram, Linkedin & Twitter", package: "Comprehensive Social Media Marketing Package", service: "app-dev" },


        { name: "Starter", price: "999", platforms: "Facebook & Instagram", package: "Basic Social Media Package", service: "seo" },
        { name: "Express", price: "1,599", platforms: "Facebook & Instagram", package: "Social Media Growth Accelerator", service: "seo" },
        { name: "Business", price: "2,999", platforms: "Facebook, Instagram, Linkedin & Twitter", package: "Comprehensive Social Media Marketing Package", service: "seo" },


        { name: "Starter", price: "999", platforms: "Facebook & Instagram", package: "Basic Social Media Package", service: "marketing" },
        { name: "Express", price: "1,599", platforms: "Facebook & Instagram", package: "Social Media Growth Accelerator", service: "marketing" },
        { name: "Business", price: "2,999", platforms: "Facebook, Instagram, Linkedin & Twitter", package: "Comprehensive Social Media Marketing Package", service: "marketing" },


        { name: "Starter", price: "999", platforms: "Facebook & Instagram", package: "Basic branding Package", service: "branding" },
        { name: "Express", price: "1,599", platforms: "Facebook & Instagram", package: "Social Media Growth Accelerator", service: "branding" },
        { name: "Business", price: "2,999", platforms: "Facebook, Instagram, Linkedin & Twitter", package: "Comprehensive Social Media Marketing Package", service: "branding" },

    ];

    return (
        <section id="packages" className="packages bg-primary-gradient py-32">
            <div className="flex mx-auto w-full container px-4">
                <div className="w-full flex flex-col justify-center">
                    <h2 className="text-9xl tracking-widest	 font-black text-white mb-0 text-center">
                        PACKAGES
                    </h2>
                </div>
            </div>
            <div className="w-3/4 container mx-auto px-4 -mt-8">

                {services.map((service) => (
                    <div key={service.id} className={activeTab === service.id ? "block" : "hidden"}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3    ">
                            {packages
                                .filter((pkg) => pkg.service === service.id) // Filter packages based on service
                                .map((pkg, index) => (
                                    <div key={index} className="bg-slate-50/20 backdrop-blur-lg text-white rounded-3xl border-2 py-3 px-4 flex flex-wrap content-between">
                                        <div className="w-full">
                                            <h3 className="text-4xl font-bold mb-2">{pkg.name}</h3>
                                            <p className="text-6xl font-thin mb-2"><span>{pkg.price}</span> <sup className="text-3xl font-bold -top-6">AED</sup></p>
                                            <p className="mb-4 font-semibold">AED Billed Monthly</p>
                                            <p className="mb-0 font-semibold">Platforms:</p>
                                            <p className="mb-4">{pkg.platforms}</p>
                                            <p className="text-lg mb-4 font-semibold">{pkg.package}</p>
                                        </div>
                                        <div className="text-center w-full mt-5">
                                            <button className="group rounded-full bg-primary px-2 py-1 text-base font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-0 focus:bg-neutral-700 focus:ring-offset-2 focus:ring-offset-neutral-700">
                                                Get Started
                                            </button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}

                <div className="flex flex-wrap gap-4 mt-14 justify-center w-10/12 mx-auto">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            className={`transition ease-in-out delay-150 px-2 py-1 rounded-xl border-2 text-lg duration-300 ${activeTab === service.id ? "bg-white" : "bg-transparent text-white hover:bg-white  hover:text-black"
                                }`}
                            onClick={() => setActiveTab(service.id)}
                        >
                            {service.name}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
