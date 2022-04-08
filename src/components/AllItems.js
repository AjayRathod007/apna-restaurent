import React, { useState, useEffect } from "react";
import Item from "./Item";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const AllItems=()=>{

    const [items,setItems]=useState([])
    let location = useLocation();

    useEffect(()=>{
        document.title = "All ITEMS"
        getAllItemsFromServer();
    },[]);

    //function to call server:

    const getAllItemsFromServer=()=>{
        axios.get('/menu/'+location.state.RestaurantId).then(
            (response)=>{
                //sucess
                console.log(response.data);
                toast.success("item has been loaded");
                setItems(response.data)

            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("something went wrong");
            
            }
        );
    };
           
          const removeItemById=(itemId)=>{
              setItems(items.filter((c)=>c.itemId != itemId))
          }

    

    return(
        <div>
            <h1>All ITEMS</h1>
            <p>list of item are as follows</p>
            {
                items.length>0 ? items.map((menu)=><Item key={menu.itemId} item={menu} remove={removeItemById}/>):"NO ITEMS"
            }
        </div>

    )
}

export default AllItems;