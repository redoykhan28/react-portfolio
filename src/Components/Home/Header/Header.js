import React, { useContext } from 'react';
import { FaArrowDown, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { modeContext } from '../../../Context/ModeContext';
import img from '../../../Images/Capture3.PNG'
import img2 from '../../../Images/Capture5.PNG'
import './Header.css'


const Header = () => {
    const { mode } = useContext(modeContext)
    return (
        <div className='lg:mt-10'>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        {
                            mode ?
                                <div className="avatar">
                                    <div className="w-40 border-8 shadow-lg border-neutral rounded-full">
                                        <img src={img2} alt="img" />

                                    </div>
                                </div>
                                :
                                <div className="avatar">
                                    <div className="w-40 border-8 shadow-lg border-white rounded-full">
                                        <img src={img} alt="img" />
                                    </div>
                                </div>
                        }
                        <div className='my-8'>
                            <h1 className={mode ? 'text-3xl text-white font-extrabold' : 'text-3xl font-extrabold'}>SEZAN <span className={mode ? 'text' : 'text-accent'}>AHMED</span></h1>
                            <p className={mode ? 'text font-semibold' : 'text-accent font-semibold'}>I'm a web Developer</p>
                            <div className='my-4 flex justify-center'>
                                <button className={mode ? "btn btn-sm btn-circle bg-neutral shadow-xl border-0 mx-1" : "btn btn-sm btn-circle bg-white shadow-lg border-0 mx-1"}>
                                    <FaLinkedinIn className='text-blue-600'></FaLinkedinIn>
                                </button>
                                <button className={mode ? "btn btn-sm btn-circle bg-neutral shadow-lg border-0 mx-1" : "btn btn-sm btn-circle bg-white shadow-lg border-0 mx-1"}>
                                    <GoMarkGithub className='text-accent'></GoMarkGithub>
                                </button>
                                <button className={mode ? "btn btn-sm btn-circle bg-neutral shadow-lg border-0 mx-1" : "btn btn-sm btn-circle bg-white shadow-lg border-0 mx-1"}>
                                    <FaRegEnvelope className={mode ? 'text-white' : 'text-black'}></FaRegEnvelope>
                                </button>
                            </div>

                            <div className='mt-8'>
                                <a href="#about" className="btn bg-transparent btn-sm btn-circle  border-0">
                                    <FaArrowDown className={mode ? 'text-success' : 'text-accent'}></FaArrowDown>
                                </a>                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;