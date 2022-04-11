import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function Footer(props) {

    let navigate = useNavigate();
    console.log('footer',props);
    

    const newItemList=props.newItemList; 
    // const userInfo=JSON.parse(localStorage.getItem('userInfo'));
    // const phoneNumber=userInfo[0].phoneNumber;

    const viewCart=()=>{
        console.log('testssst');
        // axios.post('/addtocart/'+phoneNumber, newItemList).then(
        //     (reponse)=>{
        //       console.log(reponse.data)
        //       toast.success(" Your Cart Items");
        //     },(error)=>{
        //       console.log(error);
        //       toast.error("something went wrong");
        //    }
        //   )
        //localStorage.setItem('dataaaaa',JSON.stringify(newItemList));
         navigate('/cartitem', {state :{  SelectedItems : newItemList}});
    }
  return (
    <div className="row fixed-bottom">
      <button
        className="btn btn-danger col-2"
        onClick={() => { props.resetQuantity(); }}
      >
        Reset
      </button>
      <div className="col-8 bg-dark text-white text-center">
        {props.totalAmount}
      </div>
      <button className="btn btn-primary col-2" onClick={viewCart}>Add Cart</button>
    </div>
  );
}
