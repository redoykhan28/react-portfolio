import React, { useContext } from 'react';
import image from '../../../Images/126841642_2749445481961165_3654500392572136334_n.jpg'
import { FaArrowDown } from "react-icons/fa";
import { modeContext } from '../../../Context/ModeContext';


const AboutMe = () => {
    //use context
    const { mode } = useContext(modeContext)
    return (
        <div>
            <div className={mode ? "hero lg:w-11/12 p-4 mx-auto rounded-xl shadow-lg bg-neutral text-white" : "hero lg:w-11/12 p-4 mx-auto rounded-xl shadow-lg bg-white"}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-1/2 mx-10'>
                        <img src={image} className="lg:11/12 mx-auto rounded-lg shadow-2xl" alt='img' />
                    </div>
                    <div className='lg:w-1/2 text-left'>
                        <h1 className='text-4xl lg:mt-6 font-bold'>About Me</h1>
                        <p className='text-accent font-semibold '>My Story</p>
                        <p className='mt-6'>I'm Sezan Ahmed. Recently graduated from varendra university in Dept. of CSE. As a CSE student, I'm very passionate about web development and recently completed a web development course.
                        </p>
                        <p className='my-2'>
                            I wanted to start my career as a junior web developer. I am proficient in HTML, CSS, bootstrap, tailwind, JavaScript, and react.JS and have a decent experience in node.JS, express.JS, and mongo DB.
                        </p>

                        <div>
                            <div className='flex justify-between mt-8 mb-2'>
                                <h3 className='text-accent font-bold'>Age: <span className={mode ? 'text-white' : 'text-neutral'}>24</span></h3>
                                <h3 className='text-accent font-bold'>Resident: <span className={mode ? 'text-white' : 'text-neutral'}>Bangladesh</span></h3>
                            </div>

                            <div className='flex justify-between my-2'>
                                <h3 className='text-accent font-bold'>Status: <span className={mode ? 'text-white' : 'text-neutral'}>Available</span></h3>
                                <h3 className='text-accent font-bold'>Address: <span className={mode ? 'text-white' : 'text-neutral'}>Rajshahi</span></h3>
                            </div>

                            <div className='flex justify-between my-2'>
                                <h3 className='text-accent font-bold'>Email: <span className={mode ? 'text-white' : 'text-neutral'}>sezan.ahmed@gmail.com</span></h3>
                                <h3 className='text-accent font-bold'>Phone: <span className={mode ? 'text-white' : 'text-neutral'}>+8801533648519</span></h3>

                            </div>

                        </div>

                        <button className="btn mt-8 w-full mx-auto btn-accent text-white">Portfolio <FaArrowDown className='mx-2' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;