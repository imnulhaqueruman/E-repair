import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookList from '../BookList/BookList';
import Sidebar from '../Sidebar/Sidebar';

const Bookings = () => {
    const[bookings,setBookings] = useState([])
    console.log(bookings)
    const[loggedInUser,setLoggedInUser] = useContext(UserContext)
    
    useEffect(() =>{
        fetch('https://rocky-everglades-73892.herokuapp.com/bookingsHistory?email=' +loggedInUser.email)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])
    return (
        <div className=" row">
            <div className="col-md-3 px-0 mx-0">
                  <Sidebar></Sidebar>
            </div>
            <div className="">
               {
                   bookings.map(booking => <BookList book={booking}></BookList>)
               }
            </div>
        </div>
    );
};

export default Bookings;