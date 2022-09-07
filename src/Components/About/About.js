import React from 'react';
import './About.css';
import sajed from '../../assets/images/sajedul.png';
import sharmin from '../../assets/images/sharmin.png';

const About = () => {
    return (
        <div>
            <h5 className='text-2xl font-extrabold ml-8 text-black font-sans'>About Us</h5>
            <div className='mt-5'>
                <div className='grid grid-cols-2'>
                    <div className='flex justify-end mr-5'>
                        <img className='h-56 w-44 rounded-sm' src={sajed} alt="img" />
                    </div>
                    <div className='flex justify-start ml-5'>
                        <img className='h-56 w-44 rounded-sm' src={sharmin} alt="img" />
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='flex justify-end mr-3'>
                        <div className='bg-accent w-48 text-xl p-3'>
                            <p className='font-bold font-sans underline'>Student</p>
                            <p className='font-bold font-sans'>Md Sajedul islam</p>
                            <p className='font-bold font-sans'>ID: 182-0016-207</p>
                            <p className='font-bold font-sans'>Dept. of CSE</p>
                        </div>
                    </div>
                    <div className='ml-3 text-xl bg-accent w-48 p-3'>
                        <p className='font-bold font-sans underline'>Supervisor</p>
                        <p className='font-bold font-sans'>Sharmin Akter</p>
                        <p className='font-bold font-sans'>Assistant Professor</p>
                        <p className='font-bold font-sans'>Dept. of CSE</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;