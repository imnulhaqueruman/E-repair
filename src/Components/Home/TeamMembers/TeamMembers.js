import React from 'react';
import manager from '../../../images/team-manager.jpg';
import founder from '../../../images/co-founder.jpg';
import woman from '../../../images/woman.jpg';
import TeamMember from '../TeamMember/TeamMember';
const TeamMembers = () => {
    const members=[
        {
            name:'Alton Helex',
            description:'Consectetur adipiscing elitt elit tellus luctus pulvinar dapibus luctus',
            img:manager
        },
        {
            name:'Sakib Martin',
            description:'Consectetur adipiscing elitt elit tellus luctus pulvinar dapibus luctus',
            img:founder
        },
        {
            name:'Angelina',
            description:'Consectetur adipiscing elitt elit tellus luctus pulvinar dapibus luctus',
            img:woman
        }
    ]
    return (
       <section className="container my-5">
           <div className="text-center py-5">
               <h1><strong style={{color:'#002C42'}}>Our</strong> <strong style={{color:'#00C3ED'}}>Expert</strong> <strong  style={{color:'#002C42'}}>Team</strong></h1>
               <h5 className="py-5">Explore Our Completed Services! Consectetur adipiscing elitt elit tellus, <br/>luctus pulvinar dapibus leoconsectetur luctus 
                    nec.</h5>
           </div>
           <div className="d-flex justify-content-center">
               <div className="row mx-3">
                     {
                         members.map(member => <TeamMember member={member}></TeamMember>)
                     }
               </div>

           </div>
       </section>
    );
};

export default TeamMembers;