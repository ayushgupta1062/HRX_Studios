import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "HRX Studios didn't just update our marketing; they fundamentally rewired how our company operates. The AI agents they built are handling work that used to take 20 people.",
            author: "Elena V.",
            role: "COO, Nexus Logistics"
        },
        {
            quote: "Strategic, precise, and incredibly effective. We saw ROI within the first month of deployment. A true partner in every sense of the word.",
            author: "Marcus T.",
            role: "Founder, FinStream"
        },
        {
            quote: "The gap between what we thought was possible with AI and what HRX delivered was massive. They unlocked value we didn't know existed.",
            author: "Sarah J.",
            role: "VP Marketing, Aura Retail"
        }
    ];

    return (
        <section className="py-24 bg-[#05080f] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-[#0B1121] p-10 border border-white/5 relative">
                            <Quote className="w-12 h-12 text-accent-gold/20 mb-6" />
                            <p className="text-gray-300 text-lg leading-relaxed italic mb-8">
                                "{item.quote}"
                            </p>
                            <div>
                                <div className="text-white font-bold">{item.author}</div>
                                <div className="text-accent-gold text-sm">{item.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
