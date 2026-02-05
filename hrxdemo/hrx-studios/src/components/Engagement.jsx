import React from 'react';

const Engagement = () => {
    const steps = [
        {
            number: "01",
            title: "Calibration",
            description: "We align on goals, KPIs, and the scope of transformation."
        },
        {
            number: "02",
            title: "Blueprint",
            description: "Strategic planning and architectural design of AI systems."
        },
        {
            number: "03",
            title: "Deployment",
            description: "Agile execution and integration of new technologies."
        },
        {
            number: "04",
            title: "Evolution",
            description: "Ongoing management, training, and system refinement."
        }
    ];

    return (
        <section className="py-24 bg-white text-accent-navy">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <span className="text-accent-navy/60 text-sm tracking-[0.2em] uppercase font-semibold">
                        Engagement Model
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        Partnership, Not Vendor-ship.
                    </h2>
                </div>

                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row gap-8 py-8 border-b border-gray-200 last:border-0 group hover:bg-gray-50 transition-colors px-4 rounded-lg"
                        >
                            <div className="text-4xl font-light text-gray-300 group-hover:text-accent-gold transition-colors">
                                {step.number}
                            </div>
                            <div className="md:w-1/3">
                                <h3 className="text-2xl font-bold">{step.title}</h3>
                            </div>
                            <div className="md:w-1/2">
                                <p className="text-gray-600 font-light text-lg">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Engagement;
