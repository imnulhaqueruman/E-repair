import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import From from '../Form/From';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import SmartPhones from '../SmartPhones/SmartPhones';
import TeamMembers from '../TeamMembers/TeamMembers';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <SmartPhones></SmartPhones>
            <TeamMembers></TeamMembers>
            <From></From>
            <Reviews></Reviews>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;