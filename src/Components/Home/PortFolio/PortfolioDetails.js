import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../Nav/Nav';

const PortfolioDetails = () => {

    const [details, setDetails] = useState([])

    const _id = useParams()
    console.log(_id)

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/redoykhan28/react-portfolio/main/public/projectDetails.json')
            .then(res => res.json())
            .then(data => {
                const currentProject = data.find(project => project.project_id === parseInt(_id.id))
                setDetails(currentProject)
            })
    }, [_id])

    console.log(details)

    return (
        <div className='bg-primary'>

            <div className='bg-white'>
                <div className='text-right'>
                    <Link to={'/'} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </Link>
                </div>
                <div className='pb-8'>
                    <h1 className='text-5xl font-extrabold'>{details.project}</h1>
                    <p>{details.description}</p>
                </div>

            </div>

            <div className='mt-10'>
                <div className="carousel lg:w-9/12 mx-auto rounded-2xl ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={details.img.img1} className="w-full" alt='img' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={details.img.img2} className="w-full" alt='img' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={details.img.img3} className="w-full" alt='img' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={details.img.img4} className="w-full" alt='img' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <img src={details.img.img5} className="w-full" alt='img' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide6" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full">
                        <img src={details.img.img6} className="w-full" alt='img' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PortfolioDetails;