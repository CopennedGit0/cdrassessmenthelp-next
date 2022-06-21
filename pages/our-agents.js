import React from 'react'
import { Col, Container, Row ,Button } from 'react-bootstrap'
import {useRouter} from 'next/router'
import  Head  from 'next/head';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Meetourexperts = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  const dataList=[{image:"/images/agents/atul.png",title:`Atulya Sharma`,alt:`agents`,buttonText:`Talk with Atulya`,whatsapp:`https://api.whatsapp.com/send?phone=61482072481`,fblink:"https://www.facebook.com/cdrassessmenthelp",lnlink:"https://www.linkedin.com/feed/",instalink:"https://www.instagram.com/cdrassessmenthelp01/?hl=en"}
  ,{image:"/images/agents/hazel.png",title:`Hazel Sharma`,alt:`agents`,buttonText:`Talk with Hazel`,fblink:"https://www.facebook.com/profile.php?id=100080589983121"},{image:"/images/agents/alina.png",title:`Alina Malla`,alt:`agents`,buttonText:`Talk with Alina`,fblink:"https://www.facebook.com/profile.php?id=100080601712964"},{image:"/images/agents/sofia.png",title:`Sofia Sharma`,alt:`agents`,buttonText:`Talk with Sofia`,fblink:"https://www.facebook.com/profile.php?id=100080681929327"}
]
  return (
    <div>
<Head>
<title >Meet Our Agents | CDR Assessment Help</title>
        <meta name="description" content="Meet Our Agents | CDR Assessment Help" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Container style={{marginTop:"80px"}}>

<h4 style={{color:"#000",textAlign:"center",fontWeight:"700"}} className="p-3 mt-0 mt-md-0"> Meet Our Experts</h4>
  <Row className='p-5' >
    
          {dataList.map((d,index)=>
          <Col md={3} key={index} className="pb-4" >
          <div style={{border:"1px solid #FDFDFD ",borderRadius:"5px",boxShadow:"0px 4px 2px -2px gray"}} className="d-flex flex-column align-items-center">
          <div style={{backgroundColor:"#970012",height:"100px",width:"100%"}} >
          </div>
            <div style={{background:"#fff",marginTop:"-40px", marginLeft:"",  width:"fit-content"}}>
            
            <img src={d.image} alt={d.alt} className='img-fluid ' style={{height:"150px" }} />

            </div>
             <strong>{d.title} </strong>
             <p style={{color:"#666",textDecoration:"underline" ,textDecorationColor:"#970012",textDecorationThickness:"2px"}}>CDR Agent</p>
             <Row  className="">
             <a style={{height:"28px",width:"50px"}} href={d.fblink}><img src="/images/agents/fb.png" alt="Facebook" className='img-fluid'  /></a>

<a style={{height:"28px",width:"50px"}} href={d.lnlink}><img src="/images/agents/link.png" alt="linkdin" className='img-fluid' style={{height:"28px",width:"50px"}}/></a>
<a style={{height:"28px",width:"50px"}} href={d.instalink}><img src="/images/agents/insta.png" alt="instagram" className='img-fluid' style={{height:"28px",width:"50px"}}/></a>
</Row>
             <Button style={{color:"#970012",backgroundColor:"#DFDFDF" ,marginTop:"15px",border:"none",borderRadius:"5px",marginBottom:"10px"}}>
                <a href={`${d.whatsapp}`} style={{color:"black",textDecoration:'none'}}>
                <strong><WhatsAppIcon/> {d.buttonText}</strong>

                </a>

             </Button>
          </div>      
        </Col>
          
          )}
          
        </Row>

        
      </Container>
    </div>
  )
}

export default Meetourexperts