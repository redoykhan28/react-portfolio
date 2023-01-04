import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { modeContext } from '../../../Context/ModeContext';
import Footer from '../Footer/Footer';

const PortfolioDetails = () => {

    const { mode } = useContext(modeContext)


    const [details, setDetails] = useState({})

    const _id = useParams()
    console.log(_id)

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/redoykhan28/react-portfolio/main/public/projectDetails.json')
            .then(res => res.json())
            .then(data => {
                const currentProject = data?.find(project => project.project_id === parseInt(_id.id))
                setDetails(currentProject)
            })
    }, [_id])

    console.log(details)

    return (
        <div className={mode ? 'bg-info ' : 'bg-primary '}>

            <div className={mode ? 'bg-neutral text-white rounded-b-full' : 'bg-white rounded-b-full'}>
                <div className='text-right p-2'>
                    <Link to={'/'} className={mode ? "btn btn-circle btn-info" : "btn btn-circle"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </Link>
                </div>
                <div className='pb-8'>
                    <div data-aos='zoom-in'>
                        <h1 className='text-5xl font-extrabold'>{details.project}</h1>
                        <p className='font-semibold'>{details.title}</p>
                    </div>
                    <p data-aos='fade-left' className='mt-6 w-96 mx-auto'>{details.details}</p>
                    <a className={mode ? 'btn btn-success rounded-full my-6 text-white' : 'btn btn-accent rounded-full my-6 text-white'} href="#feature">See Features</a>
                </div>

            </div>

            <div className='mt-10'>
                <div className="carousel lg:w-9/12 mx-auto rounded-2xl ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={details?.img?.img1} className="w-full" alt='img' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={details?.img?.img2} className="w-full" alt='img' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={details?.img?.img3} className="w-full" alt='img' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={details?.img?.img4} className="w-full" alt='img' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <img src={details?.img?.img5} className="w-full" alt='img' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide6" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide6" className="carousel-item relative w-full">
                        <img src={details?.img?.img6} className="w-full" alt='img' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide5" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-9/12 mx-auto bg-white my-10 p-10 rounded-xl'>
                <h1 id='feature' className='text-3xl font-bold mb-6'>Key Features</h1>
                <ul className='text-left font-semibold'>
                    <li>1. {details?.feature?.f1}</li>
                    <li>2. {details?.feature?.f2}</li>
                    <li>3. {details?.feature?.f3}</li>
                    <li>4. {details?.feature?.f4}</li>
                    <li>5. {details?.feature?.f5}</li>
                </ul>

                <p className='mt-6 '>Technologies:{details.Technologies}</p>

                <div className='flex justify-between mt-6'>
                    <a target={'_blank'} className='btn btn-accent text-white' href={details.live}>Live Site</a>
                    <div className='flex'>
                        <a target={'_blank'} className='btn btn-neutral text-white mx-2' href={details.client}>Client Repository</a>
                        <a target={'_blank'} className='btn btn-secondary text-white' href={details.server}>Server Repository</a>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default PortfolioDetails;