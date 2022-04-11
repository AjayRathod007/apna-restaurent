import React, { useEffect } from 'react'
import {  useLocation } from 'react-router-dom'
import axios from 'axios';

export default function OrderCon() {
    const location = useLocation();

const orderPayLoad = {
    cartId: location.state.CartId,
    phoneNumber: location.state.PhoneNumber,
    restaurantId: location.state.RestaurantId,
    amount: location.state.TotalAmount
}

useEffect(()=>{
    console.log("orderPage")
    axios.post('/order/placeorder',orderPayLoad).then(
        (response)=>{
          console.log(response)
          console.log(response.data)
        
        },
          (error)=>{
          console.log(error);
        
       }
       );

})


  return (
    <div>Order</div>
  )
}
