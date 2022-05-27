import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Top = () => {
  return (
    <div>
        <Container>
             <Row>
                 <Col md={7} className="py-5">

                     <img src="images/specificblogs/writer.png" alt="blogs" className='img-fluid'/>
                 </Col>

                 <Col md={5} className="py-5 px-5">
                     <h5 style={{color:"#373737",fontWeight:"600"}}> The Need for professional writers for your 
CDR Report for the Australian immigration 
visa</h5>
<hr style={{border:"50px"}}/>
                 </Col>
             </Row>


            </Container>


    </div>
  )
}

export default Top