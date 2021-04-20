import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const ServiceDetail = ({data}) => {
    const history = useHistory()
    const handleClick = id => {
         history.push(`/Book/${id}`)
         console.log(id)
    }
    return (
        <div className="col-md-4">
            <div>
                <img className="img-fluid" src={data.imageUrl} alt="" />
            </div>
            <div className="py-5">
                <h2 className="text-center">{data.title}</h2>
                <p className="text-secondary">{data.description}</p>
            </div>
            <div>
                <button className="btn btn-info rounded-pill mx-2" onClick={() => handleClick(data._id)}>Get Booking</button>
            </div>
        </div>
    );
};

export default ServiceDetail;