import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className="card w-100 bg-base-100 shadow-xl hover:border border-accent">
            <figure className="px-10 pt-10">
                <img src={img} alt="img" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold font-sans">{name}</h2>
                <p className='text-justify font-bold font-serif'>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-wide lg:btn-wide btn-outline btn-accent uppercase font-bold rounded-full font-sans hover:font-serif">See more</button>
                </div>
            </div>
        </div>
    );
};

export default Service;