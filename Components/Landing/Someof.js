import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Headings from '../Headings'
import Paragraphs from '../Paragraphs'

const Someof = () => {
  return (
    <div>
        <Container>
            <Headings title="We offer help in writing your CDR for 
guaranteed skill assessment by EA" align="left"/>
            <Paragraphs data="Engineers demonstrate their engineering skills and 
knowledge through CDR for positive assessment from 
Engineers Australia. Professional writers with years 
of experience in CDR writing services help engineers 
to achieve positive skill assessment in Australia. We 
offer various CDR related services. 
" align="f"/>

<Row className='d-flex flex-col flex-md-row justify-content-center'>
    <img src="/images/landing/free.png" alt="free consultation" className='img-fluid' style={{height:"285px" ,width:"285px"}}/>
    <img src="/images/landing/resume.png" alt="CV-Resume Writing" className='img-fluid' style={{height:"285px" ,width:"285px"}}/>
    <img src="/images/landing/rpl.png" alt="Complete rpl package" className='img-fluid' style={{height:"285px" ,width:"285px"}}/>
    <img src="/images/landing/cdr.png" alt="CDR Reviewing" className='img-fluid' style={{height:"285px" ,width:"285px"}}/>
</Row>

        </Container>
    </div>
  )
}

export default Someof