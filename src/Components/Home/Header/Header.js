import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Nav from '../Navbar/Nav';
import './Header.css';
const Header = () => {
    return (
        <div className="header-container">
             <Nav></Nav>
             <HeaderMain></HeaderMain>
             <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;