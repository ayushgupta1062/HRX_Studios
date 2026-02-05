import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Methodology from '../components/Methodology';
import Expertise from '../components/Expertise';
import WhyUs from '../components/WhyUs';
import CaseStudies from '../components/CaseStudies';
import Engagement from '../components/Engagement';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <Header />
            <main className="flex-grow">
                <Hero />
                <Services />
                <Methodology />
                <Expertise />
                <WhyUs />
                <CaseStudies />
                <Engagement />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </>
    );
};

export default Home;
