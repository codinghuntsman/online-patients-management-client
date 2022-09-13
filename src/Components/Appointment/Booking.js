import React, { useState } from 'react';
import BookingInfo from './BookingInfo';
import BookingModal from './BookingModal';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import Loading from './../Login/Loading';

const Booking = ({ date }) => {

    const [treatment, setTreatment] = useState(null);
    const formateDate = format(date, 'PP');

    //--------------------Usage of react query-------------------
    const { data: services, isLoading, refetch } = useQuery(["available", formateDate], () =>
        fetch(`https://safe-falls-27408.herokuapp.com/available?date=${formateDate}`)
            .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }



    //---------------Usage of use state-------------------------
    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     fetch(`https://safe-falls-27408.herokuapp.com/available?date=${formateDate}`)
    // .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    // -----------------------------------------------------------


    return (
        <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 px-10 mt-5'>
            {
                services?.map(service => <BookingInfo key={service._id}
                    service={service}
                    setTreatment={setTreatment}></BookingInfo>)
            }
            {
                treatment && <BookingModal key={treatment._id} setTreatment={setTreatment}
                    treatment={treatment} date={date} refetch={refetch}></BookingModal>
            }
        </div>
    );
};

export default Booking;