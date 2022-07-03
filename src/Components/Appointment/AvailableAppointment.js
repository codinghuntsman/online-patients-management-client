import React from 'react';
import { format } from 'date-fns';
import Booking from './Booking';
const AvailableAppointment = ({ date }) => {
    return (
        <div>
            <p className='text-center text-xs lg:text-xl text-black font-bold font-serif bg-gradient-to-l from-accent to-accent w-10/12 mx-auto p-2 rounded-md'>
                Available Appointment: {date && format(date, "PP")}</p>
            <Booking date={date}></Booking>
        </div>
    );
};

export default AvailableAppointment;