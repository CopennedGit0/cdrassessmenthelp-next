import React from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import Headings from '../Headings'
import Paragraphs from '../Paragraphs'

const Forengineer = () => {
  return (
    <div>
        <Container>
          <Row>
            <Col md={5} className="py-5">
                <Headings title="Professional help in CDR
 writing ensures positive skill 
assessment from EA" align="potato"/>
<Paragraphs data="Professional writers with years of experience in 
CDR writing services help engineers to achieve 
positive skill assessment in Australia. Engineers 
demonstrate their engineering skills and knowledge 
through CDR for positive assessment from EA." align="potato"/>
            

<Button style={{backgroundColor:"#970012",marginRight:'20px',fontWeight:"600",color:"#fff",borderRadius:"4px",border:"none"}}>
  Contact Us
</Button>

<Button style={{backgroundColor:"#fff",fontWeight:"600",color:"#970012",borderRadius:"4px",border:"1px solid #970012"}}>
GET INSTANT HELP
</Button>
</Col>

<Col md={7}>
  <img src="images/landing/lan.png" alt="for engineers" className='img-fluid'/>
</Col>
</Row>
        </Container>
    </div>
  )
}

export default Forengineer