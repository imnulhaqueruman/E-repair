import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';


const Footer = () => {
    const noNamed = [
        {name: "Kitchen Remodel" , link: "/Remodel"},
        {name: "Home Renovation" , link: "/home renovation"},
        {name: "Home Repair" , link: "/home repair"},
        {name: "Painting" , link: "/painting"},
        {name: "Bathroom Remodel" , link: "/Bathroom Remodel"},
    ]
    const ourAddress = [
        {name: "Sylhet -  Zindabazar" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const Repair = [
        {name: "Smartphone" , link: "/smartphone"},
        {name: "Computer" , link: "/computer"},
        {name: "Electronics" , link: "/Electronics"},
        {name: "Applications" , link: "/Applications"},
        {name: "Console" , link: "/console"},
        {name: "Help" , link: "/help"}
    ]
    const services = [
        {name: "Kitchen Remodel" , link: "/remodel"},
        {name: "Home Renovation" , link: "/renovation"},
        {name: "Home Repair" , link: "/repair"},
       
    
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Repair" menuItems={Repair}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-white">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;