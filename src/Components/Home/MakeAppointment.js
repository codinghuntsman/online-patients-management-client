import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const Appointment = () => {
    return (
        <section
            style={{ background: `url(${appointment})`, backgroundSize: "cover" }}>
            <div className='card lg:card-side flex lg:justify-center lg:items-center mt-30 px-10 h-[750px] md:h-[950px] lg:h-[550px]'>
                <div className='flex-1'>
                    <img className='lg:mt-60' src={doctor} alt="doctor" />
                </div>
                <div className='flex-1'>
                    <p className='text-accent text-2xl font-bold mb-5'>Appointment</p>
                    <h1 className='text-xl lg:text-5xl font-serif font-bold text-white bg-clip-text'>Make an Appointment Today</h1>
                    <p className=' text-md font-serif text-white mt-5'>It is simple to politely ask for an appointment of any kind. Politely say, “I would like to make an appointment, please.” The typical response involves inquiring when and where you would like an appointment.</p>
                    <div className="card-actions mt-5">
                        <button className="btn btn-wide btn-outline btn-accent font-bold uppercase hover:rounded-full"><Link to="/login">GET STARTED</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;