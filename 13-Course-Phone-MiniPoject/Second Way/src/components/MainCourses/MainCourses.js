import React, { useState } from "react";
import { useParams } from "react-router-dom";
import dataCourses from "../DataCourses";
import { Container,Row,Col,Button} from "react-bootstrap";

export default function MainCourses() {
  let params = useParams();
  console.log(params);
  const findCourseId = dataCourses.find(course => params.courseId == course.id);

  return (
    <div>
        <Container>
          <Row style={{marginTop:20}}>
            <Col >
            <img src={findCourseId.image} style={{width:400 }} alt="pic" />
            </Col>
            <Col>
              <h1>{findCourseId.title}</h1>
              <span style={{marginTop:20,color:'green'}}>{findCourseId.price}$</span>
              <Button style={{marginLeft:20}} >Add</Button>
              <p style={{marginTop:30,color:'green'}}>{findCourseId.discribe}</p>
            </Col>
          </Row>
        </Container>
    </div>
  );
}
