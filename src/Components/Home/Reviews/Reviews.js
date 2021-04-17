import React from 'react';
import './Reviews.css';
import alina from '../../../images/customer1.jpg';
import alex from '../../../images/customer2.jpg';
import sonika from '../../../images/customer3.jpg';
import CustomerReview from '../CustomerReview/CustomerReview';
const Reviews = () => {
    const ReviewData = [
        {
            name:'Alina Mask',
            title:'Designer',
            description:'I feel very happy and be  proud to connect with this industry. I presume this is a very productive and professional industry. I wish very good luck & success for this industry',
            img:alina
        },
        {
            name:'Alex Roberto',
            title:'Designer',
            description:'I feel very happy and be proud to connect with this industry. I presume this is a very productive and professional industry. I wish very good luck & success for this industry',
            img:alex
        },
        {
            name:'Sonika Malkova',
            title:'Designer',
            description:'I feel very happy and be proud to connect with this industry. I presume this is a very productive and professional industry. I wish very good luck & success for this industry',
            img:sonika
        }
    ]
    return (
       <section className="review-container">
           <div className="text-center py-5 ">
               <h1><strong style={{color:'#002C42'}}>What</strong> <strong style={{color:'#00C3ED'}}>Customers</strong>  
                <strong style={{color:'#002C42'}}> Say</strong></h1>
                <p>Explore Our Completed Projects! Consectetur adipiscing elitt elit tellus, luctus pulvinar
                    <br/> dapibus leoconsectetur luctus nec.</p>
           </div>
           <div className="d-flex justify-content-center">
               <div className="row mx-5">
                   {
                       ReviewData.map(data =><CustomerReview data={data}></CustomerReview>)
                   }

               </div>
           </div>
       </section>
    );
};

export default Reviews;