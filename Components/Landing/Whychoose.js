import React from 'react'
import { Col, Container, Form, Row,Button } from 'react-bootstrap'
import Headings from '../Headings'
import Paragraphs from '../Paragraphs'

const Whychoose = () => {
  return (
    <div>
        <Container>
            <div className="p-md-3 p-3">
            <Headings title="CDR writing help for guaranteed 
skill assessment by EA. "/></div>
            <Paragraphs data="Positive skill assessment of CDR depends on various 
factors while writing. Most of all presentation of 
engineering skills and knowledge in the right format 
and structure is important. 
"/>

<Row className=""> 
<Col md={4} xs={6}>
<img src="/images/landing/genuine.png" alt=" 100% genuine report" className="img-fluid landinImageInMobileScreen" style={{height:"350px" ,width:"350px"}}/>

</Col>
<Col md={4} xs={6}>
<img src="/images/landing/licensed.png" alt="licensed professional" className="img-fluid landinImageInMobileScreen" style={{height:"350px",width:"350px"}}/>

</Col>
<Col md={4} xs={6}>
<img src="/images/landing/on-time.png" alt=" On-time delivery" className="img-fluid landinImageInMobileScreen" style={{height:"350px" ,width:"350px"}}/>

</Col>
<Col md={4} xs={6}>
<img src="/images/landing/writers.png" alt="Experienced Writers" className="img-fluid landinImageInMobileScreen" style={{height:"350px",width:"350px"}}/>

</Col>
<Col md={4} xs={6}>
<img src="/images/landing/report.png" alt=" Professional Report" className="img-fluid landinImageInMobileScreen" style={{height:"350px" ,width:"350px"}}/>

</Col>
<Col md={4} xs={6}>
<img src="/images/landing/best.png" alt="Best Prices" className="img-fluid landinImageInMobileScreen" style={{height:"350px",width:"350px"}}/>

</Col>
    
</Row>

<Row>
    <Col md={6} xs={12}>
      <Headings title="Save Time and Save Money for 
yourself" align='left'/>
       <img src="images/landing/save.png" alt="Save time Save Money" className="img-fluid ms-md-5 " />

    </Col>
    <Col md={6} xs={12} className="p-md-5  ">
       <Headings title="Save time.Save Money." align="left"/>
       <Headings title="Give us an opportunity" align="left"/>
       <div className="pe-5 pt-3 me-md-5 me-2">
       <Paragraphs data="Explore our CDR services with a 100% approval
rate. Get your quality CDR report prepared by 
our experienced writers from various fields of 
engineering." align="left"/>
<Form>
  <Form.Group className="mb-md-3 mb-0" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Leave us your email" />
    <div className='d-flex justify-content-center justify-content-md-start'>
    <Button style={{backgroundColor:"#970012", color:"#fff", border:"none",borderRadius:"3px"}} type="submit" className="mt-3">
    Submit
  </Button>
  </div>
    </Form.Group>
    </Form>

</div>
    </Col>
</Row>
        </Container>
    </div>
  )
}

export default Whychoose