import React from 'react';
import { FaArrowDown, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import img from '../../../Images/Capture3.PNG'


const Header = () => {
    return (
        <div className='lg:mt-10'>
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <div className="avatar">
                            <div className="w-40 border-8 shadow-lg border-white rounded-full">
                                <img src={img} alt="img" />
                            </div>
                        </div>
                        <div className='my-8'>
                            <h1 className='text-3xl font-extrabold'>SEZAN <span className='text-accent'>AHMED</span></h1>
                            <p className='text-accent font-semibold'>I'm a web Developer</p>
                            <div className='my-4 flex justify-center'>
                                <button className="btn btn-sm btn-circle bg-white shadow-lg border-0 mx-1">
                                    <FaLinkedinIn className='text-blue-600'></FaLinkedinIn>
                                </button>
                                <button className="btn btn-sm btn-circle bg-white shadow-lg border-0 mx-1">
                                    <GoMarkGithub className='text-accent'></GoMarkGithub>
                                </button>
                                <button className="btn btn-sm btn-circle bg-white shadow-lg border-0 mx-1">
                                    <FaRegEnvelope className='text-black'></FaRegEnvelope>
                                </button>
                            </div>

                            <div className='mt-8'>
                                <a href="#about" className="btn bg-transparent btn-sm btn-circle  border-0">
                                    <FaArrowDown className='text-accent'></FaArrowDown>
                                </a>                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;