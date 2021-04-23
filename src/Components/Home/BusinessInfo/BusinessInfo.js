import React from 'react';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';
const BusinessInfo = () => {
    const infosData = 
    [
    {
        title:'Opening Hours',
        description:'We are available from 7pm',
        icon:faClock,
        background:'primary'
    },
    {
        title:'Visit Our Location',
        description:'RikabiBazar,Sylhet',
        icon:faMapMarker,
        background:'dark'
    },
    {
        title:'Contact Us ',
        description:'01788836781',
        icon:faPhone,
        background:'primary'
    }
]
    return (
        <section className="d-flex justify-content-center">
           <div className="row w-75 col-sm-12 py-3">
             {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
             }
           </div>
        </section>
    );
};

export default BusinessInfo;