import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const BookList = ({book}) => {
    console.log(book.shipment)
    const{title,description,img} = book.shipment
    return (
        <div className="row d-flex">
            
            <div className="col-md-4 px-5 mx-5 py-5">
                <div>
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="py-5">
                    <h2 className="text-center">{title}</h2>
                    <p className="text-secondary">{description}</p>
                </div>
            </div>
                
            
        </div>
        
    );
};

export default BookList;