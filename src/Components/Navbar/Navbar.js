import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth)
        navigate("/");
    }

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/review">Review</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        {
            user && <li className='text-sm flex justify-center items-center font-sans text-white'>{user.displayName}</li>
        }

        {/*---------------------------Logout method------------------------------ */}
        <li>{user ? <button className="btn btn-ghost text-pink-500 font-bold" onClick={logout}>Log Out</button>
            : <Link to="/login">Login</Link>
        }</li>
    </>
    return (
        <div className="navbar w-screen bg-accent">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-black lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost uppercase 
                font-serif font-bold text-sm lg:text-2xl hover:rounded-full">Doctors Portal</Link>
            </div>
            <div className="navbar-end hidden lg:flex lg:justify-around md:w-60 w-full h-28">
                <ul className="menu menu-horizontal p-0 font-bold font-serif text-black">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end lg:w-0">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-black lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;