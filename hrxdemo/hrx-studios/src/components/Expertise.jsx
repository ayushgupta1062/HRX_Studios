import React from 'react';
import { Bot, BarChart, RefreshCw, Map, MessageSquare, DollarSign } from 'lucide-react';

const Expertise = () => {
    const capabilities = [
        {
            icon: Bot,
            title: "AI Automation",
            description: "Custom intelligent agents that autonomously handle complex workflows."
        },
        {
            icon: BarChart,
            title: "Performance Marketing",
            description: "Data-driven acquisition campaigns designed for high-value conversion."
        },
        {
            icon: RefreshCw,
            title: "Brand Transformation",
            description: "Repositioning legacy brands for the digital-first, AI-native era."
        },
        {
            icon: Map,
            title: "Growth Strategy",
            description: "Holistic market expansion plans backed by predictive analytics."
        },
        {
            icon: MessageSquare,
            title: "CX Automation",
            description: "Enhancing customer journeys with hyper-personalized, instant support."
        },
        {
            icon: DollarSign,
            title: "Revenue Optimization",
            description: "Identifying and capitalizing on untapped revenue streams efficiently."
        }
    ];

    return (
        <section id="expertise" className="py-24 bg-white/[0.02]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-accent-gold text-sm tracking-[0.2em] uppercase font-semibold">
                            Capabilities
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 max-w-xl">
                            Mastery Across the <br /> Digital Spectrum
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-md font-light text-right md:text-left">
                        Our expertise is not just broad—it is deep. We bring specialist-level knowledge to every vertical we touch.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((item, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-[#0B1121] border border-white/5 hover:border-accent-gold/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-gold/5"
                        >
                            <item.icon className="w-10 h-10 text-gray-500 group-hover:text-accent-gold transition-colors duration-300 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm font-light leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
