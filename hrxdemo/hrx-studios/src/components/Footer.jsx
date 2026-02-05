import React from 'react';
import { ArrowRight, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-[#05080f] border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <a
                            className="text-2xl font-bold tracking-tighter text-white mb-6 block cursor-pointer"
                            href="#"
                            onClick={scrollToTop}
                        >
                            HRX <span className="text-accent-gold font-light">STUDIOS</span>
                        </a>
                        <p className="text-gray-400 max-w-sm font-light leading-relaxed">
                            The premier AI-first strategic growth partner for forward-thinking enterprises. We bridge the gap between human ingenuity and artificial intelligence.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-widest">Expertise</h4>
                        <ul className="space-y-4 text-gray-400 font-light">
                            {['AI Strategy', 'Brand Transformation', 'Performance Marketing', 'Automation'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="hover:text-accent-gold transition-colors"
                                        onClick={scrollToTop}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-widest">Connect</h4>
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                                <Linkedin className="w-5 h-5 text-gray-300" />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                                <Twitter className="w-5 h-5 text-gray-300" />
                            </a>
                        </div>
                        <a href="mailto:hello@hrxstudios.com" className="text-accent-gold flex items-center gap-2 hover:underline">
                            hello@hrxstudios.com <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
                    <p>© 2026 HRX Studios. All Rights Reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" onClick={scrollToTop} className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" onClick={scrollToTop} className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
