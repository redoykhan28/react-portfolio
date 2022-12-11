import React, { useEffect, useState } from 'react';
import PortfolioCard from './PortfolioCard';

const PortfolioSection = () => {

    const [cards, setCard] = useState([]);

    useEffect(() => {
        fetch('PortfolioData.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])

    return (
        <div>
            <h1 className='text-5xl font-bold'>Portfolio</h1>
            <p className='text-accent font-semibold mt-2'>My ShowCase</p>

            <div className=' w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 mt-12'>
                {
                    cards?.map(card => <PortfolioCard key={card.id} card={card}></PortfolioCard>)
                }
            </div>

        </div>
    );
};

export default PortfolioSection;