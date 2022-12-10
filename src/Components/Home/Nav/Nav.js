import React from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Nav = () => {
    return (
        <div>
            <div className="navbar px-4 bg-white rounded-full w-9/12 mx-auto fixed z-40	">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#portfolio'>Portfolio</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Portfolio</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#portfolio'>Portfolio</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-accent rounded-full text-white">Download resume <FaCloudDownloadAlt className='mx-2'></FaCloudDownloadAlt></a>
                </div>
            </div>
        </div>

    );
};

export default Nav;