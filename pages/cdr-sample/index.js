import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import {useRouter} from 'next/router'
import Headings from '../../Components/Headings'
import Paragraphs from '../../Components/Paragraphs'
import  Head  from 'next/head';

const CDRSamples = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
 <Head>
        <title>CDR Samples</title>
        <meta name='description' content='Download cdr report samples'/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Container>
      <Row>
<Col md={6} className='px-4  mt-5'>
       <Headings title="CDRforengineer’s CDR 
reviewing service ensures 
approval of CDR from EA" align="left"  />   
<Paragraphs  data='Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.   ' align="left"/>
<Button style={{backgroundColor:"#970012",fontWeight:"600",marginRight:"10px",border:"none"}}>
CONTACT US
</Button>
<Button style={{backgroundColor:"#fff",color:"#970012",fontWeight:"600",border:"1px solid #970012"}}>
GET INSTANT HELP
</Button>
<p style={{color:"#000",fontWeight:"500"}}>Trusted by thousand of Engineers from around the world</p>
</Col>

<Col md={6} className='mt-5'>
    <img src="/images/sample/sample.png" alt="CPD writing" className='img-fluid'/>
</Col>

<h3 style={{color:"#203546",fontWeight:"700",textAlign:"center"}} className='pt-4'>Flawless CDR report samples based on MSA guidelines</h3>

<div className='py-2 px-0'>
<p style={{color:"#666"}}  className='pe-5'>CDRskillassessment prepares CDR report samples strictly in accordance with Migration Skill Assessment guidelines published 
by EA.Before you make a decision, please go through the CDR report samples available for you to review the quality of our 
services. CDR report samples prepared by professional writers are based on a specific format described by Engineers Australia 
in the Migration Skill Assessment booklet. With a high success record of Competency Demonstration Report (CDR) approval 
from Engineers Australia, CDRskillassessment provides the best CDR report samples.
Engineers Australia will review the CDR report submitted by engineering applicants who wish to migrate to Australia for skilled 
work. We have dedicated engineering teams with years of experience in CDR writing services. They&apos;ll walk you through the process 
and ensure a high approval rate of CDR from Engineers Australia. We provide high-quality non-plagiarized CDR reports. 

</p>
</div>

<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4'>Flawless CDR report samples based on MSA guidelines</h3>
<p style={{cloor:"#666"}}>Engineers Australia uses a variety of customised papers to assess an engineer&apos;s proficiency in engineering skills and knowledge, 
management, communication, and leadership. CDR report for Engineers Australia consists of three different documents, namely:  </p>


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4'>CDR reports samples strictly in accordance with MSA guidelines by EA</h3>
<Row>
  <img src="/images/sample/1.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/2.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/3.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/4.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/5.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/6.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/7.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/8.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/9.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/10.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/11.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/12.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/13.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/14.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/15.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/16.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/17.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/18.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/19.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/20.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/21.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/22.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/23.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/24.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/25.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
  <img src="/images/sample/26.png" alt="cdr samples" className='img-fluid' style={{height:"276px",width:"276px"}} />
</Row>
</Row>    
      </Container>
    </div>
  )
}

export default CDRSamples