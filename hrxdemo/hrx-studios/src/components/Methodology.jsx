import React from 'react';
import { Search, Cpu, Rocket, BarChart2, TrendingUp } from 'lucide-react';

const Methodology = () => {
    const steps = [
        {
            icon: Search,
            title: "Discovery & Audit",
            description: "We deconstruct your current architecture to identify hidden opportunities and bottlenecks."
        },
        {
            icon: Cpu,
            title: "AI Strategy",
            description: "Architecting a bespoke intelligence layer that integrates seamlessly with your goals."
        },
        {
            icon: Rocket,
            title: "Implementation",
            description: "Deploying custom agents and marketing frameworks with military-grade precision."
        },
        {
            icon: BarChart2,
            title: "Optimization",
            description: "Relentless data analysis to refine performance and maximize ROI in real-time."
        },
        {
            icon: TrendingUp,
            title: "Continuous Growth",
            description: "Scaling your success through iterative innovation and future-proofing."
        }
    ];

    return (
        <section id="methodology" className="py-24 bg-[#080C17]">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <span className="text-accent-gold text-sm tracking-[0.2em] uppercase font-semibold">
                        Our Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                        The Transformation Engine
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center group">
                                <div className="w-24 h-24 rounded-full bg-[#0B1121] border border-white/10 flex items-center justify-center mb-8 relative z-10 transition-colors duration-500 group-hover:border-accent-gold/50 shadow-2xl">
                                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                                        <step.icon className="w-8 h-8 text-white group-hover:text-accent-gold transition-colors duration-500" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
