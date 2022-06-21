import React from 'react'
import {Button, Col, Container, Row } from 'react-bootstrap'
import Headings from '../Components/Headings'
import Paragraphs from '../Components/Paragraphs'
import {useRouter} from 'next/router'
import  Head  from 'next/head';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const CustomerTestimonial = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  const dataList=[{images:"images/testimonials/Liam.png",title:"Liam Payne"},{images:"images/testimonials/james.png",title:"James Cruff"},{images:"images/testimonials/jessica.png",title:"Jessica Williams"},{images:"images/testimonials/johnson.png",title:"Mitchell Johnson"},{images:"images/testimonials/nate.png",title:"Nate Riley"}]
  const par={tar:<p><FormatQuoteIcon/> Very impressed with their work. Detailed writing 
  without missing a thing. Very happy with the customer 
  care team. Will use your service again.Very impressed 
  with their work. Detailed writing without missing a 
  thing. Very happy with the customer care team. Will 
  use your service again.
  Very impressed with their work. Detailed writing 
  without missing a thing. Very happy with the customer 
  care team. Will use your service again. Very impressed 
  with their work. Detailed writing without missing a 
  thing. Very happy with the customer care team.</p> }
  return (
    <div>
       <Head>
        <title>Testimonials | CDR Assessment Help</title>
        <meta name="description" content="Testimonials | CDR Assessment Help"/>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Container>
        <Headings title="Testimonials"/>
        <Paragraphs data="Hundreds of our clients got positive skill assessments with the professional help of our experts. Now, it’s your turn to get a skilled migration visa.
"/>

<Row>
  <Col md={6} xs={12}>
     <img src="images/testimonials/testi.png" alt="Customer Testimonials" className='img-fluid'/>

<div className='px-md-5'><Paragraphs data={par.tar} align="ds"/></div>
<h5 style={{color:"#970012",fontFamily:"Barlow",fontWeight:"600"}}>
Jessica Williams
</h5>

  </Col>
    
  <Col md={6} xs={12} className='pt-md-5'>
  <div style={{backgroundColor:"#EBEBEB"}}> {par.tar}
</div>
<h5 style={{color:"#970012",fontFamily:"Barlow",fontWeight:"600"}}>
Mitchel Johnson
</h5>

<div style={{backgroundColor:"#EBEBEB"}}> {par.tar} </div>

<h5 style={{color:"#970012",fontFamily:"Barlow",fontWeight:"600"}}>
Nate Riley
</h5>

<div style={{backgroundColor:"#EBEBEB"}}>{par.tar} </div>

<h5 style={{color:"#970012",fontFamily:"Barlow",fontWeight:"600"}}>
James Cruff
</h5>


  </Col>
</Row>

<img src="images/testimonials/jessi.png" alt="testimonials" className='img-fluid desktopScreen' style={{height:"130px",width:"300px"}}/>
        
        <Row className='ps-md-5 ms-md-5'>
          {dataList.map((d,index) =>
           <Col md={2}xs={2} key={index} className="mx-md-3 py-5">
           <img src={d.images} alt="testimonials" className='img-fluid testimonialImages' style={{height:"130px",width:"130px"}}/>
           <h6 style={{color:"#373737",fontWeight:"600"}} className="m-3 mobileText">{d.title}</h6>
           </Col>
          )} 
         
        </Row>
        <div className='d-flex justify-content-center'>

<Button style={{background:"#970012",border:"none"}} className=""
onClick={()=>router.push("/alltestimonials")}>

    View More Reviews
</Button>

</div>  
      </Container>

      <img src="/images/testimonials/men.png" alt="Customer Testimonials" className='img-fluid' />
    </div>
  ) 
}

export default CustomerTestimonial