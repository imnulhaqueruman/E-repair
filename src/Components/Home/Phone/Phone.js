import React from 'react';
import './Phone.css'
const Phone = ({phone}) => {
    return (
        <div className="col-md-4 px-3">
            <div className="container justify-content-center">
                <div className="align-self-center">
                     <img className="img-fluid " style={{width:49 ,height:90}} src={phone.img} alt="" />

                </div>
                <div className="py-5  ">
                    <h4>
                        {phone.title}
                    </h4>
                    <p className="text-secondary py-2 ">{phone.description}</p>
                </div>
            </div>
            
            
        </div>
    );
};

export default Phone;