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
       <div className="d-flex justify-content-center container-fluid">
            <div className="row  col-sm-12 mt-3 pt-3 pb-5">
                {
                    serviceData.map(data => <ServiceDetail data={data}></ServiceDetail>)
                }
            </div>
       </div>
    );
};

export default Services;