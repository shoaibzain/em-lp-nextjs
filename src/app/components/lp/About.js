export default function About() {
    return (
        <section id="whatwedo" className="about h-screen bg-black bg-contain bg-no-repeat bg-left bg-[url('/images/about-bg.png')]">
            <div className="flex mx-auto w-full container px-4">
                <div className="columns-1  flex items-center justify-center w-full">
                    <div className="w-96 h-32 relative">
                        <div className="absolute bottom-0 left-0 w-24 h-72 bg-primary flex items-end ">
                            <div className="transform -rotate-90 pl-12 pb-12"><span className="text-base font-normal whitespace-nowrap text-white">Website Design<br />
                                & Development</span></div>
                        </div>
                        <div className="absolute bottom-0 left-32 w-24 h-80 bg-primary flex items-end ">
                            <div className="transform -rotate-90 pl-12 pb-12"><span className="text-base font-normal whitespace-nowrap text-white">Website Design<br />
                                & </span></div>
                        </div>
                        <div className="absolute bottom-0 left-64 w-24 h-96 bg-primary flex items-end ">
                            <div className="transform -rotate-90 pl-12 pb-12"><span className="text-base font-normal whitespace-nowrap text-white">Website Design<br />
                                & Development</span></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
