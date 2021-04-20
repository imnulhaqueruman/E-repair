import React from 'react';

const ServiceTable = ({bookings}) => {
    return (
        <div>
             <h2 className="text-info float-start">AllBookings</h2>
            <table class="table">
                <thead>
                    <tr>
                  
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Service</th>
                    
                   
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking)=> 
                            <tr>
                            <td>{booking.name}</td>
                            <td>{booking.email}</td>
                            <td>{booking.shipment.title}</td>
                            
                    </tr>)
                    }
                    
                </tbody>
             </table>
        </div>
    );
};

export default ServiceTable;