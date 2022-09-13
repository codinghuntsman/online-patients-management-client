import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {

    const [user] = useAuthState(auth);

    const [appointment, setAppointment] = useState([]);

    // এখান থেকে ইউজার এর ইমেইল নিয়ে বুকিং এ পি আই এর মাধ্যমে সার্ভারে পাঠিয়েছি।
    // একক ইউসারের একক বুকিং পাওয়ার জন্য।

    useEffect(() => {
        if (user) {
            fetch(`https://safe-falls-27408.herokuapp.com/booking?patientEmail=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointment(data))
        }
    }, [user])
    return (
        <div class="overflow-x-auto">
            <p className='pl-10'>Total Appointment:{appointment.length}</p>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Treatment</th>
                    </tr>
                </thead>
                {/*---------------------Dashboard of user------------------*/}
                <tbody>
                    {
                        appointment.map((a, index) => <tr className='hover' key={a._id}>
                            <th>{index + 1}</th>
                            <td>{a.patientName}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                        </tr>)

                    }
                </tbody>
            </table>
        </div>

    );
};

export default MyAppointment;