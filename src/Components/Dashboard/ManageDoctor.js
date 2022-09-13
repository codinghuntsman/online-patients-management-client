import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Login/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {

    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('https://safe-falls-27408.herokuapp.com/doctor').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='pl-10'>
            <h5 className="text-2xl font-bold font-sans">Manage Doctors {doctors.length}</h5>
            <div class="overflow-x-auto">
                <table class="table table-normal w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow key={doctor._id} doctor={doctor}
                                index={index} refetch={refetch} setDeletingDoctor={setDeletingDoctor}></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <DeleteConfirmModal deletingDoctor={deletingDoctor} refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctor;