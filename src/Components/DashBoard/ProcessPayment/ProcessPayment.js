import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import SimpleCardFrom from './SimpleCardFrom';
const ProcessPayment = () => {
    const stripePromise = loadStripe('pk_test_51Ii1qaIsLNjV4XhVL4pDE9US9ErEGIm3bhyRfaSWTp69nlWxKE6Gf5BXVtwvVu4itKOoF48YmjfgtM9bl0b4SH7X00b8rR9hu6');
    return (
        <Elements stripe={stripePromise}>
         <SimpleCardFrom></SimpleCardFrom>
        </Elements>  
    );
};

export default ProcessPayment;