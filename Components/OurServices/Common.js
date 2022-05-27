import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Common = () => {
  return (
    <div>
      <Container>
      <h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='px-md-5 pt-5'>Major issues leading to rejection of 
skill assessment written without 
CDR help</h3>
      <Row className='py-4 d-flex flex-md-row  justify-content-md-center'> 
      <Col md={3} xs={6}>
      <img src="/images/services/plag.png" alt="services" className='img-fluid'/>

      </Col>
      <Col md={3} xs={6}>
      <img src="/images/services/weakpr.png" alt="services" className='img-fluid' />

      </Col>
      <Col md={3} xs={6}>
      <img src="/images/services/imrepost.png" alt="services" className='img-fluid' />

      </Col>
      <Col md={3} xs={6}>
      <img src="/images/services/inreport.png" alt="services" className='img-fluid' />

      </Col>
      </Row>

      
      </Container>
    </div>
  )
}

export default Common