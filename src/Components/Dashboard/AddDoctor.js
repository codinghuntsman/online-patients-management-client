import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Login/Loading';


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('https://safe-falls-27408.herokuapp.com/service').then(res => res.json()));

    const imageStorageKeyToImgBB = 'bc233faafc43996dfd29aed162163e8c';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKeyToImgBB}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    };
                    // console.log(doctor);
                    fetch('https://safe-falls-27408.herokuapp.com/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success("Doctor added successfully");
                                reset()
                            }
                            else {
                                toast.error("Failed to add the doctor");
                            };
                        });
                };
            });
    };

    if (isLoading) {
        return <Loading></Loading>
    };

    return (
        <div className='pl-10'>
            <h5 className="text-2xl font-bold font-sans">Add a new doctor</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*-------------------Name Input field section (1)-------------------*/}
                <div>
                    <label className="label pb-0">
                        <span className="label-text text-black font-bold font-sans">Name</span>
                    </label>
                    <input type="text" name="name"
                        placeholder="Your name"
                        className="input input-accent w-full max-w-xs placeholder-black placeholder:font-sans"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required"
                            }
                        })}
                    />
                    <label className="label pt-0 pb-0">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-sm text-amber-600 font-bold font-sans">{errors.name.message}</span>}
                    </label>
                </div>
                {/*-------------------Email Input field section (2)-------------------*/}
                <div>
                    <label className="label pb-0">
                        <span className="label-text text-black font-bold font-sans">Email</span>
                    </label>
                    <input type="email" name="email"
                        placeholder="Your email"
                        className="input input-accent w-full max-w-xs placeholder-black placeholder:font-sans"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Provide a valid email'
                            }
                        })}
                    />
                    <label className="label pt-0 pb-0">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-sm text-amber-600 font-bold font-sans">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-sm text-amber-600 font-bold font-sans">{errors.email.message}</span>}
                    </label>
                </div>
                {/*-------------------specialization Input field section (3)-------------------*/}
                <div>
                    <label className="label">
                        <span className="label-text text-black font-bold font-sans">Specialty</span>
                    </label>
                    {/*------------------Dropdown menu--------------- */}
                    <select {...register("specialty")} className="select w-full max-w-xs input-accent">
                        {
                            services?.map(service => <option
                                key={service._id}
                                service={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text text-black font-bold font-sans">Name</span>
                    </label>
                    <input type="file" name="image"
                        className="input input-accent w-full max-w-xs placeholder-black placeholder:font-sans"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "image is required"
                            }
                        })}
                    />
                    <label className="label pt-0 pb-0">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-sm text-amber-600 font-bold font-sans">{errors.image.message}</span>}
                    </label>
                </div>
                <div className='mt-3'>
                    <input type="submit" value="ADD" className="btn btn-accent text-white font-bold font-sans w-full max-w-xs" />
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;