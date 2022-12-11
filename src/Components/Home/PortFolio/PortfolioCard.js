import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ card }) => {
    const { img, project, description, id } = card
    return (
        <div>
            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-start">
                    <h2 className="text-sm">Web Design, Web development</h2>
                    <h2 className="card-title text-start">{project}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <Link to={`/details/${id}`} className="btn btn-accent text-white">See Project</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;