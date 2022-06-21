import React, { useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Paragraphs from '../Components/Paragraphs'
import {useRouter} from 'next/router'
import  Head  from 'next/head';

const Pricing = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  const [firstActive,setFirstActive]=useState("first");
  const [secondActive,setSecondActive]=useState("second");
  const [thirdActive,setThirdActive]=useState("third");
  const [fourthActive,setFourthActive]=useState("fourth");
  return (
    <div>
<Head>

        <title>Pricing | CDR Assessment Help</title>
        <meta name="description" content="Pricing | CDR Assessment Help" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Container className='pb-3 pt-3 pt-md-0' style={{}}>
        <h2 style={{color:"#970012",textAlign:"center",fontWeight:"700"}} className="p-3 mt-5 mt-md-0"> Pricing</h2>
       <div className='px-md-5 pb-4'> <Paragraphs data="Though you might not find us the cheapest CDR Report Writing Service out there but we can promise you that we are the best value for 
money. We are professional CDR writers (and not some greedy company) who have come together to form this service. Since we are just 
like you, we have kept the prices appropriately." align="dkf"/>
        </div>
        <Row className='desktopScreen'>
        {firstActive==="first"   ?

          
        <Col md={3} xs={6} className='px-1'>
          <div style={{backgroundColor:"#E79E54",borderRadius:'10px',height:"500px"}}>
            <img src="images/Pricing/basic.png" alt="basic pricing" className='img-fluid' style={{height:"320px"}} />
              <div style={{marginTop:"-40px"}}>
              <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center",fontSize:'20px'}} className="pb-0">BASIC</h3> 
              <div className='d-flex justify-content-center'><div style={{color:"#fff",fontWeight:"700",textAlign:"center",display:'flex'}} className="py-2"><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>475</span> </div>  </div>
             <p style={{color:"#fff",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'20px'}}>Delivered within 14 Days</p>
              </div>
          </div>
          <Button 
          onClick={()=>setFirstActive("")}
          style={{color:"#fff",outline:"none",background:"#F3AE68",fontWeight:"500",border:"#fff",width:'100%',marginTop:'-50px'}}>
            View Features
          </Button>
          <Button style={{backgroundColor:"#E79E54",outline:"none",color:"white",width:"100%",fontWeight:"700",fontSize:"25px",border:"none"}} >
                 Buy Now
              </Button>
        </Col>

        :

        <Col>
           <div style={{backgroundColor:"#E79E54",borderRadius:'10px',height:"570px",width:"330"}}>
           
           <Button 
              onClick={()=>setFirstActive("first")}
              style={{background:"#FFD0A1" ,color:"#fff",paddingRight:"100px",paddingLeft:"100px",border:"none",fontWeight:"500"}}>
                <strong>Close Features</strong>
              </Button>

              <ul style={{color:"#fff",fontSize:"18px", alignItems:"center"}} className="pt-5">
              <li>3 Career Episode</li>
              <li>Summary Statement</li>
              <li>CPD</li>
              <li>Delivery Date</li>
              <li>Quality Assured</li>
              <li>Plagiarism Free Reports</li>
              <li>Professional Writers</li>
              <li>File Status Update</li>
              <li>Handling Unlimited</li>
              <li>Comments from EA</li>
              <li>Review of CLients Project</li>
            </ul>


           </div>
        </Col>
}

{secondActive==="second" ?

        <Col md={3} xs={6} className='px-1'>
          <div style={{backgroundColor:"#38A559",borderRadius:'10px',height:"500px"}}>
            <img src="images/Pricing/extended.png" style={{marginTop:"43px",width:"240px"}} alt="basic pricing" className='img-fluid ms-5 pt-5'/>
              <div style={{padding:"50px 10px 0px 10px"}}>
              <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center",fontSize:'20px'}} className="pb-0">STANDARD</h3> 
              <div className='d-flex justify-content-center'><div style={{color:"#fff",fontWeight:"700",textAlign:"center",display:'flex'}} className="py-2"><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>675</span> </div>  </div>
             <p style={{color:"#fff",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'20px'}}>Delivered within 10 Days</p>
              </div>
          </div>
          <Button 
          onClick={()=>setSecondActive("")}
          style={{color:"#fff",outline:"none",background:"#49B068",fontWeight:"500",border:"#fff",width:'100%',marginTop:'-50px'}}>
            View Features
          </Button>
          <Button style={{backgroundColor:"#38A559",outline:"none",color:"white",width:"100%",fontWeight:"700",fontSize:"25px",border:"none"}} >
                 Buy Now
              </Button>
        </Col>

        :

        <Col>
           <div style={{backgroundColor:"#38A559",borderRadius:'10px',height:"570px",width:"330"}}>
           
           <Button 
              onClick={()=>setSecondActive("second")}
              style={{background:"#49B068" ,color:"#fff",paddingRight:"100px",paddingLeft:"100px",border:"none",fontWeight:"500"}}>
                <strong>Close Features</strong>
              </Button>

              <ul style={{color:"#fff",fontSize:"18px",}} className="pt-5">
  <li>3 Career Episode</li>
  <li>Summary Statement</li>
  <li>CPD</li>
  <li>Delivery Date</li>
  <li>Quality Assured</li>
  <li>Plagiarism Free Reports</li>
  <li>Professional Writers</li>
  <li>File Status Update</li>
  <li>Handling Unlimited</li>
  <li>Comments from EA</li>
  <li>Review of CLients Project</li>
</ul>


              </div>

        </Col>
}

{thirdActive==="third"  ?
        <Col md={3} xs={6} className='px-1'>
          <div style={{backgroundColor:"#753CAD",borderRadius:'10px',height:"500px"}}>
            <img src="images/Pricing/premium.png" alt="basic pricing" className='img-fluid ms-5' style={{width:"200px",height:"250px",paddingTop:"40px"}}/>
              <div style={{paddingTop:'35px'}}>
              <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center",fontSize:'20px'}} className="pb-0">COMPREHENSIVE</h3> 
              <div className='d-flex justify-content-center'><div style={{color:"#fff",fontWeight:"700",textAlign:"center",display:'flex'}} className="py-2"><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>975</span> </div>  </div>
             <p style={{color:"#fff",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'20px'}}>Delivered within 6 Days</p>
              </div>
          </div>
          <Button 
          onClick={()=>setThirdActive("")}
          style={{color:"#fff",outline:"none",background:"#7D44B5",fontWeight:"500",border:"#fff",width:'100%',marginTop:'-50px'}}>
            View Features
          </Button>
          <Button style={{backgroundColor:"#753CAD",outline:"none",color:"white",width:"100%",fontWeight:"700",fontSize:"25px",border:"none"}} >
                 Buy Now
              </Button>
        </Col>

        :
        <Col>
        <div style={{backgroundColor:"#753CAD",borderRadius:'10px',height:"570px",width:"330"}}>
        
        <Button 
           onClick={()=>setThirdActive("third")}
           style={{background:"#7D44B5" ,color:"#fff",paddingRight:"100px",paddingLeft:"100px",border:"none",fontWeight:"500"}}>
             <strong>Close Features</strong>
           </Button>

           <ul style={{color:"#fff",fontSize:"18px",}} className="pt-5">
           <li>3 Career Episode</li>
  <li>Summary Statement</li>
  <li>CPD</li>
  <li>Delivery Date</li>
  <li>Quality Assured</li>
  <li>Plagiarism Free Reports</li>
  <li>Professional Writers</li>
  <li>File Status Update</li>
  <li>Handling Unlimited</li>
  <li>Comments from EA</li>
  <li>Review of CLients Project</li>
  <li>EA Portal Upload</li>
  <li>Documentation Guideline Help</li>
</ul>


           </div>

     </Col>
}

{fourthActive==="fourth"  ?

        <Col md={3} xs={6} className='px-1'>
          <div style={{backgroundColor:"#CF4D30",borderRadius:'10px',height:"500px"}}>
            <img src="images/Pricing/royal.png" style={{height:'250px',marginLeft:'60px',paddingTop:"60px"}} alt="basic pricing" className='img-fluid'/>
              <div style={{paddingTop:'35px'}}>
              <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center",fontSize:'20px'}} className="pb-0">EVERYTHING PLUS</h3> 
              <div className='d-flex justify-content-center'><div style={{color:"#fff",fontWeight:"700",textAlign:"center",display:'flex'}} className="py-2"><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>1275</span> </div>  </div>
             <p style={{color:"#fff",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'20px'}}>Delivered within 4 Days</p>
              </div>
          </div>
          <Button 
          onClick={()=>setFourthActive("")}
          style={{color:"#fff",outline:"none",background:"#E05637",fontWeight:"500",border:"#fff",width:'100%',marginTop:'-50px'}}>
            View Features
          </Button>
          <Button style={{backgroundColor:"#CF4D30",outline:"none",color:"white",width:"100%",fontWeight:"700",fontSize:"25px",border:"none"}} >
                 Buy Now
              </Button>
        </Col>

        :
        <Col>
        <div style={{backgroundColor:"#CF4D30",borderRadius:'10px',height:"570px",width:"330"}}>
        
        <Button 
           onClick={()=>setFourthActive("fourth")}
           style={{background:"#E05637" ,color:"#fff",paddingRight:"100px",paddingLeft:"100px",border:"none",fontWeight:"500"}}>
             <strong>Close Features</strong>
           </Button>

           <ul style={{color:"#fff",fontSize:"18px",}} className="pt-5">
           
  <li>3 Career Episode</li>
  <li>Summary Statement</li>
  <li>CPD</li>
  <li>Delivery Date</li>
  <li>Quality Assured</li>
  <li>Plagiarism Free Reports</li>
  <li>Professional Writers</li>
  <li>File Status Update</li>
  <li>Handling Unlimited</li>
  <li>Comments from EA</li>
  <li>Review of CLients Project</li>
  <li>EA Portal Upload</li>
  <li>Documentation Guideline Help</li>
  <li>Rewrite any project</li>
  <li>upon EA comment</li>
  <li>3 Reports Inclusive</li>
</ul>



           </div>

     </Col>
}
        </Row>
        <div className='mobileScreen'>
          <Row className='mb-3 '>

{firstActive==="first"   ?

          <Col  xs={6} className='px-1'>
          <div style={{backgroundColor:"#E79E54",borderRadius:'10px'}}>
            <img src="images/Pricing/basic.png" alt="basic pricing" className='img-fluid' />
              <div style={{marginTop:"-40px"}}>
              <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center",fontSize:'20px'}} className="pb-0">BASIC</h3> 
              <div className='d-flex justify-content-center'><div style={{color:"#fff",fontWeight:"700",textAlign:"center",display:'flex'}} className="py-2"><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>475</span> </div>  </div>
             <p style={{color:"#fff",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'20px'}}>Delivered within 14 Days</p>
              </div>
          </div>
          <Button 
          onClick={()=>setFirstActive("")}
          style={{color:"#fff",outline:"none",background:"#F3AE68",fontWeight:"500",border:"#fff",width:'100%',marginTop:'-50px'}}>
            View Features
          </Button>
          <Button style={{backgroundColor:"#E79E54",outline:"none",color:"white",width:"100%",fontWeight:"700",fontSize:"25px",border:"none"}} >
                 Buy Now
              </Button>
        </Col>

         :

         <Col>
             <div style={{backgroundColor:"#E79E54",borderRadius:'10px',height:"400px",width:"180px"}}>
           
           <Button 
              onClick={()=>setFirstActive("first")}
              style={{background:"#FFD0A1" ,color:"#fff",paddingRight:"40px",paddingLeft:"40px",border:"none",fontWeight:"500"}}>
                <strong>Close Features</strong>
              </Button>

              <ul style={{color:"#fff",fontSize:"14px", alignItems:"center"}} className="pt-5">
              <li>3 Career Episode</li>
              <li>Summary Statement</li>
              <li>CPD</li>
              <li>Delivery Date</li>
              <li>Quality Assured</li>
              <li>Plagiarism Free Reports</li>
              <li>Professional Writers</li>
              <li>File Status Update</li>
              <li>Handling Unlimited</li>
              <li>Comments from EA</li>
              <li>Review of CLients Project</li>
            </ul>


           </div>
         </Col>
}

{secondActive==="second"   ?  
        <Col xs={6} className='px-1'>
          <div style={{backgroundColor:"#38A559",borderRadius:'10px',height:"400px"}}>
            <img src="images/Pricing/extended.png" style={{marginTop:"43px",marginLeft:'30px',height:'100px'}} alt="basic pricing" className='img-fluid pt-3'/>
              <div style={{padding:"14px 10px 0px 10px"}}>
              <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center",fontSize:'20px'}} className="pb-0">STANDARD</h3> 
              <div className='d-flex justify-content-center'><div style={{color:"#fff",fontWeight:"700",textAlign:"center",display:'flex'}} className="py-2"><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>675</span> </div>  </div>
             <p style={{color:"#fff",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'20px'}}>Delivered within 10 Days</p>
              </div>
          </div>
          <Button 
          onClick={()=>setSecondActive("")}
          style={{color:"#fff",outline:"none",background:"#49B068",fontWeight:"500",border:"#fff",width:'100%',marginTop:'-50px'}}>
            View Features
          </Button>
          <Button style={{backgroundColor:"#38A559",outline:"none",color:"white",width:"100%",fontWeight:"700",fontSize:"25px",border:"none"}} >
                 Buy Now
              </Button>
        </Col>
          :

          <Col>
          <div style={{backgroundColor:"#38A559",borderRadius:'10px',height:"400px",width:"180px"}}>
        
        <Button 
           onClick={()=>setSecondActive("second")}
           style={{background:"#49B068" ,color:"#fff",paddingRight:"40px",paddingLeft:"40px",border:"none",fontWeight:"500"}}>
             <strong>Close Features</strong>
           </Button>

           <ul style={{color:"#fff",fontSize:"14px", alignItems:"center"}} className="pt-5">
           <li>3 Career Episode</li>
           <li>Summary Statement</li>
           <li>CPD</li>
           <li>Delivery Date</li>
           <li>Quality Assured</li>
           <li>Plagiarism Free Reports</li>
           <li>Professional Writers</li>
           <li>File Status Update</li>
           <li>Handling Unlimited</li>
           <li>Comments from EA</li>
           <li>Review of CLients Project</li>
         </ul>


        </div>
      </Col>
}
      
     {thirdActive==="third"  ?     
        <Col xs={6} className='px-1'>
          <div style={{backgroundColor:"#753CAD",borderRadius:'10px',height:"428px"}}>
            <img src="images/Pricing/premium.png" alt="basic pricing" className='img-fluid pt-5' style={{height:"150px",marginLeft:"40px"}} />
              <div style={{paddingTop:'35px'}}>
              <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center",fontSize:'20px'}} className="pb-0">COMPREHENSIVE</h3> 
              <div className='d-flex justify-content-center'><div style={{color:"#fff",fontWeight:"700",textAlign:"center",display:'flex'}} className="py-2"><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>975</span> </div>  </div>
             <p style={{color:"#fff",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'20px'}}>Delivered within 14 Days</p>
              </div>
          </div>
          <Button 
          onClick={()=>setThirdActive("")}
          style={{color:"#fff",outline:"none",background:"#7D44B5",fontWeight:"500",border:"#fff",width:'100%',marginTop:'-50px'}}>
            View Features
          </Button>
          <Button style={{backgroundColor:"#753CAD",outline:"none",color:"white",width:"100%",fontWeight:"700",fontSize:"25px",border:"none"}} >
                 Buy Now
              </Button>
        </Col>

          :

          <Col>
          <div style={{backgroundColor:"#753CAD",borderRadius:'10px',height:"500px",width:"180px"}}>
        
        <Button 
           onClick={()=>setThirdActive("third")}
           style={{background:"#7D44B5" ,color:"#fff",paddingRight:"40px",paddingLeft:"40px",border:"none",fontWeight:"500"}}>
             <strong>Close Features</strong>
           </Button>

           <ul style={{color:"#fff",fontSize:"14px", alignItems:"center"}} className="pt-5">
           <li>Summary Statement</li>
  <li>CPD</li>
  <li>Delivery Date</li>
  <li>Quality Assured</li>
  <li>Plagiarism Free Reports</li>
  <li>Professional Writers</li>
  <li>File Status Update</li>
  <li>Handling Unlimited</li>
  <li>Comments from EA</li>
  <li>Review of CLients Project</li>
  <li>EA Portal Upload</li>
  <li>Documentation Guideline Help</li>
         </ul>


        </div>
      </Col>
}

{fourthActive==="fourth" ?  

        <Col  xs={6} className='px-1'>
          <div style={{backgroundColor:"#CF4D30",borderRadius:'10px',height:"428px"}}>
            <img src="images/Pricing/royal.png" style={{height:'150px',marginLeft:'40px'}} alt="basic pricing" className='img-fluid pt-5'/>
              <div style={{paddingTop:'35px'}}>
              <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center",fontSize:'20px'}} className="pb-0">EVERYTHING PLUS</h3> 
              <div className='d-flex justify-content-center'><div style={{color:"#fff",fontWeight:"700",textAlign:"center",display:'flex'}} className="py-2"><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>1275</span> </div>  </div>
             <p style={{color:"#fff",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'20px'}}>Delivered within 4 Days</p>
              </div>
          </div>
          <Button 
          onClick={()=>setFourthActive("")}
          style={{color:"#fff",outline:"none",background:"#E05637",fontWeight:"500",border:"#fff",width:'100%',marginTop:'-50px'}}>
            View Features
          </Button>
          <Button style={{backgroundColor:"#CF4D30",outline:"none",color:"white",width:"100%",fontWeight:"700",fontSize:"25px",border:"none"}} >
                 Buy Now
              </Button>
        </Col>
        :

        <Col>
        <div style={{backgroundColor:"#CF4D30",borderRadius:'10px',height:"530px",width:"180px"}}>
      
      <Button 
         onClick={()=>setFourthActive("fourth")}
         style={{background:"#E05637" ,color:"#fff",paddingRight:"40px",paddingLeft:"40px",border:"none",fontWeight:"500"}}>
           <strong>Close Features</strong>
         </Button>

         <ul style={{color:"#fff",fontSize:"14px", alignItems:"center"}} className="pt-5">
         <li>3 Career Episode</li>
  <li>Summary Statement</li>
  <li>CPD</li>
  <li>Delivery Date</li>
  <li>Quality Assured</li>
  <li>Plagiarism Free Reports</li>
  <li>Professional Writers</li>
  <li>File Status Update</li>
  <li>Handling Unlimited</li>
  <li>Comments from EA</li>
  <li>Review of CLients Project</li>
  <li>EA Portal Upload</li>
  <li>Documentation Guideline Help</li>
  <li>Rewrite any project</li>
  <li>upon EA comment</li>
  <li>3 Reports Inclusive</li>
       </ul>


      </div>
    </Col>

}

        </Row>
       
        </div>
        {/* <Row>
          {firstActive==="first" 
          
          ?
        
          <Col md={3}>
          <div style={{backgroundColor:"#E79E54",height:"620px",width:"250px"}}>
            <img src="images/Pricing/basic.png" alt="basic pricing" className='img-fluid'/>
              <div style={{marginTop:"-30px"}}>
              <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center"}} className="pb-3">BASIC</h3> 
              <p style={{color:"#fff",fontWeight:"500",textAlign:"center"}}>This is regular thing that we stay here This is regular thing that we stay here. This is regular thing that we stay here This is regular thing that we stay here. This is regular thing that we stay here This is regular thing that we stay here.</p>
              <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center"}} className="py-3">$ 699/month</h3>  
              <Button style={{backgroundColor:"#fff", borderRadius:"20px",color:"#E79E54",fontWeight:"700",fontSize:"25px",marginLeft:"60px",border:"none"}} >
                 Buy Now
              </Button>
              </div>
          </div>
          <Button 
          onClick={()=>setFirstActive("")}
          style={{color:"#fff",background:"#E79E54",fontWeight:"500",paddingRight:"76px",paddingLeft:"76px",border:"#fff"}}>
            View Features
          </Button>

        </Col>
        :
        <Col>
            <div style={{backgroundColor:"#E79E54",height:"620px",width:"250px"}}>
              <Button 
              onClick={()=>setFirstActive("first")}
              style={{background:"#FFD0A1" ,color:"#E79E54",paddingRight:"75px",paddingLeft:"70px",border:"none",fontWeight:"500"}}>
                <strong>Close Features</strong>
              </Button>
            <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center"}} className="py-5">BASIC</h3>
            <ul style={{color:"#fff",fontSize:"18px",}}>
              <li>3 Career Episode</li>
              <li>Summary Statement</li>
              <li>CPD</li>
              <li>Delivery Date</li>
              <li>Quality Assured</li>
              <li>Plagiarism Free Reports</li>
              <li>Professional Writers</li>
              <li>File Status Update</li>
              <li>Handling Unlimited</li>
              <li>Comments from EA</li>
              <li>Review of CLients Project</li>
            </ul>

            </div>

        </Col>
        }
         
{secondActive==="second"?

<Col md={3}>
<div style={{backgroundColor:"#017CC9",height:"620px",width:"250px",}} >
  <img src="images/Pricing/extended.png" alt="basic pricing" className='img-fluid'style={{height:"140px",width:"200px",marginLeft:"20px",marginTop:"30px"}}/>
    <div style={{marginTop:"",padding:"50px 10px 0px 10px",marginTop:""}}>
    <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center",paddingTop:""}} className="pb-0 ">EXTENDED</h3> 
    <p style={{color:"#fff",fontWeight:"500",textAlign:"center"}}className="">CDRforengineer is also known for Best CDR writing and reviewing Services in Australia. We are Result-oriented service providers who always focus on Quality and Affordable prices. Our Experts Writers are always eager to help with Best </p>
    <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center"}} className="py-3">$ 899/month</h3>  
    <Button style={{backgroundColor:"#fff", borderRadius:"20px",color:"#E79E54",fontWeight:"700",fontSize:"25px",marginLeft:"40px",border:"none"}} >
       Buy Now
    </Button>
    </div>
</div>
<Button 
onClick={()=>setSecondActive("")}
style={{color:"#fff",background:"#017CC9",fontWeight:"500",paddingRight:"76px",paddingLeft:"76px",border:"#fff"}}>
  View Features
</Button>

</Col>
:
<Col>
<div style={{backgroundColor:"#017CC9",height:"620px",width:"250px"}}>
  <Button 
  onClick={()=>setSecondActive("second")}
  style={{background:"#6AC0F5" ,color:"#017CC9",paddingRight:"75px",paddingLeft:"70px",border:"none",fontWeight:"500"}}>
    <strong>Close Features</strong>
  </Button>
<h3 style={{color:"#fff",fontWeight:"700",textAlign:"center"}} className="py-5">EXTENDED</h3>
<ul style={{color:"#fff",fontSize:"18px",}}>
  <li>3 Career Episode</li>
  <li>Summary Statement</li>
  <li>CPD</li>
  <li>Delivery Date</li>
  <li>Quality Assured</li>
  <li>Plagiarism Free Reports</li>
  <li>Professional Writers</li>
  <li>File Status Update</li>
  <li>Handling Unlimited</li>
  <li>Comments from EA</li>
  <li>Review of CLients Project</li>
</ul>

</div>

</Col>
}
         {thirdActive==="third" ? 
          <Col md={3}>
          <div style={{backgroundColor:"#753CAD",height:"620px",width:"250px",padding:"50px 0px 20px 0px"}} >
            <img src="images/Pricing/premium.png" alt="basic pricing" className='img-fluid' style={{height:"140x",width:"160px" ,marginLeft:"30px"}}/>
              <div style={{marginTop:"0px"}}>
              <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center"}} className="pt-5">PREMIUM</h3> 
              <p style={{color:"#fff",fontWeight:"500",textAlign:"center"}}>Our main aim is to see our client’s approval for a well-formed report that adheres to the proper guidelines created for the migrants. CDRReportWriters offers high-quality service at an affordable price to ensure complete customer satisfaction</p>
              <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center"}} className="py-3">$ 1199/month</h3>  
              <Button style={{backgroundColor:"#fff", borderRadius:"20px",color:"#E79E54",fontWeight:"700",fontSize:"25px",marginLeft:"60px",border:"none"}} >
                 Buy Now
              </Button>
              </div>
          </div>
          <Button 
          onClick={()=>setThirdActive("")}
          
          style={{color:"#fff",background:"#753CAD",fontWeight:"500",paddingRight:"76px",paddingLeft:"76px",border:"#fff"}}>
            View Features
          </Button>

        </Col>
        :
        <Col>
<div style={{backgroundColor:"#753CAD",height:"620px",width:"250px"}}>
  <Button 
  onClick={()=>setThirdActive("third")}
  style={{background:"#AA7DD6" ,color:"#753CAD",paddingRight:"75px",paddingLeft:"70px",border:"none",fontWeight:"500"}}>
    <strong>Close Features</strong>
  </Button>
<h3 style={{color:"#fff",fontWeight:"700",textAlign:"center"}} className="py-5">PREMIUM</h3>
<ul style={{color:"#fff",fontSize:"18px",}}>
  <li>3 Career Episode</li>
  <li>Summary Statement</li>
  <li>CPD</li>
  <li>Delivery Date</li>
  <li>Quality Assured</li>
  <li>Plagiarism Free Reports</li>
  <li>Professional Writers</li>
  <li>File Status Update</li>
  <li>Handling Unlimited</li>
  <li>Comments from EA</li>
  <li>Review of CLients Project</li>
  <li>EA Portal Upload</li>
  <li>Documentation Guideline Help</li>
</ul>

</div>

</Col>
        }
         {fourthActive==="fourth" ?

<Col md={3}>
<div style={{backgroundColor:"#38A559",height:"620px",width:"250px",padding:"50px 0px 20px 0px"}}>
  <img src="images/Pricing/royal.png" alt="basic pricing" className='img-fluid' style={{height:"140px",width:"160px" ,marginLeft:"39px"}}/>
    <div style={{marginTop:"40px"}}>
    <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center"}} className="pb-3">ROYAL</h3> 
    <p style={{color:"#fff",fontWeight:"500",textAlign:"center"}}>We CDRforengineer provides a Top-Notch service at a very affordable price so that anyone can afford it. We promise that no other service provider could beat the range of prices for CDR services given hereunder various packages</p>
    <h3 style={{color:"#fff",fontWeight:"700",textAlign:"center"}} className="py-3">$ 1999/month</h3>  
    <Button style={{backgroundColor:"#fff", borderRadius:"20px",color:"#E79E54",fontWeight:"700",fontSize:"25px",marginLeft:"60px",border:"none"}} >
       Buy Now
    </Button>
    </div>
</div>
<Button
onClick={()=>setFourthActive("")}
style={{color:"#fff",background:"#38A559",fontWeight:"500",paddingRight:"76px",paddingLeft:"76px",border:"#fff"}}>
  View Features
</Button>

</Col>
:
<Col>
<div style={{backgroundColor:"#38A559",height:"640px",width:"250px"}}>
  <Button 
  onClick={()=>setFourthActive("fourth")}
  style={{background:"#81E9A0" ,color:"#38A559",paddingRight:"75px",paddingLeft:"70px",border:"none",fontWeight:"500"}}>
    <strong>Close Features</strong>
  </Button>
<h3 style={{color:"#fff",fontWeight:"700",textAlign:"center"}} className="py-5">ROYAL</h3>
<ul style={{color:"#fff",fontSize:"18px",}}>
  <li>3 Career Episode</li>
  <li>Summary Statement</li>
  <li>CPD</li>
  <li>Delivery Date</li>
  <li>Quality Assured</li>
  <li>Plagiarism Free Reports</li>
  <li>Professional Writers</li>
  <li>File Status Update</li>
  <li>Handling Unlimited</li>
  <li>Comments from EA</li>
  <li>Review of CLients Project</li>
  <li>EA Portal Upload</li>
  <li>Documentation Guideline Help</li>
  <li>Rewrite any project</li>
  <li>upon EA comment</li>
  <li>3 Reports Inclusive</li>
</ul>

</div>

</Col>
     }
         
          
        </Row> */}
      </Container>
    </div>
  )
}

export default Pricing