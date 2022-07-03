import React from 'react';

const BookingInfo = ({ service, setTreatment }) => {

    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title font-sans bg-clip-text font-black">{name}</h2>
                <p className='text-black font-sans font-bold'><span className='btn btn-sm btn-circle bg-base-200 border-pink-300 font-bold text-pink-600'>{slots?.length}</span> {slots?.length > 1 ? "Spaces" : "Space"} available</p>
                <p>{
                    slots?.length > 0 ? <span className='font-bold'>{slots[0]}</span> : <span className='font-bold font-sans text-amber-500'>Try another date,Please</span>
                }</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots?.length === 0}
                        onClick={() => setTreatment(service)}
                        htmlFor="booking-modal" className="btn btn-accent uppercase text-white font-bold font-sans">
                        BOOK APPOINTMENT
                    </label>
                </div>
            </div>
        </div>
    );
};

export default BookingInfo;