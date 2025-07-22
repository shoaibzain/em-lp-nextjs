import Header from './components/lp/layout/Header';
import { Montserrat } from 'next/font/google';
import "./globals.css";

export const metadata = {
    title: 'G12 Digital - Landing Page',
    description: 'G12 Digital - Landing Page',
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
            </body>
        </html>
    );
}
