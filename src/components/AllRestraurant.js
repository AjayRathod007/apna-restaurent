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
           
    
    return(
        <div>
            <h3>total res {restaurant.length} All Restaurant of {location.state.Address} city</h3>
            {
                restaurant.length>0 ? restaurant.map((res)=><Restaurant key={res.restaurantId} restaurant={res}/> ): "NO Restaurant"
            } 
        </div>

    )
}

export default AllRestaurant;