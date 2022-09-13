import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
// import chair from '../../assets/images/chair.png';
import doctor from '../../assets/images/doctor.jpg';
import Bg from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <section style={{ background: `url(${Bg})`, backgroundSize: "cover" }} >
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse w-full">
                    <img src={doctor} className="w-72 lg:w-full lg:h-80 md:w-[350px] rounded-lg shadow-2xl" alt="img" />
                    <div>
                        <h1 className="textAnimation text-md lg:text-4xl text-cyan-500 font-bold bg-clip-text">Make Sure Your Appointment</h1>
                        <p className="font-serif py-4 w-72 lg:w-full font-bold text-justify text-sm lg:text-[16px] bg-clip-text">Online management system for patients is the best online platform for all Bangladeshi patients. this platform is working with both doctor and patient for providing service and receiving service. any doctor can provide their grateful service and the Bangladeshi common people can receive their desired service easily through this platform.
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