import Chatra from '@chatra/chatra'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { Col, Container, Row,Button, Form, FormLabel } from 'react-bootstrap'
import Headings from '../Headings'
import Paragraphs from '../Paragraphs'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-number-input'

const Forguarenteed = () => {
  const [active,setActive]=useState("first");
  const form = useRef();
  const router = useRouter();
  const [fullName,setFullName]=useState("");
  const [phone,setPhone]=useState("");
  const [country,setCountry]=useState("");
  const [email,setEmail]=useState("");
  const [engineeringDiscipline, setengineeringDiscipline] = useState("");
  const [requirement, setrequirement] = useState("");
  const [workExperience, setworkExperience] = useState("");
  const [attachResume, setattachResume] = useState("");
  const [message, setMessage] = useState("");
  const [submissionDate, setsubmissionDate] = useState("");
  const submitFormhandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_by37xbi",
        "template_2xypi1o",
        form.current,
        "user_jMQ6BMrWWCP1zIKhDe4ND"
      )
      .then(
        (result) => {
          alert("Email sent.");
          setFullName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          alert("Sorry something went wrong.");
        }
      );
  };
  return (
    <div>
        <Container>
        <Row className='pt-5'>
          {active==="first"  ?
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
<Button  onClick={() => Chatra("openChat", true)} style={{backgroundColor:"#fff",color:"#970012",fontWeight:"600",border:"1px solid #970012"}}>
 GET INSTANT HELP
</Button>
<p style={{color:"#434343",fontWeight:"400",textAlign:'center'}}>Trusted by thousand of Engineers from around the world</p>

<div className='d-flex justify-content-center' >
<Button  onClick={()=> setActive("second")} 
                style={{textAlign:"center",background:"#fff",color:"#373737",border:"none"}}>
                 <AccountCircleOutlinedIcon/>Get Instant Consultation
              </Button>
              </div>

                    </Col>
                    :

                    <Col>
                      <Form
              ref={form}
              onSubmit={submitFormhandler}
              className="bg-white py-4 ps-md-5 ms-md-5 formContainer"
            >
             
              <Form.Group className="mb-0" controlId="fullName">
              <FormLabel></FormLabel>
                <Form.Control
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="inputField"
                  name="fullName"
                />
              </Form.Group>

  
              <Form.Group className="mb-0" controlId="email">
                <FormLabel></FormLabel>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  value={email}
                  className="inputField"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                />
                
              </Form.Group>
              
              
              <Form.Group className="mb-0" controlId="country">
              <FormLabel></FormLabel>
                <Form.Control
                  type="text"
                  placeholder="country"
                  value={country}
                  className="inputField"
                  onChange={(e) => setCountry(e.target.value)}
                  name="country"
                />
              </Form.Group>
              


              
              <Row className="mb-0">
                <FormLabel></FormLabel>
                { <Form.Group controlId="contactNumber">
                  <PhoneInput
                    className="inputField img-fluid"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={setPhone}
                    name="phone"
                    
                  />
          </Form.Group> }
              </Row>

              <Row className="  mt-1">
                <Button
                  onClick={()=>setActive("first")}
                  className="formSubmitButton "
                  type="submit"
                  style={{backgroundColor:"#970012",fontFamily:"Barlow",fontWeight:"700",borderRadius:"5px",border:"none" ,marginLeft:"12px"}}
                >
                  Book Now
                </Button>
              </Row>
            </Form>

              </Col>
    }
                    

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