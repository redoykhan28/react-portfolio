import React, { useContext } from 'react';
import { modeContext } from '../../../Context/ModeContext';
import AboutMe from '../About/AboutMe';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import PortfolioSection from '../PortFolio/PortfolioSection';

const Portfolio = () => {

    const { mode } = useContext(modeContext)

    return (
        <div className={mode ? 'bg-info pt-8' : 'bg-primary pt-8'}>
            <section className='w-9/12 mx-auto'>
                <Nav></Nav>
            </section>

            <section id='home'>
                <Header></Header>
            </section >

            <section id='about'>
                <AboutMe></AboutMe>
            </section>
            <section data-aos="zoom-in" id='portfolio' className='mt-28'>
                <PortfolioSection></PortfolioSection>
            </section>
            <section data-aos="fade-down" id='contact' className='mt-24'>
                <Contact></Contact>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default Portfolio;