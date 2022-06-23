import { Button } from 'react-bootstrap'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Headings from '../Headings'
import Paragraphs from '../Paragraphs'
const CDRhelpadvice = () => {
  return (
    <div>
       <Container>
           <Row className='py-md-5 my-md-5'>
               <Col md={5}>
               <div className='py-md-5 my-md-2'>
                  <Headings title="Why do you Need a CDRassessmenthelp Advice?" align="left"/>
                  <div className='pe-5 me-5 py-3'>
                  <Paragraphs data="We have professional assistance for the CDR report 
in Migration Skills Assessment from EA. 
" align="left"/> </div>
    <div className='d-flex justify-content-center justify-content-md-start'>

    <Button href='/contact-us' style={{backgroundColor:"#970012",color:"#fff"}} className="p-2 my-1">
  Hire Us
</Button>
</div>
</div>
               </Col>

               <Col md={7} >
                   <Row>
                <Col md={4} className="">
                  <img src="images/landing/rough.png" alt="Rough Report 
Structure and Format " className='img-fluid'/>
                </Col>
  
                <Col md={4} >
                   <div style={{marginTop:"-150px"}}>  <img src="images/landing/weak.png" alt="Weak Project Solution" className='advice img-fluid '/></div>
                 <div style={{marginTop:"50px"}}>    <img src="images/landing/risks.png" alt="Risks of plagiarism" className='img-fluid' /></div>
                </Col>

                <Col md={4}>

                  <img src="/images/landing/insuff.png" alt="insufficient report content" className='img-fluid'/>
                </Col>
                </Row>
               
               </Col>
           </Row>
       </Container> 

    </div>
  )
}

export default CDRhelpadvice