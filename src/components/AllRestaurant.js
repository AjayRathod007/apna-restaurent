import React, { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import base_url from "../api/BootApi";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const AllRestaurant=()=>{

    const [restaurant,setRestaurant]=useState([])
    let location = useLocation();

     useEffect(()=>{
         document.title = "All Restaurant"
         getAllRestaurantFromServer();
     },[]);

    //function to call server:

     const getAllRestaurantFromServer=()=>{
        axios.get('/address/'+location.state.Address).then(
            (response)=>{
                //sucess
                console.log(response.data);
                toast.success("restaurants have been loaded");
                setRestaurant(response.data)

            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("something went wrong");
            
            }
        );
    };
    // const selectRestaurantById=(restaurantId)=>{
    //     setRestaurant(restaurant.filter((c)=>c.restaurantId === restaurantId))
    // }
    
    return(
        <div>
            <h3>  {restaurant.length} Restaurant are avaiable in {location.state.Address} city</h3>
            {
                restaurant.length>0 ? restaurant.map((res)=><Restaurant key={res.restaurantId} restaurant={res} /> ): "NO Restaurant"
            }
        </div>



    )
}
// git remote add origin git@github.com:AjayRathod007/apnaRestaurent.git

// https://github.com/AjayRathod007/Wallet-ApplicationC

// git remote set-url origin https://github.com/AjayRathod007/apna-restaurent

// git remote set-url origin https://github.com/AjayRathod007/Restraurent-Respository

export default AllRestaurant;