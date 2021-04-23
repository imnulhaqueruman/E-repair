import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg  navbar-light bg-info ">
        <div className="container-fluid ">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                      <Link  className="nav-link ms-5 active"aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link ms-5 " to="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link ms-5" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link ms-5 " to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link ms-5 " to="/review">Reviews</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link ms-5 " to="/book">Booking</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link ms-5 " to="/contact">Contact</Link>
                    </li>                
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Nav;