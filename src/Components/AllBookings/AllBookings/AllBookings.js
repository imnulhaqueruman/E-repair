import React, { useEffect, useState } from 'react';
import Sidebar from '../../DashBoard/Sidebar/Sidebar';
import ServiceTable from '../ServiceTable/ServiceTable';

const AllBookings = () => {
    const[allBookings,setAllBookings] = useState([])
    useEffect(() =>{
        fetch('https://rocky-everglades-73892.herokuapp.com/allBookings')
        .then(res =>res.json())
        .then(data => setAllBookings(data))
    },[])
    return (
        <div className="container-fluid row">
            <div className="col-md-3 px-0 mx-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7 px-5">
                <ServiceTable bookings={allBookings}></ServiceTable>
            </div>
        </div>
    );
};

export default AllBookings;
