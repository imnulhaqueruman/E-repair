import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import Nav from '../../Shared/Navbar/Nav';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const history = useHistory()
    const location = useLocation()

    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)
    const handleGoogleSignIn = () =>{
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result)
          const{displayName,email,photoURL} = result.user;
          const signedInUser = {name:displayName,email,photoURL}
          setLoggedInUser(signedInUser);
          history.replace(from)
       
        
        })
       
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            
            
        });
            }
        
    return (
        <div  className="justify-content-center">
           <Nav></Nav>
           <div className="d-flex my-5 mx-5 justify-content-center ms-auto">
                <h1 className='text-primary'> Sign in With Google</h1>
                <button className="btn btn-primary mx-5" onClick={handleGoogleSignIn}>Google Sign in </button>
           </div>
            
        </div>
    );
};

export default Login;