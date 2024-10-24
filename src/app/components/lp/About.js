import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
    weight: ['400', '500', '600', '700'], // Specify the weights you need
    subsets: ['latin'], // Specify the subsets you need
    display: 'swap', // Optional: 'swap' for better performance
});

export default function About() {
    return (
        <section id="whatwedo" className="about relative h-screen bg-black bg-contain bg-no-repeat bg-left bg-[url('/images/about-bg.png')]">
            <div className="w-full container px-4">
                <div className="flex w-96 mx-auto gap-12 h-screen">
                    <div className="w-24 bg-primary h-3/6 flex items-end justify-center">
                        <div className="transform rotate-180 writing-mode pt-4"><span className="text-base font-normal whitespace-nowrap text-white">Digital<br/>
                        Marketing</span></div>
                    </div>
                    <div className="w-24 bg-primary h-full flex items-end justify-center">
                        <div className="transform rotate-180 writing-mode pt-4"><span className="text-base font-normal whitespace-nowrap text-white">Search Engine<br />
                        Optimization</span></div>
                    </div>
                    <div className="w-24 bg-primary h-3/6 flex items-end justify-center">
                        <div className="transform rotate-180 writing-mode pt-4"><span className="text-base font-normal whitespace-nowrap text-white">Website Design<br />
                            & Development</span></div>
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center mt-40">
                    <div className={`text-8xl font-bold text-transparent text-stroke bg-clip-text uppercase tracking-tighter text-center ${openSans.className}`}>
                        What We Do
                    </div>
                </div>

            </div>
        </section>
    );
}
