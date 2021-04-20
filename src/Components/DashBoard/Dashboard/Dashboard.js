import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
const containerStyle={
    backgroundColor:'#E8EAED',
    height:'100%'
}
const Dashboard = () => {
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-3 px-0 mx-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-6 mx-5 px-5">
                    
                </div>
            </div>
        </section>
    );
};

export default Dashboard;