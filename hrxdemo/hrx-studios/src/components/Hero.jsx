import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const scrollToCTA = () => {
        const element = document.getElementById('cta');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/hero-bg.jpg"
                    alt="Abstract dark premium texture"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-accent-navy/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-accent-navy via-transparent to-accent-navy/40"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="max-w-4xl">
                    <div className="mb-6">
                        <span className="px-4 py-2 border border-accent-gold/30 rounded-full text-accent-gold text-sm tracking-widest uppercase bg-accent-gold/5 backdrop-blur-sm">
                            Strategic AI Partner
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                        The Last <span className="gold-gradient-text">Growth Partner</span> <br />
                        You'll Ever Need.
                    </h1>

                    <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10">
                        We orchestrate complete enterprise transformations by fusing high-level strategy with execution-ready artificial intelligence. Move beyond traditional agencies.
                    </p>

                    <div>
                        <button
                            onClick={scrollToCTA}
                            className="inline-flex items-center justify-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-white text-accent-navy hover:bg-gray-100 text-lg px-8 py-6 rounded-sm font-semibold tracking-wide group"
                        >
                            Explore Our Transformation
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
