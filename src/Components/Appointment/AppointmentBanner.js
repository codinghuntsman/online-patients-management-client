import React from 'react';
import doctors from '../../assets/images/doctors.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <section style={{ background: `url(${bg})`, backgroundSize: "cover" }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row w-72 justify-around">
                    <img src={doctors} alt="chair" className="max-w-sm lg:max-w-md lg:h-80 rounded-lg shadow-2xl" />
                    <div className='bg-base-100 shadow-xl p-5 rounded-md'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        <p className='text-center bg-accent p-2 rounded-md font-bold font-serif'>You have selected: {date && format(date, "PP")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;