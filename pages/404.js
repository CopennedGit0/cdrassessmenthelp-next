import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import  Head  from 'next/head';

const NotFound = () => {
  return <Container>
    <Row>
      <Col xs={6}>
      <img src="/404.png" alt='404 not found' className="img-fluid"/>
      </Col>
      <Col xs={6} className='d-flex flex-column justify-content-center'>
         <Row>
           <h1 className='a404' style={{fontFamily:"Arial",fontSize:"100px",fontWeight:"700"}}>404</h1>
           <h3 className='sorry' style={{fontFamily:"Arial",fontSize:"34px",fontWeight:"700",color:"#B61629"}}>Sorry the Page not found</h3>
           <p className='link' style={{fontFamily:"Barlow",fontSize:"23px",fontWeight:"500"}}>The link you followed probably broken or the
            page has been removed</p>
         </Row>
       </Col>
    </Row>
  </Container>;
};

export default NotFound;
