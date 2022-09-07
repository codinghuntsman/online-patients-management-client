import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../Hooks/UseAdmin';
import './Dashboard.css';
import { FcApproval, FcManager } from "react-icons/fc";

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = UseAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-sm lg:text-2xl pl-10 font-bold text-pink-500 font-serif mt-2'>Welcome to your dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side mt-14">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">My Appointment</Link></li>
                    <li><Link to="/dashboard/review">My Review</Link></li>
                    <li><Link to="/dashboard/history">My History</Link></li>
                    {admin &&
                        <>
                            <li><Link to="/dashboard/users">All Users <span><FcApproval /></span></Link></li>
                            <li><Link to="/dashboard/addDoctor">Add a doctor <span><FcManager /></span></Link></li>
                            <li><Link to="/dashboard/ManageDoctor">Manage doctor <span><FcManager /></span></Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;