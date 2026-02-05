import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Linkedin, Twitter, Dribbble, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#05080f] text-white font-sans">
            <Header />
            <main className="flex-grow pt-32 pb-20 px-6 container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column */}
                    <div className="pt-10">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-8">
                            CONNECT <br />
                            WITH US
                        </h1>
                        <p className="text-xl text-gray-400 font-light mb-20 max-w-md">
                            Let's build something extraordinary together!
                        </p>

                        <div className="flex gap-8">
                            {['LinkedIn', 'Dribbble', 'Behance'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="text-lg text-white hover:text-accent-gold transition-colors underline-offset-4 hover:underline"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-gray-500 text-sm font-bold tracking-widest uppercase mb-4">Project Inquiries</h3>
                                <a href="mailto:hello@hrxstudios.com" className="email-link block text-lg text-white hover:text-accent-gold transition-colors mb-2">
                                    hello@hrxstudios.com
                                </a>
                                <p className="text-gray-400 font-light">+1 (555) 123-4567</p>
                            </div>

                            <div>
                                <h3 className="text-gray-500 text-sm font-bold tracking-widest uppercase mb-4">Our Studio</h3>
                                <address className="not-italic text-white text-lg leading-relaxed">
                                    100 Innovation Drive,<br />
                                    Suite 200, Tech City, TX 78701
                                </address>
                            </div>

                            <div>
                                <h3 className="text-gray-500 text-sm font-bold tracking-widest uppercase mb-4">Partnerships</h3>
                                <a href="mailto:partners@hrxstudios.com" className="email-link block text-lg text-white hover:text-accent-gold transition-colors mb-2">
                                    partners@hrxstudios.com
                                </a>
                                <p className="text-gray-400 font-light">+1 (555) 987-6543</p>
                            </div>
                        </div>

                        <div className="relative rounded-lg overflow-hidden h-[400px] w-full">
                            <img
                                src="/assets/case-saas.jpg"
                                alt="Modern Office Interior"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay if needed to match tone */}
                            <div className="absolute inset-0 bg-black/20"></div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
