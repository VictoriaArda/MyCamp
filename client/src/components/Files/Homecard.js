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
        Find budget friendly destinations that won't break the bank and bring fun to your rental experience. 
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img className="card-image" variant="top" src={pic10} />
    <Card.Body>
      <Card.Title>Unique Rentals</Card.Title>
      <Card.Text>
        What to try something new? Try renting a treehouse, a villa, maybe a tiny house or air stream and so much more!
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img className="card-image" variant="top" src={pic9} />
    <Card.Body>
      <Card.Title>Top Outdoor Attractions</Card.Title>
      <Card.Text>
        Head out doors for a socially distanced adventure. Visit national parks and local attractions and stay safe while having fun.
      </Card.Text>
    </Card.Body>
   
  </Card>
</CardGroup>
    )};

export default Homecard;