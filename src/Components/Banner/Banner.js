import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import chair from '../../assets/images/chair.png';
import Bg from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <section style={{ background: `url(${Bg})`, backgroundSize: "cover" }} >
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse w-full">
                    <img src={chair} className="w-72 lg:w-full lg:h-80 md:w-[350px] rounded-lg shadow-2xl" alt="img" />
                    <div>
                        <h1 className="textAnimation text-xl lg:text-5xl font-bold bg-clip-text">Your New <span className='text-blue-500'>Smile</span> Starts Here</h1>
                        <p className="font-serif py-4 w-72 lg:w-full font-bold text-justify text-sm lg:text-[16px] bg-clip-text">What is the best treatment for teeth?
                            Fillings. Fillings, also called restorations, are the main treatment option when decay has progressed beyond the earliest stage. Fillings are made of various materials, such as tooth-colored composite resins, porcelain or dental amalgam that is a combination of several materials.are the main treatment option when decay has progressed beyond the earliest stage.
                        </p>
                        <div>
                            <button className="btn btn-wide border-0 uppercase bg-gradient-to-r from-cyan-500 to-blue-500 hover:rounded-full hover:font-serif"><Link to='/login'>Get Started</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;