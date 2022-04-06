import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Address=()=>{
const [address, setAddress]=useState({});
const [restaurent,setRestaurent]=useState([]);
let navigate= useNavigate();


const addressHandler=(e)=>{
    e.preventDefault();
    setAddress(e.target.value);
}

const submit=(e)=>{

    // axios.get('/address/'+address).then(
    //     (response)=>{
    //         console.log(response.data)
    //         setRestaurent(response.data)
    //     },(error)=>{
    //         console.log(error);
    //         toast.error("something went wrong");
    //     }
    // )
   navigate('/allrestaurant', { state: { Address : address}} );
  
}
    return(
        <div>
            <form >
        
          <label htmlFor="address" className="form-label">Address</label>
          <input onChange={addressHandler} type="text" name="address" className="form-control" id="address"  placeholder="enter address here" required/>
          <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>

        </form>
        </div>
        

    )
}

export default Address;