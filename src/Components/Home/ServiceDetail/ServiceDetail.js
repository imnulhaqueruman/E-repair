import React from 'react';

const ServiceDetail = ({data}) => {
    return (
        <div className="col-md-4">
            <div>
                <img className="img-fluid" src={data.img} alt="" />
            </div>
            <div className="py-5">
                <h2 className="text-center">{data.title}</h2>
                <p className="text-secondary">{data.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;