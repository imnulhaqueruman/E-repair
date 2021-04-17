import React from 'react';
import mobile from '../../../images/mobile2.jpg';
import laptop from '../../../images/laptop.jpg';
import electronics from '../../../images/electronics.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const Services = () => {
    const ServiceData = [
        {
            title:'SmartPhones Repair',
            description:'If your phone has a broken front glass, non-responsive buttons, a broken camera we can fix it in house…',
            img: mobile

        },
        {
            title:'Computer Repair',
            description:"If your phone has a broken front glass, non-responsive buttons, a broken camera we can fix it in house…",
            img:laptop
        },
        {
            title:'Electronics Repair',
            description:'We repair appliances of any manufacturer in the shortest possible time. We give a guarantee…',
            img:electronics
        }
        
    ]
    return (
       <div className="d-flex justify-content-center">
            <div className="row w-75 mt-5 pt-5">
                {
                    ServiceData.map(data => <ServiceDetail data={data}></ServiceDetail>)
                }
            </div>
       </div>
    );
};

export default Services;