"use client"
import Image from 'next/image';

export default function Portfolio() {
    return (
        <div id="portfolio" className="flex min-h-screen flex-col items-center justify-center bg-black py-32 overflow-hidden">
            <div className="grid gap-8 md:grid-cols-3 w-full">
                <div className="-ml-40">
                    <Image
                        src="/images/left-portfolio.png"
                        alt="Left showcase image"
                        width={600}
                        height={1000}
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="mb-6 text-base leading-tight text-white sm:text-base md:text-base">
                        Like a lion&apos;s roar echoing through <br/> the jungle, a hint of our creative<br/> minds emerges.
                    </h2>
                    <button className="group inline-flex items-center rounded-full bg-primary px-4 py-2 text-base font-normal text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black">
                        See full Portfolio
                        
                    </button>
                </div>
                <div className="-mr-40 flex justify-end">
                    <Image
                        src="/images/right-portfolio.png"
                        alt="Right showcase image"
                        width={600}
                        height={1000}
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
