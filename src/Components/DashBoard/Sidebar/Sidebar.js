import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList,faShoppingCart,faClipboardCheck,faCommentDots,faPlus,faUserShield,faHome} from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
const Sidebar = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const[isAdmin,setIsAdmin] = useState(false)
    useEffect(() =>{
        fetch('http://localhost:5000/isAdmin',{
            method:'POST',
            headers :{
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({email:loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    },[])
    return (
        <div className=" sidebar d-flex flex-column justify-content-between py-5 px-5 ml-0 " style={{height:'100vh'}}>
            <ul className="list-unStyled">
               
                <li>
                    <Link to ='/Book'>
                       <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
                    </Link>
                    
                </li>
                <li>
                    <Link to="/bookings/dashboard">
                        <FontAwesomeIcon icon={faClipboardCheck} /> <span>Booking List</span>
                    </Link>
                   
                </li>
                <li>
                    <Link to="/review/dashboard">
                             <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                    
                </li>
                <li>
                    <Link to="/home">
                        <FontAwesomeIcon icon={faHome}/> <span>Home</span>
                    </Link>
                </li>
               {isAdmin && <div>
                    <li>
                        <Link to="/orderList/dashboard">
                                <FontAwesomeIcon icon={faList} /> <span>OrderList</span>
                        </Link>   
                    </li>
                        <li>
                            <Link to="/addService/dashboard">
                            <FontAwesomeIcon icon={faPlus}/> <span>Add Service </span>
                            </Link>
                        
                        </li>
                        <li>
                            <Link to="/makeAdmin">
                            <FontAwesomeIcon icon={faUserShield} /> <span>Make Admin</span>
                            </Link> 
                        </li>
                    </div>}
               
            </ul>
            
        </div>
    );
};

export default Sidebar;