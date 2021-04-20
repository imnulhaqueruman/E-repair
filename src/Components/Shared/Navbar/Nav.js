import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg px-5 navbar-light bg-info ">
        <div class="container-fluid ">
            <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item">
                      <Link  class="nav-link ms-5 active" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link ms-5 " to="/about">About Us</Link>
                    </li>
                    <li class="nav-item">
                       <Link class="nav-link ms-5" to="/services">Services</Link>
                    </li>
                    <li class="nav-item">
                       <Link class="nav-link ms-5 " to="/dashboard">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link ms-5 " to="/review">Reviews</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link ms-5 " to="/book">Booking</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link ms-5 " to="/contact">Contact</Link>
                    </li>                
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Nav;