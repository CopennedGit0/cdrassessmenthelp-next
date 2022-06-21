
import { Col, Container, Form, Row,Button } from 'react-bootstrap'
import Headings from '../Headings'
import Paragraphs from '../Paragraphs'
import SearchBox from '../SearchBox'
import { useRouter } from "next/router";
import React,{useRef,useState} from 'react'
import emailjs from '@emailjs/browser'



const First = () => {
  const form = useRef();
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitFormhandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_38v8g6i",
        "template_3dg34bp",
        form.current,
        "qMMUv1Y35wlh8JYno"
      )
      .then(
        (result) => {
          alert("Email sent.");
          setFullName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("Sorry something went wrong.");
        }
      );
  };
  return (
    <div>
<Container className='mb-5 mt-5 mt-md-0'>
      <Headings title="Blogs"/>
      <Paragraphs data="Check our Blogs written by Experienced Bloggers. Blogs related to CDR Service, Australia Migration & Skill Assessment. 
"/>


<h3 style={{color:"#373737",fontWeight:"600"}} className="pt-md-4"> Popular Blogs</h3>
<Paragraphs data="Here are some of the most popular Blogs" align="left"/>


<Row>
                 <Col md={7} className="py-md-5">

                     <img src="images/specificblogs/writer.png" alt="blogs" className='img-fluid'/>
                   




                 </Col>

                 <Col md={5} className="py-md-5 px-md-5">
                     <h5 style={{color:"#373737",fontWeight:"600"}}> The Need for professional writers for your 
CDR Report for the Australian immigration 
visa</h5>

<Paragraphs data="The Best Timesheet AppsThat Will Make Team
Management Easier. The Best Timesheet Apps
That Will Make Team Management Easier" align="left"/>

<span style={{color:"#970012"}}> Australia Migration </span> <span style={{color:"#970012"}} className="ms-5 ps-5"> Sep 03, 2021</span>
<br/>
<hr style={{height:"4px",border:"none",color:"#000",backgroundColor:"#000"}} />
                 </Col>
             </Row>


             <Row className='pb-5'>

<Col md={6}>
    <img src="/images/blogs/top-10.png" alt="blogs" className="img-fluid" />
    <div className='pt-3'>
       
        <h6 style={{ color: "#373737", fontWeight: "600" }}> Top 10 common CDR Report writing mistakes made by 
engineering Applicants for skill Assessment.</h6>
<span style={{ color: "#970012" }}> Sep 25,2021</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{ color: "#970012" }}> 5 Days ago</span>

      

    </div>
</Col>


<Col md={6}>

    <img src="/images/blogs/top-5.png" alt="blogs" className="img-fluid" />
    <div className='pt-3'>
       
        <h6 style={{ color: "#373737", fontWeight: "600" }}> Documents checklist for Engineers Australia CDR Report for 
skilled Assessment in 2022 </h6>               
<span style={{ color: "#373737" }}> Sep 25,2021</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{ color: "#970012" }}>5 days ago</span>
            <p style={{color:"#666"}}></p>
              
            
                            </div>

            

</Col>
</Row>
<Row>

<Col md={8}>
  <Row>
   <Col md={6} >
     <img src="images/blogs/req.png" alt="requirement" className=''style={{ width:"270px",height:"250px"}}/>

     <h6 style={{color:"#373737",fontWeight:"600" ,padding:"10px 10px 0 0"}}> The Requirements of a Competency 
Demonstration Report (CDR) for a skilled  
migration visa  </h6>
<p style={{ color: "#666" }}>6 Awesome and Affordable Tsheets Alternative
                                        Awesome and Affordable Tsheets Alternatives
                                        Awesome and Affordable </p>
 <span style={{color:"#000",fontWeight:"600"}}>Read More</span>    <span style={{color:"#000",fontWeight:"400",marginLeft:"110px"}}>63 comments</span>                                       
               
     
      

   </Col>
   <Col md={6}  >
     <img src="images/blogs/bestt.png" alt="requirement" className=''style={{ width:"270px",height:"250px"}}/>
     
      <h6 style={{color:"#373737",fontWeight:"600",padding:"10px 70px 0 0"}}> Best way to prepare a CDR Report like a 
Pro for engineers relocating to Australia</h6>
<p style={{ color: "#666" }}>6 Awesome and Affordable Tsheets Alternative
                                        Awesome and Affordable Tsheets Alternatives
                                        Awesome and Affordable </p>
               
                                        <span style={{color:"#000",fontWeight:"600"}}>Read More</span>    <span style={{color:"#000",fontWeight:"400",marginLeft:"110px"}}>63 comments</span>                                       

   </Col>
   </Row>
   <Row>
   <Col md={6} >
     <img src="images/blogs/bestcon.png" alt="requirement" className=''style={{ width:"270px",height:"250px"}}/>

     <h6 style={{color:"#373737",fontWeight:"600" ,padding:"10px 10px 0 0"}}> Best consultants for CDR Report writing 
