import Hero from './components/lp/Hero';
import Affordable from './components/lp/Affordable';
import About from './components/lp/About';
import Portfolio from './components/lp/Portfolio';
import AnimatedSection from './components/lp/AnimatedSection';

export default function Home() {
    return (
        <main>
            <Hero
                title="Welcome to Our Landing Page!"
                content="We offer the best solutions for your needs."
                buttonText="Learn More"
                backgroundColor="bg-green-600"
            />
            
            <About />

            <Affordable />

            <Portfolio />

        </main>
    );
}
