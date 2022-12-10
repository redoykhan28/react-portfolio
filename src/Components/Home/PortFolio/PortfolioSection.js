import React from 'react';
import project1 from '.././../../Images/pic.PNG'
import project2 from '.././../../Images/pic2.PNG'
import project3 from '.././../../Images/pic3.PNG'

const PortfolioSection = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold'>Portfolio</h1>
            <p className='text-accent font-semibold mt-2'>My ShowCase</p>

            <div className=' w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 mt-12'>
                <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={project1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-start">
                        <h2 className="text-sm">Web Design, Web development</h2>
                        <h2 className="card-title text-start">E-MOBO</h2>
                        <p>E-MOBO is a resale ecommerse site where you can purchase any resale mobile phone</p>
                        <div className="card-actions">
                            <button className="btn btn-accent text-white">See Project</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={project2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-start">
                        <h2 className="text-sm">Web Design, Web development</h2>
                        <h2 className="card-title">DEVENTS</h2>
                        <p className='my-4'>DEVENTS is an event management site where you can hire a proffesional photographer</p>
                        <div className="card-actions">
                            <button className="btn mt-4 btn-accent text-white">See Project</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={project3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-start">
                        <h2 className="text-sm">Web Design, Web development</h2>
                        <h2 className="card-title">Skill Edge</h2>
                        <p>Skill Edge is an E-learning website where you can purchase any course and improve your skills.</p>
                        <div className="card-actions">
                            <button className="btn mt-4 btn-accent text-white">See Project</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PortfolioSection;