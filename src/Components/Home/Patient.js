import React from 'react';

const Patient = ({ patient }) => {

    const { name, description, img, country } = patient;
    return (
        <div>
            <div className='card shadow-xl p-5 sm:h-[400px] h-[450px]'>
                <p className='font-serif text-black text-justify mb-5'>{description}</p>
                <div className=' flex justify-center items-center'>
                    <img className=' border-4 border-accent rounded-full' src={img} alt="images" />
                    <div className=' pl-4'>
                        <p className='font-sans font-bold text-xs sm:text-lg'>{name}</p>
                        <p className='font-sans font-bold'>{country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Patient;