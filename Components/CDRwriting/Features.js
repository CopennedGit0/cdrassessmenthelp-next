import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Features = () => {
  return (
    <div>

        <Container>
        <h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='px-md-5 pt-5'>Features of CDR report writing service for Engineers</h3>
      <p style={{color:"#666"}} className='px-md-5 pb-4' >CDRskillassessment meticulously produces an innovative CDR report that displays your academic and career track record in the 
best possible light to demonstrate your abilities, expertise, and career accomplishment. There are various aspects and methods to 
CDR Writing, which may be a difficult task for engineers. We provide multiple options and services for accurately preparing each 
of those elements. Some of our services are as follows: 
 </p>

<div className='desktop-screen'>
 <Row className='ps-3 d-flex flex-col flex-md-row justify-content-center'>
     <img src="/images/cdrwriting/wce.png" alt="writing career episodes" className='img-fluid' style={{height:"230px",width:"275px"}}/>
     <img src="/images/cdrwriting/wss.png" alt="writing a summary statement" className='img-fluid' style={{height:"230px",width:"275px"}}/>
     <img src="/images/cdrwriting/wcpd.png" alt="writing for continuing professional development" className='img-fluid' style={{height:"230px",width:"275px"}}/>
     <img src="/images/cdrwriting/cvrw.png" alt="cv resume writing" className='img-fluid' style={{height:"230px",width:"275px"}}/>
     
 
 </Row>
 
 </div>
 <div className='mobile-screen'>
 <Row className='px-5 d-flex flex-col flex-md-row justify-content-center'>
     <img src="/images/cdrwriting/wce1.png" alt="writing career episodes" className='img-fluid mb-4' />
     <img src="/images/cdrwriting/wss1.png" alt="writing a summary statement" className='img-fluid mb-4' />
     <img src="/images/cdrwriting/ep1.png" alt="writing for continuing professional development" className='img-fluid mb-4' />
     <img src="/images/cdrwriting/cvrw1.png" alt="cv resume writing" className='img-fluid mb-4' />
     
 
 </Row>
 

 </div>
        </Container>
    </div>
  )
}

export default Features