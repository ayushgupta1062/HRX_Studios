import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
    const navigate = useNavigate();

    return (
        <section id="cta" className="py-32 bg-accent-gold relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    Ready for Strategic <br /> AI Transformation?
                </h2>
                <p className="text-white/80 text-xl max-w-2xl mx-auto mb-10 font-medium">
                    We accept a limited number of enterprise partners each quarter to ensure maximum attention and impact.
                </p>
                <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center justify-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-white text-accent-gold hover:bg-gray-100 text-lg px-10 py-8 rounded-sm font-bold tracking-wide shadow-2xl"
                >
                    Schedule Strategic Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                </button>
            </div>
        </section>
    );
};

export default CTA;
