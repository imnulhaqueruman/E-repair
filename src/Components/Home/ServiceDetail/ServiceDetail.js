import React from 'react';
import {  useHistory } from 'react-router-dom';
import './ServiceDetail.css';
const ServiceDetail = ({data}) => {
    const history = useHistory()
    const handleClick = id => {
         history.push(`/Book/${id}`)
         console.log(id)
    }
    return (
        <div className="col-md-4 col-sm-12 container-card py-2">
            <div className="animation">
                <img className="img-fluid" src={data.imageUrl} alt="" />
            </div>
            <div className="py-2">
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