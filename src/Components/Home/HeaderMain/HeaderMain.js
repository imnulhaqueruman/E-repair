import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <main style={{height:600}} className="row d-flex align-items-center">
            <div className="col-md-4 py-5 my-5 offset-md-1">
                <h1 className="text-info pb-5">E-REPAIR</h1>
                <h3 className="text-primary">Fast Repair Your <br/> Smart Phones and Electronics Devices</h3>
                <p className="text-white">
                    Our Company produces the urgent repair of electronics devices without additional cost .
                    In this short Period of time does not affect the quality of work .
                </p>
                <button className="btn btn-primary"><Link className="text-white" to="/dashboard"> Get Booking </Link></button>
            </div>
            <div className="col-md-6 mx-5 px-5">
                <Link to="/login"><button className="btn btn-info rounded-pill">Log in</button></Link>
               
            </div>
          

        </main>
    );
};

export default HeaderMain;