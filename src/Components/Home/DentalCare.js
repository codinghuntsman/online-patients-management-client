import React from 'react';
import { Link } from 'react-router-dom';
import treatment from '../../assets/images/treatment.png';

const DentalCare = () => {
    return (
        <section>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-36 px-10 flex justify-center items-center">
                <div className=' flex-1'>
                    <figure>
                        <img className='h-50 lg:h-[500px] rounded-md' src={treatment} alt="Album" />
                    </figure>
                </div>
                <div className="card-body flex-1">
                    <h2 className="card-title text-xl lg:text-4xl font-bold font-sans">Exceptional Dental Care, on Your Terms</h2>
                    <p className=' font-serif text-md text-black text-justify'> Dental or oral health is concerned with your teeth, gums and mouth. The goal is to prevent complications such as tooth decay, and gum disease and to maintain the overall health of your mouth. Why do we need dental care? Image result for dental care. Maintaining your teeth isn't only about looking good. Poor dental hygiene can lead to problems that are much bigger than an unpleasant smile. Tooth decay and gum disease can affect other parts of your body, including your heart.</p>
                    <div className="card-actions">
                        <button className="btn btn-wide btn-outline btn-accent font-bold uppercase hover:rounded-full"><Link to="/login">GET STARTED</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DentalCare;