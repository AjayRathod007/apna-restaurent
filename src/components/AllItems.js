import React, { useState, useEffect } from "react";
import Item from "./Item";
import base_url from "../api/BootApi";
import axios from "axios";
import { toast } from "react-toastify";

const AllItems=()=>{

    const [items,setItems]=useState([])

    useEffect(()=>{
        document.title = "All ITEMS"
        getAllItemsFromServer();
    },[]);

    //function to call server:

    const getAllItemsFromServer=()=>{
        axios.get('/items').then(
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
// calling loading item function

// useEffect(()=>{
//     getAllItemsFromServer();
// });
           
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