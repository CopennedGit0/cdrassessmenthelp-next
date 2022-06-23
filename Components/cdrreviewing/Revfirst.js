import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import Headings from '../Headings'
import Paragraphs from '../Paragraphs'

const Revfirst = () => { 
  return (
    <div>

<Container>
          <Row>
            <Col md={5} className="py-5">
                <Headings title="CDR assessment help ’s CDR reviewing 
service ensures approval 
of CDR from EA" align="potato"/>
<Paragraphs data="Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.      " align="potato"/>
            

<Button style={{backgroundColor:"#970012",fontWeight:"600",color:"#fff",borderRadius:"4px",border:"none"}}>
  Contact Us
</Button>
<Button style={{backgroundColor:"#fff",marginLeft:'10px',color:"#970012",fontWeight:"600",border:"1px solid #970012"}}>
GET INSTANT HELP
</Button>
<p className='text-center text-md-start' style={{color:"#434343",fontWeight:"400"}}>Trusted by thousand of Engineers from around the world</p>

</Col>

<Col md={7}>
  <img src="/images/cdrreviewing/revfirst.png" alt="cdr reviewing" className='img-fluid'/>
</Col>
</Row>

<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4'>Engineers in Australia use our CDR reviewing Service for guaranteed Assessment</h3>

<div className='py-md-2 px-0'>
<p style={{color:"#666"}}  className='pe-5'>In the domain of services related to CDR report, CDR reviewing services for Engineers Australia&apos;s Migration Skills Assessment process
from CDR  assessment help  is in high demand. Engineers turn up empty-handed from Engineers Australia after presenting their CDR report without 
reviewing it.  Preparation Continuing Professional Development (CPD), a compilation of all three Career Episodes and Summary 
Statement, is not enough to get the desired result from EA. Even after editing and proofreading, one might want to have their CDR 
reviewed to ensure the quality of the CDR report and prevent CDR rejection in any regard from Engineers Australia. Experts at CDR assessment help  
provide an experienced CDR Reviewing service to avoid rejection from Engineers Australia, backed by our years of experience 
preparing CDR for hundreds of clients.<br/>
In our service of reviewing CDR for engineers in Australia, we pay close attention to various factors and ensure that no stone is left 
unturned in ensuring that your CDR report is of the most excellent quality. There are a variety of reasons why CDR gets rejection by 
EA. The use of irregular tables, computations, copying content from pre-published resources, neglecting minute aspects of the firm, 
missing the project objectives, or misrepresenting engineering activities in the career episode are causes of CDR rejection. Skilled 
writers with numerous CDR reports approved by Engineers Australia, are ready to review your already completed Career Episodes, 
Summary Statements, and Continuing Professional Documents (CPD). We provide you with a CDR using processes such as plagiarism 
detection and removal, proofreading, and editing.<br/>
We have dedicated engineering teams with years of experience in CDR Reviewing Service for engineers in Australia. They&apos;ll walk you 
through the process and ensure a high approval rate from Engineers Australia. We provide high-quality non-plagiarized CDR reports. 
.</p>
</div>
     


<h3 style={{color:"#000",fontWeight:"700",textAlign:"center"}} className='px-0 pt-md-5 ms-0'>Want to know more? Our experts will clear your Doubt</h3>
      <p style={{color:"#666",textAlign:"center"}} className='px-3 pb-2 ms-0'>We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel 
free to contact our experts.
</p>
<div className='d-flex justify-content-center '>
<Button href='/contact-us' style={{backgroundColor:"#970012",fontWeight:"600",color:"#fff",borderRadius:"4px",border:"none"}}>
    Contact an Expert
    </Button> 
    </div>
 

        </Container>
    </div>
  )
}

export default Revfirst