import React from 'react';
import Nav from '../../Shared/Navbar/Nav';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
const Header = () => {
    return (
        <div className="header-container container-fluid">
             <Nav></Nav>
             <HeaderMain></HeaderMain>
             <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;