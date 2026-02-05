import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
                ? 'bg-[#05080f]/90 backdrop-blur-md border-white/10 py-4'
                : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a
                    className="text-2xl font-bold tracking-tighter text-white z-50 cursor-pointer"
                    onClick={handleLogoClick}
                    href="/"
                >
                    HRX <span className="text-accent-gold font-light">STUDIOS</span>
                </a>

                <nav className="hidden lg:flex items-center gap-10">
                    {[
                        { name: 'Expertise', id: 'expertise' },
                        { name: 'Methodology', id: 'methodology' },
                        { name: 'Case Studies', id: 'case-studies' },
                        { name: 'Why Us', id: 'why-us' }
                    ].map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.id)}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide uppercase"
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <button
                        onClick={() => navigate('/contact')}
                        className="inline-flex items-center justify-center text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-white text-accent-navy hover:bg-gray-100 px-6 py-2 rounded-sm font-semibold tracking-wide"
                    >
                        Partner With Us
                    </button>
                </div>

                <button className="lg:hidden text-white z-50">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
};

export default Header;
