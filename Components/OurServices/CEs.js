import { Button } from 'react-bootstrap'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Headings from '../Headings'
import Paragraphs from '../Paragraphs'

const CEs = () => {
  const router=useRouter()
  const cardContent = [
    {
      images: "/images/services/highly.png",
      title: "Highly Experienced Specific Engineering",
      data:`
      Experienced writers at your 
      disposal to provide you with 
      a plagiarism-free report.`,
    },
    {
      images: "/images/services/rate.png",
      title: "100% Approval Rate",
      data: `
      Prominent service provider 
      that guarantees your positive 
      report approval from EA.`,
    },
    {
      images: "/images/services/ontime.png",
      title: "On Time Delivery",
      data: `
      Proper structure and format 
      of CDR report delivered on 
      scheduled time.`,
    },
    {
      images: "/images/services/reason.png",
      title: "Reasonable Price",
      data: `Reasonable Price
      Original content following 
      all the guidelines provided 
      at an affordable price. `,
    },
  ];
  return (
    <div>
      <Container className='pt-5'>
      <div>
        <Row>
          <Col xs={12} className='pt-5 '>
            <h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='px-md-5'>Few steps before you get your 
flawless CDR delivered</h3>

<div className='py-4 px-md-5'>
<p style={{color:"#666"}} >We offer flawless CDR reports with genuine and 
plagiarism-free content. Professional writers 
follow the guidelines and format of skill assessment 
mentioned in EA's MSA booklet while writing the CDR 
report. Professional writers with years of experience 
providing help in CDR writing for engineers’ skill 
assessment in Australia devote considerable effort 
to preparing the CDR report. 
</p>
     
            </div>        
            
          </Col>
          
        </Row>
        <Row className='desktopScreen'>
           <Col md={3} xs={12} className='my-2 '>
            <img src="/images/services/image.png" style={{height:'300px'}} className='img-fluid'/>
           </Col>
           <Col md={3} xs={12} className='my-2 px-md-0'>
           <img src="/images/services/image1.png" style={{height:'300px'}} className='img-fluid'/>

             </Col>
           <Col md={3} xs={12} className='my-2 pe-md-3'>
           <img src="/images/services/image2.png" style={{height:'300px'}} className='img-fluid'/>

             </Col>
           <Col md={3} xs={12} className='my-2 px-md-1'>
           <img src="/images/services/image3.png" style={{height:'300px'}} className='img-fluid'/>

             </Col>
        </Row>
        <Row className='mobileScreen'>
           <Col md={3} xs={12} className='my-2 '>
            <img src="/images/services/image.png"  className='img-fluid'/>
           </Col>
           <Col md={3} xs={12} className='my-2 '>
           <img src="/images/services/image1.png"  className='img-fluid'/>

             </Col>
           <Col md={3} xs={12} className='my-2 '>
           <img src="/images/services/image2.png"  className='img-fluid'/>

             </Col>
           <Col md={3} xs={12} className='my-2 '>
           <img src="/images/services/image3.png" className='img-fluid'/>

             </Col>
        </Row>
        <Row>
          <Col xs={12} className='pt-5 '>
            <h3 style={{color:"#203546",fontWeight:"700",textAlign:"center"}} className='px-md-5'>Professional help in CDR writing 
ensures positive skill assessment
from EA</h3>

<div className='py-4 px-md-5'>
<p style={{color:"#666"}} >Professional writers with years of experience in CDR 
writing services help engineers to achieve positive 
skill assessment in Australia. Engineers demonstrate 
their engineering skills and knowledge through CDR 
for positive assessment from Engineers Australia.
</p>
     
            </div>        
            
          </Col>
          <div className='d-flex justify-content-center justify-content-md-center'>

<Button style={{backgroundColor:"#970012",color:"#fff"}} className="p-2 my-1" onClick={()=>router.push('/pricing')}>
  Check Pricing
</Button>
</div> 
        </Row>
      </div>

      </Container>
    </div>
  )
}

export default CEs