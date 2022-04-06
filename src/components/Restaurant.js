import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
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

  const selectRestaurant=(id)=>{
  //   axios.get('/menu/'+id).then(
  //     (reponse)=>{
  //       console.log(reponse.data)
  //     },(error)=>{
  //       console.log(error);
  //       toast.error("something went wrong");
  //     }
  //   )
  }

  return (
    <div>
    <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{restaurant.Name}</CardSubtitle>
                <CardText>{restaurant.address}</CardText>
                <Container className="text-center">
                    <Button className="btn btn-danger" onClick={()=>{
                        selectRestaurant(restaurant.restaurantId);
                    }}>Select</Button>
                </Container>
            </CardBody>
        </Card>
    </div>
  )
}


export default Restaurant;