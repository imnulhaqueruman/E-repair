import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const Services = () => {
    
    const [serviceData,setServiceData] = useState([])
    useEffect(() =>{
        fetch('https://rocky-everglades-73892.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setServiceData(data))
    },[])
    return (
       <div className="d-flex justify-content-center">
            <div className="row w-75 mt-5 pt-5 pb-5">
                {
                    serviceData.map(data => <ServiceDetail data={data}></ServiceDetail>)
                }
            </div>
       </div>
    );
};

export default Services;