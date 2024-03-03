import React from 'react'
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Course(props) {
  return (
    <>
      <Link to={`/course/${props.id}`} style={{ textDecoration:"none" ,textDecorationStyle:"none" }}>
        <Card style={{ width: "18rem" ,textAlign:"center" }}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Text style={{color:"green"}}>{props.price}$</Card.Text>
            <Button variant="primary">Add</Button>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}
