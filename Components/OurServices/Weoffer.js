import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Weoffer = () => {
  return (
    <div>
      <Container className="pt-5">
      <h3 style={{color:"#203546",fontWeight:"700"}} className='px-md-5 py-3'>Guaranteed approval of Skill 
assessment by EA with CDR writing 
help</h3>
      <p style={{color:"#666"}} className='px-md-5'>Engineers demonstrate their engineering skills and knowledge through CDR for positive assessment from EA. Professional writers with 
years of experience in CDR writing services help engineers to achieve positive skill assessment in Australia. We offer various CDR related 
services.</p>
     

     <Row className=''>
       <Col md={3} xs={6}>
       <img src="images/services/cdrrwriting.png" alt="CDR Report Writing" className='img-fluid' />

       </Col>
       <Col md={3} xs={6}>
       <img src="images/services/cewriting.png" alt="Career Episode Writing" className='img-fluid' />

       </Col>
       <Col md={3} xs={6}>
       <img src="images/services/swriting.png" alt="Summary Statement Writing" className='img-fluid' />

       </Col>
       <Col md={3} xs={6}>
       <img src="images/services/comp.png" alt="Competency Assessment" className='img-fluid' />

       </Col>
       <Col md={3} xs={6}>
       <img src="images/services/rservice.png" alt="CDR Reviewing Service" className='img-fluid' />

       </Col>
       <Col md={3} xs={6}>
       <img src="images/services/cpdwriting.png" alt="CPD Statement Writing" className='img-fluid' />

       </Col>
       <Col md={3} xs={6}>
       <img src="images/services/plag.png" alt="Plagiarism Removal Service" className='img-fluid' />

       </Col>
       <Col md={3} xs={6}>
       <img src="images/services/rwriting.png" alt="Resume Writing" className='img-fluid' />

       </Col>
     </Row>

      </Container>
    </div>
  )
}

export default Weoffer