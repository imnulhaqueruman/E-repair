import React, { useEffect, useState } from 'react';
import './Reviews.css';
import CustomerReview from '../CustomerReview/CustomerReview';
const Reviews = () => {
    const[reviews,setReviews] = useState([])
    useEffect(() => {
        fetch('https://rocky-everglades-73892.herokuapp.com/userReview')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    /*const ReviewData = [
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
    ]*/
    return (
       <section className="review-container container-fluid">
           <div className="text-center py-5 ">
               <h1><strong style={{color:'#002C42'}}>What</strong> <strong style={{color:'#00C3ED'}}>Customers</strong>  
                <strong style={{color:'#002C42'}}> Say</strong></h1>
                <p>Explore Our Completed Projects! Consectetur adipiscing elitt elit tellus, luctus pulvinar
                    <br/> dapibus leoconsectetur luctus nec.</p>
           </div>
           <div className="d-flex container-fluid">
               <div className="row col-sm-12 mx-5">
                   {
                       reviews.map(data =><CustomerReview data={data}></CustomerReview>)
                   }

               </div>
           </div>
       </section>
    );
};

export default Reviews;