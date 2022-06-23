
import React from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'
import Headings from '../Headings'
import Paragraphs from '../Paragraphs'
import Chatra from "@chatra/chatra";

const Forguarenteed = () => {
  return (
    <div>
        <Container>
        <Row className='pt-5'>
          <Col md={6} className='first px-md-5 md-5'>
             <Headings title="For guaranteed approval of 
skill assessment engineers 
take help for CDR report 
writing in Australia." align="left"  />   
<Paragraphs  data='Reduce your chance of getting rejected from EA to 0%. Professional 
writers with years of experience in CDR report writing will help you 
develop flawless CDR. Our team of expert writers are ready to assist 
you; you are one click away.' align="left"/>
<Button href='/contact-us' style={{backgroundColor:"#970012",fontWeight:"600",marginRight:"10px",border:"none"}}>
  CONTACT US
</Button>
<Button                   onClick={() => Chatra("openChat", true)}
 style={{backgroundColor:"#fff",color:"#970012",fontWeight:"600",border:"1px solid #970012"}}>
 GET INSTANT HELP
</Button>
<p style={{color:"#434343",fontWeight:"400",textAlign:'center'}}>Trusted by thousand of Engineers from around the world</p>
                    <p style={{textAlign:"center"}}> Get Instant Consultation</p>

                    </Col>
                    <Col md={6}>
                      <img src="/images/cdrwriting/approval.png" alt="Services" className='img-fluid'/>

                    </Col>
                   

        </Row>

       <h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='px-md-5 pt-5 pb-4'>Secure positive remarks on your skill assessment from Engineers Australia with  flawless CDR report writing.</h3>
      <p style={{color:"#666"}} className='px-md-5'>CDR Assessment Help ensures an impeccable CDR report based on the specific format described by Engineers Australia in the MSA booklet. 
With a high success record of Competency Demonstration Report, CDR, approval from Engineers Australia, CDRXperts provide 
the best CDR Writing Service for Engineers in Australia. Engineers Australia will review CDRreport submitted by engineering 
applicants who wish to migrate to Australia for skilled work.<br/>
Our comprehensive CDR report writing services for engineers include a detailed Curriculum Vitae, three Career Episodes (CEs), a 
Summary Statement (SS) for each CE, and Continuing Professional Development (CPD). Our reports are based on various variables, 
including your skills, expertise, work experience, academic achievements, and qualifications. We adhere to the rules set forth by the 
official assessing authorities, ensuring your positive assessment.<br/>
We have dedicated engineering teams with years of experience in CDR writing services. They&apos;ll walk you through the process and 
ensure a high approval rate from Engineers Australia. We provide high-quality non-plagiarized CDR reports. 
 </p>
      </Container>
    </div>
  )
}

export default Forguarenteed