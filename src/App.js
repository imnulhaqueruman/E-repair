import React from 'react';
import './App.css';
import Header from './Components/Home/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Home/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Home/PrivateRoute/PrivateRoute';
import Dashboard from './Components/DashBoard/Dashboard/Dashboard';
import AddService from './Components/AddMin/AddService/AddService';
import Book from './Components/DashBoard/Book/Book';
import Bookings from './Components/DashBoard/Bookings/Bookings';
import BookList from './Components/DashBoard/BookList/BookList';
import AllBookings from './Components/AllBookings/AllBookings/AllBookings';
import ReviewAfterBook from './Components/DashBoard/ReviewAfterBook/ReviewAfterBook';
export const UserContext = createContext()
function App() {
   const[loggedInUser,setLoggedInUser] = useState({})
  return (
     <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <Router>
           <Switch>
               <Route path="/home">
                  <Home/>
               </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <PrivateRoute path="/addService/dashboard">
                 <AddService></AddService>
              </PrivateRoute>
              <PrivateRoute path="/bookings/dashboard">
                 <Bookings></Bookings>
              </PrivateRoute>
              <PrivateRoute path="/orderList/dashboard">
                  <AllBookings></AllBookings>
              </PrivateRoute>
              <PrivateRoute path="/Book/:id">
                  <Book></Book>
              </PrivateRoute>
              <PrivateRoute path="/review/dashboard">
                  <ReviewAfterBook></ReviewAfterBook>
              </PrivateRoute>
              <Route path="/login">
                  <Login></Login>
              </Route>
              <Route path="/">
                <Home />
              </Route>
             
            </Switch>
        </Router>
     </UserContext.Provider>
  );
}

export default App;
