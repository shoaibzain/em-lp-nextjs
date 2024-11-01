import Header from './components/lp/layout/Header';
import Footer from './components/lp/layout/Footer';
import { Montserrat } from 'next/font/google';
import "./globals.css";

export const metadata = {
    title: 'Express Marketing',
    description: 'A simple landing page built with Next.js',
};

// Configure Montserrat font
const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Specify the weights you need
    subsets: ['latin'], // Specify the subsets you need
    display: 'swap', // Optional: 'swap' for better performance
});


export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={montserrat.className}>
                <Header />

                {children}

                <Footer
                    title="Let's Collaborate!"
                    subtitle="Grow Your Business with Us!"
                    content="Our unique process will help you define your ideal customer and goals, so we know who to target with your website and online marketing."
                />
            </body>
        </html>
    );
}
