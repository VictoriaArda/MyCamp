import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Card, CardGroup} from "react-bootstrap";
import "../Style/homecard.css";
import pic8 from "../Files/projectpics/pic8.jpg";
import pic9 from "../Files/projectpics/pic9.jpg";
import pic10 from "../Files/projectpics/pic10.jpg";




const Homecard = () => {
    return (

<CardGroup className ="card-body">
  <Card >
    <Card.Img className="card-image" variant="top" src={pic8} />
    <Card.Body>
      <Card.Title>Affordable Destinations</Card.Title>
      <Card.Text>
        Budget friendly destination for 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img className="card-image" variant="top" src={pic10} />
    <Card.Body>
      <Card.Title>Unique Rentals</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img className="card-image" variant="top" src={pic9} />
    <Card.Body>
      <Card.Title>Top Outdoor Attractions</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
   
  </Card>
</CardGroup>
    )};

export default Homecard;