import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import quote from '../../assets/icons/quote.svg';
import Patient from './Patient';

const PatientSays = () => {

    const patients = [
        {
            _id: 1,
            name: "Hamim Sikrana",
            description: " Though the gulf between what patients say and what doctors hear is often wide, Dr. Danielle proves that it doesn't have to be. Through the powerfully resonant human stories that is celebrated for, she explores the high-stakes world of doctor-patient communication that we all must navigate",
            country: "USA",
            img: people1,
        },
        {
            _id: 2,
            name: "Sovan sakira",
            description: "Danielle proves that it doesn't have to be. Through the powerfully resonant human stories that is celebrated for, she explores the high-stakes world of doctor-patient communication that we all must navigate. Though the gulf between what patients say and what doctors hear is often wide.",
            country: "Canada",
            img: people2,
        },
        {
            _id: 3,
            name: "Salvia jovan",
            description: " Though the gulf between what patients say and what doctors hear is often wide, Dr. Danielle proves that it doesn't have to be. Through the powerfully resonant human stories that is celebrated for, she explores the high-stakes world of doctor-patient communication that we all must navigate",
            country: "California",
            img: people3,
        },
    ]
    return (
        <div>
            <div className=' py-20 px-10 flex items-center justify-between'>
                <div>
                    <p className=' text-accent font-bold text-2xl font-serif'>Testimonial</p>
                    <h1 className='text-xl lg:text-5xl text-black font-bold font-sans bg-clip-text'>What Our Patients Says</h1>
                </div>
                <img className='w-16 lg:w-40' src={quote} alt="quote" />
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-8 px-10'>
                {
                    patients.map(patient => <Patient key={patient._id} patient={patient}></Patient>)
                }
            </div>
        </div>
    );
};

export default PatientSays;