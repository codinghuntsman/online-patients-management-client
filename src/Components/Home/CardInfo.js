import React from 'react';

const CardInfo = ({ img, cardTitle, ph, opening, bgClass }) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgClass}`}>
            <figure className='pl-0 pt-2 lg:pt-0 lg:pl-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{cardTitle}</h2>
                <h6 className="fw-bold text-white">{ph}</h6>
                <h6 className="fw-bold text-white">{opening}</h6>
                <p className='text-white'></p>

            </div>
        </div>
    );
};

export default CardInfo;