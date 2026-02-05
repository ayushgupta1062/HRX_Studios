import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyUs = () => {
    const benefits = [
        {
            title: "Strategic Depth",
            description: "We don’t just execute; we think. Every action is tied to a larger business objective."
        },
        {
            title: "AI-First Approach",
            description: "Native to the AI revolution, we leverage tools others are just learning about."
        },
        {
            title: "Results Obsession",
            description: "We measure success in revenue and growth, not vanity metrics."
        },
        {
            title: "Partnership Mentality",
            description: "We act as an extension of your C-suite, invested in your long-term win."
        }
    ];

    return (
        <section id="why-us" className="py-24 bg-white text-accent-navy">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Why HRX Studios?
                        </h2>
                        <p className="text-lg text-gray-600 mb-12 font-light leading-relaxed">
                            In a crowded market of generalists, we stand apart as specialists in transformation. We blend the creative soul of a studio with the analytical rigor of a consultancy.
                        </p>

                        <div className="grid gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-accent-navy shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">{benefit.title}</h4>
                                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column (Stats) */}
                    <div className="bg-gray-100 p-12 rounded-lg">
                        <h3 className="text-2xl font-bold mb-12 text-center">
                            Impact by the Numbers
                        </h3>
                        <div className="space-y-12">
                            <div className="text-center border-b border-gray-300 pb-8 last:border-0 last:pb-0">
                                <div className="text-5xl md:text-6xl font-bold text-accent-navy mb-2">50+</div>
                                <div className="text-gray-500 font-medium uppercase tracking-widest text-sm">Enterprise Transformations</div>
                            </div>
                            <div className="text-center border-b border-gray-300 pb-8 last:border-0 last:pb-0">
                                <div className="text-5xl md:text-6xl font-bold text-accent-navy mb-2">3.5x</div>
                                <div className="text-gray-500 font-medium uppercase tracking-widest text-sm">Average ROI</div>
                            </div>
                            <div className="text-center border-b border-gray-300 pb-8 last:border-0 last:pb-0">
                                <div className="text-5xl md:text-6xl font-bold text-accent-navy mb-2">$200M+</div>
                                <div className="text-gray-500 font-medium uppercase tracking-widest text-sm">Client Revenue Generated</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
