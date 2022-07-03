import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/bg.png';

const Footer = () => {
    return (
        <section style={{ background: `url(${footer})`, backgroundSize: "cover" }}>
            <footer className="footer flex justify-evenly items-center p-10 mt-10 border border-t-fuchsia-700">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Branding</Link>
                    <Link to="/" className="link link-hover">Design</Link>
                    <Link to="/" className="link link-hover">Marketing</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-200 text-base-content">
                <div>
                    <p className='font-bold'>Copyright&copy;2022 - All right reserved by <span className=' text-black font-bold'>Md sajedul islam</span></p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;