for Australian immigration PR visa </h6>
<p style={{ color: "#666" }}>6 Awesome and Affordable Tsheets Alternative
                                        Awesome and Affordable Tsheets Alternatives
                                        Awesome and Affordable </p>
 <span style={{color:"#000",fontWeight:"600"}}>Read More</span>    <span style={{color:"#000",fontWeight:"400",marginLeft:"110px"}}>63 comments</span>                                       
               
     
      

   </Col>
   <Col md={6} >
     <img src="images/blogs/reasons.png" alt="requirement" className=''style={{ width:"270px",height:"250px"}}/>
     
      <h6 style={{color:"#373737",fontWeight:"600",padding:"10px 70px 0 0"}}>   Top 10 Reasons for CDR Report Rejected 
by Engineers Australia   </h6>
<p style={{ color: "#666" }}>6 Awesome and Affordable Tsheets Alternative
                                        Awesome and Affordable Tsheets Alternatives
                                        Awesome and Affordable </p>
               
                                        <span style={{color:"#000",fontWeight:"600"}}>Read More</span>    <span style={{color:"#000",fontWeight:"400",marginLeft:"110px"}}>63 comments</span>                                       

   </Col>
   </Row>
</Col>

<Col md={4}>
  <SearchBox/>

  <Headings title="Recent Blogs" align="left"/>

  <Row className='py-1'>
    
    <Col md={2} ><img src="/images/blogs/small1.png" alt="Best consultant"     /></Col>
  <Col md={10}>  <h6 style={{color:"#000",fontWeight:"600"}} className="ms-md-5">Best consultant to get Engineers Australia 
Approved CDR sample for an Australian 
immigration visa.</h6>
<p style={{color:"#666"}} className="ms-md-5">Mar 02,2021</p>
</Col>
  </Row>

  <Row className='py-2'>
    
    <Col md={2}><img src="/images/blogs/small2.png" alt="Best consultant"     /></Col>
  <Col md={10}>  <h6 style={{color:"#000",fontWeight:"600"}} className="ms-md-5">Best online website to download Engineers 
Australia Approved CDR  sample for an 
Australian immigration visa.  </h6>
<p style={{color:"#666"}} className="ms-md-5">Mar 02,2021</p>
</Col>
  </Row>

  <Row className='py-2'>
    
    <Col md={2}><img src="/images/blogs/small3.png" alt="Best consultant"     /></Col>
  <Col md={10}>  <h6 style={{color:"#000",fontWeight:"600"}} className="ms-md-5">Engineers Australia CDR projects verification 
for skill Assessment. </h6>
<p style={{color:"#666"}} className="ms-md-5">Mar 02,2021</p>
</Col>
  </Row>
   
   <Headings title="Categories" align="left"/>
   <ul style={{listStyleType:"none",color:"#666",fontWeight:"500"}} className="py-1">
     <li>CDR Service(10)</li>
     <li>Australia Migration(10)</li>
     <li>Skill Assessment(10)</li>
     <li>CDR Service(10)</li>
     <li>Australia Migration(10)</li>
     <li>Skill Assessment(10)</li>
     <li>Australia Migration</li>
   </ul>
<div className='ps-4 pe-5 '>
   <Form
              ref={form}
              onSubmit={submitFormhandler}
              className="bg-white py-3 px-3 formContainer"
              style={{background:"linear-gradient(180deg, #970012 0%, #AE081C 100%)"}}
            >
               <Form.Group className="mb-3" controlId="blogs" style={{display:"none"}}>
              <Form.Control
                placeholder="Site Name"
                value="Blogs"
                readOnly
                className="inputField"
                name="subject"
              />
            </Form.Group>
                <h5 style={{color:"#fff", fontWeight:"600" }} className="ms-4">Request a Blog</h5>
                
              <div className='d-flex flex-column justify-content align-items-center '>

              <Form.Group className="mb-2" controlId="fullName">
                <Form.Control
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="inputField"
                  name="fullName"
                />
              </Form.Group>

              <Form.Group className="mb-2" controlId="email">
                <Form.Control
                  type="text"
                  placeholder="Email"
                  value={email}
                  className="inputField"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                />
              </Form.Group>

             

              <Form.Group className="mb-2" controlId="message">
                <Form.Control
                  
                  placeholder="Type your request here"
                  value={message}
                  className="inputField"
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                />
              </Form.Group>

              </div>

              <Row className="d-flex align-items-center justify-content-center  mx-4">
                <Button
                  className="formSubmitButton p-1 "
                  type="submit"
                  style={{backgroundColor:"#dfdfdf",fontFamily:"Barlow",fontWeight:"700",borderRadius:"4px",color:"#9B0114"}}
                >
                  Submit
                </Button>
              </Row>
            </Form>

            </div>
</Col>


</Row>





</Container>
    </div>
  )
}

export default First 