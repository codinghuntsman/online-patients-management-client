import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Yes! Not only does fluoride prevent decay, it can also reduce root hypersensitivity such as cold sensitivity and sensitivity during dental cleanings",
            img: fluoride,
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: " Your dentist will numb the area and use a numbing gel before injecting a local anesthetic known as Lidocaine. You may feel a bit of a sting, but that's a reaction from the local.",
            img: cavity,
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "Over 10 years of clinical use of teeth whitening products containing 10% caraamide peroxide have not shown any damage to existing fillings. Do teeth whiteners damage.",
            img: whitening,
        },
    ]
    return (
        <div>
            <div className='container text-center mt-36'>
                <h2 className='text-cyan-500 font-bold text-xl lg:text-3xl font-sans'>OUR SERVICES</h2>
                <h2 className='text-black text-xl lg:text-4xl font-bold font-sans'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10 h-100 px-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;