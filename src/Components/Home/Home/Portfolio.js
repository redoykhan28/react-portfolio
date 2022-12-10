import React from 'react';
import AboutMe from '../About/AboutMe';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import PortfolioSection from '../PortFolio/PortfolioSection';

const Portfolio = () => {
    return (
        <div className='bg-primary pt-8'>
            <section className='w-9/12 mx-auto'>
                <Nav></Nav>
            </section>

            <section id='home'>
                <Header></Header>
            </section >

            <section id='about'>
                <AboutMe></AboutMe>
            </section>
            <section id='portfolio' className='mt-28'>
                <PortfolioSection></PortfolioSection>
            </section>
            <section id='contact' className='mt-12'>
                <Contact></Contact>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default Portfolio;