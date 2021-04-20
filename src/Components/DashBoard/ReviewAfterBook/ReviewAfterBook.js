import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
const ReviewAfterBook = () => {
    const[loggedInUser,setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const UserMessage={
            review:data.review
        }
        const UserReview = {...loggedInUser, message:UserMessage}
        fetch('https://rocky-everglades-73892.herokuapp.com/review',{
            method:'POST',
            headers :{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify(UserReview)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert('SuccessFull')
            }
        })

    };
   

    return (
        <div className="row">
            <div className="col-md-3 px-0 mx-0">
               <Sidebar></Sidebar>
            </div>
            <div className="co-md-6">
            < div className="my-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="text" cols="20" rows="10" defaultValue="test" {...register("review")} />
                  <br/>
                   {errors.exampleRequired && <span>This field is required</span>}
                   <input type="submit" />
                </form>
                    
            </div>
            </div>

        </div>
    );
};

export default ReviewAfterBook;