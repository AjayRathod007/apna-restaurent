import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import{
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,

} from "reactstrap";


const Restaurant = ({restaurant}) => {
  let navigate= useNavigate();
console.log(restaurant.restaurantId)
  const selectRestaurant=()=>{
     axios.get('/menu/'+restaurant.restaurantId).then(
       (reponse)=>{
         console.log(reponse.data)
         toast.success(" restaurant item loaded successfully");
         
       },(error)=>{
         console.log(error);
         toast.error("something went wrong");
      }
     )
    console.log(restaurant.restaurantId)
     navigate('/allitems', { state: { RestaurantId : restaurant.restaurantId}} );
  }
  return (
    <div>
    <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{restaurant.name}</CardSubtitle>
                <CardText>{restaurant.address}</CardText>
                <Container className="text-center">
                    <Button className="btn btn-danger" onClick={()=>{
                        selectRestaurant(restaurant.restaurantId);}}>Select</Button>
                </Container>
            </CardBody>
        </Card>
    </div>
  )
}


export default Restaurant;