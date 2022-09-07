import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { name, slots, _id } = treatment;
    const [user] = useAuthState(auth);

    const formateDate = format(date, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();

        const slot = event.target.slot.value;
        //--------------User booking Info----------------
        const bookingInfo = {
            treatmentId: _id,
            treatment: name,
            date: formateDate,
            slot,
            patientName: user.displayName,
            patientEmail: user.email,
            phone: event.target.number.value

        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Your appointment is set ${formateDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have an appointment on ${data.bookingInfo?.date} at ${data.bookingInfo?.slot}`)
                }
                //-------Refetch method---------
                refetch();
                //----------To close the modal---------------
                setTreatment(null);
            });
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-xl text-center">
                        <span className=' text-accent font-bold font-sans'>Booking for <span className=' text-pink-600'>&rarr; </span>{name}
                        </span>
                    </h3>
                    <form onSubmit={handleBooking} className=' grid grid-cols-1 gap-2 justify-items-center mt-2'>
                        <input type="text" name="date" disabled value={format(date, "PP")} className="input input-bordered input-accent w-full max-w-xs font-bold" />
                        <select name="slot" className="select select-accent w-full max-w-xs">
                            {slots.map((slot, index) => <option value={slot} key={index}>{slot}</option>)}
                        </select>
                        <input type="text" name="name" disabled value={user?.displayName} className="input input-bordered input-accent w-full max-w-xs font-bold" />
                        <input type="text" name="email" disabled value={user?.email} className="input input-bordered input-accent w-full max-w-xs font-bold" />
                        <input type="text" name="number" placeholder="Phone number" className="input input-bordered input-accent w-full max-w-xs font-bold" required />
                        <input type="submit" value="submit" className="btn btn-accent text-white font-bold w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;