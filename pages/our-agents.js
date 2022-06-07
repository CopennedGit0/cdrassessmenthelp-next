import React from 'react'
import { Col, Container, Row ,Button } from 'react-bootstrap'
import {useRouter} from 'next/router'
import  Head  from 'next/head';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Meetourexperts = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  const dataList=[{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`},{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`},{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`},{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`}
,{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`},{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`},{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`}
,{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`},{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`},{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`},{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`}
,{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`},{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`}
,{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`},{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`},{image:"/images/agents/female.png",title:`Neha Karki`,alt:`agents`}]
  return (
    <div>
<Head>
        <title>Meet Our Agents | CDR Assessment Help</title>
        <meta name="description" content="Meet Our Agents | CDR Assessment Help" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Container style={{marginBottom:""}}>
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
               <img src="/images/agents/fb.png" alt="Facebook" className='img-fluid' style={{height:"28px",width:"50px"}}/>
               <img src="/images/agents/tweet.png" alt="Facebook" className='img-fluid' style={{height:"28px",width:"50px"}}/>
               <img src="/images/agents/link.png" alt="Facebook" className='img-fluid' style={{height:"28px",width:"50px"}}/>
               <img src="/images/agents/insta.png" alt="Facebook" className='img-fluid' style={{height:"28px",width:"50px"}}/>
             </Row>
             <Button style={{color:"#970012",backgroundColor:"#DFDFDF" ,marginTop:"15px",border:"none",borderRadius:"5px",marginBottom:"10px"}}>
                <a href='https://api.whatsapp.com/send?phone=61482072481' style={{color:"black",textDecoration:'none'}}>
                <strong><WhatsAppIcon/> Talk with Anna </strong>

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