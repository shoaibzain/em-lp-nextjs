import Image from 'next/image';
import { Montserrat, Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
    weight: ['400', '500', '600', '700'], // Specify the weights you need
    subsets: ['latin'], // Specify the subsets you need
    display: 'swap', // Optional: 'swap' for better performance
});

export default function Affordable({ title, content, buttonText, backgroundColor }) {
    return (
        <section id="affordable" className={`affordable bg-black py-32 ${openSans.className}`}>
            <div className="container">
                <div className="columns-1 flex justify-center">
                    <div className="w-2/5 border-2 p-4 rounded-2xl">
                        <div className="bg-primary-gradient rounded py-10 text-center">
                            <div className="text-4xl md:text-6xl font-bold text-transparent text-stroke bg-clip-text uppercase tracking-tighter">
                                Big Ideas
                            </div>
                            <div className="text-4xl md:text-6xl font-extrabold uppercase text-white tracking-tighter">

                                Affordable
                            </div>
                            <div className="text-4xl md:text-6xl font-bold text-transparent text-stroke bg-clip-text uppercase tracking-tighter">
                                Prices !
                            </div>
                            <Image
                                src="/images/hand.png"
                                alt="Right showcase image"
                                width={86}
                                height={86}
                                className="rounded-lg object-cover mx-auto mt-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
