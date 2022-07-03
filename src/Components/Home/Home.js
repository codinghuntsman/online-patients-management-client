import React from 'react';
import Banner from '../Banner/Banner';
import MakeAppointment from './MakeAppointment';
import Card from './Card';
import ContactUs from './ContactUs';
import DentalCare from './DentalCare';
import Footer from './Footer';
import './Home.css';
import PatientSays from './PatientSays';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Card />
            <Services />
            <DentalCare />
            <MakeAppointment />
            <PatientSays />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;