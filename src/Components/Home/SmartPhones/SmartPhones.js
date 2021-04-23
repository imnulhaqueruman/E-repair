import React from 'react';
import iphone from '../../../images/iphone.png';
import samsung from '../../../images/samsung.png';
import nokia from '../../../images/Nokia.png';
import sony from '../../../images/sony.png';
import blackberry from '../../../images/blackberry.png';
import lenovo from '../../../images/phone-1.png';
import Phone from '../Phone/Phone';
import './SmarPhones.css';
const SmartPhones = () => {
    const SmartPhones=[
        {
            title:'Iphone',
            description:"Sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
            img:iphone
        },
        {
            title:'Samsung',
            description:"Sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
            img:samsung
        },
        {
            title:'Nokia',
            description:"Sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
            img:nokia
        },
        {
            title:'Sony',
            description:"Sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
            img:sony
        },
        {
            title:'Blackberry',
            description:"Sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
            img:blackberry
        },
        {
            title:'Lenovo',
            description:"Sed do eiusmod temporincididunt ut labore et dolore magna aliqua.",
            img:lenovo
        }
        
        
    ]
    return (
        <section className="container my-10 smartphone-background">
            <div className="text-center">
                <h1>Smartphones that We Work With</h1>
                <p className="text-secondary">
                    Rem ipsum dolor sit amet, consectetur adipisicing <br/>
                    elit, sed do eiusmod tempor incididun
                </p>

            </div>
            <div className="d-flex align-items-center container-fluid py-5">
                <div className="row col-sm-12 mx-5">
                    {
                        SmartPhones.map(phone => <Phone phone={phone}></Phone> )
                    }
                </div>

            </div>

        </section>
    );
};

export default SmartPhones;