import React from 'react';
import './ContactUs.css';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section style={{ background: `url(${appointment})`, backgroundSize: "cover" }}>
            <div className="hero mt-32">
                <div className="hero-content flex-col">
                    <p className='ContactUs text-accent font-sans font-bold text-3xl bg-clip-text'>Contact us</p>
                    <h1 className='font-sans font-bold text-xl lg:text-4xl text-white bg-clip-text'>Stay connected with us</h1>
                    <div className="card w-full h-100 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" placeholder="Phone number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="Subject" className="input input-bordered" required />
                            </div>
                            <textarea className="textarea textarea-info" placeholder="Write your message"></textarea>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="/" className="label-text-alt link link-hover font-sans font-bold text-black">Forgot password?</Link>
                                </label>
                            </div> */}
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="form-control mt-3">
                                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0 hover:rounded-full uppercase">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;