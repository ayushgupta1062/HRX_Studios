import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
    const studies = [
        {
            title: "Global Fintech Expansion",
            image: "/assets/case-fintech.jpg",
            challenge: "Stagnant growth in EU markets despite heavy ad spend.",
            solution: "AI-driven audience modeling and automated localized content.",
            result: "215% Increase in qualified leads within 90 days."
        },
        {
            title: "SaaS Customer Success",
            image: "/assets/case-saas.jpg",
            challenge: "Overwhelmed support team causing high churn.",
            solution: "Deployed autonomous Level 1 support agents.",
            result: "Reduced ticket volume by 70% while raising CSAT scores."
        },
        {
            title: "Retail Giant Rebrand",
            image: "/assets/case-retail.jpg",
            challenge: "Disconnect between digital presence and physical luxury.",
            solution: "Omnichannel brand strategy powered by predictive behavior analysis.",
            result: "40% uplift in online revenue YoY."
        }
    ];

    return (
        <section id="case-studies" className="py-24 bg-[#05080f]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-accent-gold text-sm tracking-[0.2em] uppercase font-semibold">
                        Proven Impact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                        Transformation Stories
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {studies.map((study, index) => (
                        <div
                            key={index}
                            className="bg-[#0B1121] border border-white/5 overflow-hidden group hover:border-accent-gold/30 transition-all duration-500"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-accent-navy/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-accent-gold transition-colors">
                                    {study.title}
                                </h3>
                                <div className="space-y-4 mb-8">
                                    <div>
                                        <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Challenge</span>
                                        <p className="text-gray-400 text-sm mt-1">{study.challenge}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Solution</span>
                                        <p className="text-gray-400 text-sm mt-1">{study.solution}</p>
                                    </div>
                                </div>
                                <div className="py-4 border-t border-white/10 mb-6">
                                    <p className="text-white font-semibold text-lg">{study.result}</p>
                                </div>
                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 w-full border-white/10 text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/30">
                                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
