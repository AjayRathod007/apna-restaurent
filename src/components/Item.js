import React from "react";

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

import axios from "axios";
import base_url from "../api/BootApi";
import { toast } from "react-toastify";


const Item=({ item,remove })=>{

    const deleteItem=(itemId)=>{
        axios.delete(`${base_url}/items/${itemId}`).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("item deleted successfully");
                remove(itemId);

            },(error)=>{
                console.log(error);
                toast.error("item not deleted !! server problem");
            }
        )


    }
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{item.itemName}</CardSubtitle>
                <CardText>{item.itemPrice}</CardText>
                <Container className="text-center">
                    <Button className="btn btn-danger" onClick={()=>{
                        deleteItem(item.itemId);
                    }}>DELETE</Button>

                    <Button className="btn btn-warning ml-3 " >ADD CART</Button>
                </Container>
            </CardBody>
        </Card>
    )

}

export default Item;