import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

import Sidebar from '../Sidebar/Sidebar';

const Book = () => {
    const {id} = useParams()
    const[loggedInUser,setLoggedInUser] = useContext(UserContext)
    //console.log(loggedInUser)
    const[products,setProducts] = useState({})
    const[info,setInfo] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
        .then(res =>res.json())
        .then(data =>{
            setProducts(data)
        })
    },[])
    const productDetails = {
        title:products.title,
        description:products.description,
        img:products.imageUrl
    }
    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleSubmit = data =>{
        //console.log(userData)
        
         //console.log(productDetails)
         const serviceList = {...loggedInUser, shipment:productDetails, user:info, time: new Date()}
         console.log(serviceList)
        fetch('https://rocky-everglades-73892.herokuapp.com/bookList',{
            method:'POST',
            headers :{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify(serviceList)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                alert('SuccessFull')
            }
        })

    };
    
    return (
        <section className="container-fluid row">
            <div className="col-md-3 px-0 mx-0 ">
                  <Sidebar></Sidebar>
            </div>
            <div className="col-md-6 px-5 my-5">
                    <form onSubmit={handleSubmit}>
                           <div className="mb-3">
                                <input type="text" onBlur={handleBlur}  name="name" className="form-control" placeholder="name" defaultValue="test "  />
                            </div>
                            <div className="mb-3">
                                <input type="text" onBlur={handleBlur} name="email" className="form-control" cols='20' rows="10" defaultValue="test " placeholder="Email"   />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="title" onBlur={handleBlur} className="form-control" cols='20' rows="10" defaultValue="test " placeholder="TitleName"/>
                            </div>
                            <button type="submit" className="btn btn-info" >Submit</button>
                    </form>
                    <div className="py-5">
                        <ProcessPayment></ProcessPayment>
                    </div>
            </div>

        </section>
    );
};

export default Book;