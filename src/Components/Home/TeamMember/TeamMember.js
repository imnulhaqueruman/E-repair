import React from 'react';
import './TeamMember.css';
const TeamMember = ({member}) => {
    return (
       <div className="col-md-4 pb-2 col-sm-6">
            <div className="container">
               <div className="card rounded-3">
                  <img src={member.img} alt="" className="image img-fluid" />
                  <div className="overlay">
                        <div className="text">
                              <h1>{member.name}</h1>
                              <p>{member.description}</p>
                        </div>
                  </div> 
               </div>
             
         </div>

       </div>
    );
};

export default TeamMember;