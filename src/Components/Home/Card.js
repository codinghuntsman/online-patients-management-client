import React from 'react';
import CardInfo from './CardInfo';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';


const Card = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-10 mt-5'>
            <CardInfo cardTitle="Opening Hours" bgClass="bg-gradient-to-l from-cyan-500 to-blue-500" opening="You can open your serial any time" img={clock}></CardInfo>
            <CardInfo cardTitle="Visit our location" bgClass="bg-pink-500" img={marker}></CardInfo>
            <CardInfo cardTitle="Contact us now" bgClass="bg-gradient-to-l from-cyan-500 to-blue-500" ph="0173736325" img={phone}></CardInfo>
        </div>
    );
};

export default Card;