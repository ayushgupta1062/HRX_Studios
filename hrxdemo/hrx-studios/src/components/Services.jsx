import React from 'react';

const Services = () => {
    const services = [
        {
            title: "AI Solutions & Transformation",
            description: "The backbone of modern efficiency. We build the technical infrastructure that allows your business to run faster and smarter."
        },
        {
            title: "Growth Marketing & Strategy",
            description: "The fuel for expansion. Precision targeting and brand narrative that captures market share and builds loyalty."
        },
        {
            title: "AI Agents & Products",
            description: "The workforce of the future. Automated agents that handle customer interactions and operations 24/7."
        }
    ];

    return (
        <section className="py-24 bg-accent-navy relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Integrated Growth Ecosystem
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We don't offer siloed services. We offer a unified growth engine where strategy, marketing, and AI amplify each other.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10 bg-[#0B1121]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-12 hover:bg-white/5 transition-colors duration-300 flex flex-col justify-center min-h-[300px]"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed font-light">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
