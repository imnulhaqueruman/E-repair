import React from 'react';
import './CustomerReview.css';
const CustomerReview = ({data}) => {
    return (
        <section className="col-md-4 pb-3">
            <div style={{height:'18rem'}} className="card border">
               <div className="d-flex mx-3 my-3">
                    <div>
                        <img src={data.img} alt="" className="img-fluid rounded-circle px-3" />
                    </div>
                    <div>
                        <h3>{data.name}</h3>
                        <p>{data.title}</p>
                    </div>
               </div>
               <div className="text-center card-body">
                   <h6>{data.description}</h6>
               </div>
            </div>
            
        </section>
    );
};

export default CustomerReview;