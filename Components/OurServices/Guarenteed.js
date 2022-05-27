
import React, { useState } from 'react'
import { Col, Container, Row ,Button, Form, FormLabel} from 'react-bootstrap'
import { useRouter } from "next/router";
import {useRef} from 'react'
import PhoneInput from 'react-phone-number-input'
import Headings from '../Headings';
import Paragraphs from '../Paragraphs';
import emailjs from '@emailjs/browser';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Guarenteed = () => {
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
      {active==="first" ? 
       <Col md={6} className='px-md-5 md-5 mt-5'>
       <Headings title="Get CDR writing help for 
guaranteed positive skill 
assessment from EA" align="left"  />   
<Paragraphs  data='We provide CDR writing help for engineers pursuing 
a career in Australia through skill assessment. We 
guarantee positive skills assessment from EA
with a variety of services we provide regarding 
CDR writing.' align="left"/>
<Button style={{backgroundColor:"#970012",fontWeight:"600",marginRight:"10px",border:"none"}}>
CONTACT US
</Button>
<Button style={{backgroundColor:"#fff",color:"#970012",fontWeight:"600",border:"1px solid #970012"}}>
GET INSTANT HELP
</Button>
<p style={{color:"##434343",fontWeight:"400",textAlign:'center'}}>Trusted by thousand of Engineers from around the world</p>
             <div className='d-flex justify-content-center' >
              <Button  onClick={()=> setActive("second")} 
                style={{textAlign:"center",background:"#fff",color:"#373737",border:"none"}}>
                 <AccountCircleOutlinedIcon/>Get Instant Consultation
              </Button>
              </div>
              </Col>
              :
              <Col md={6} className='px-md-5  mt-0'>
                 <Form
              ref={form}
              onSubmit={submitFormhandler}
              className="bg-white py-4 ps-md-5 ms-md-5 formContainer"
            >
             
              <Form.Group className="mb-0" controlId="fullName">
              <FormLabel>Full Name</FormLabel>
                <Form.Control
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="inputField"
                  name="fullName"
                />
              </Form.Group>

  
              <Form.Group className="mb-0" controlId="email">
                <FormLabel>Email</FormLabel>
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
              <FormLabel>Country</FormLabel>
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
                <FormLabel>Contact number</FormLabel>
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

              <Row className="  mt-1 ">
                <Button
                  onClick={()=>setActive("first")}
                  className="formSubmitButton p-1"
                  type="submit"
                  style={{backgroundColor:"#970012",fontFamily:"Barlow",fontWeight:"700",borderRadius:"2px"}}
                >
                  Book Now
                </Button>
              </Row>
            </Form>

              </Col>
    }
         
                    <Col md={6}>
                      <img src="/images/services/our-services.png" alt="Services" className='img-fluid pb-5'/>

                    </Col>
                   

        </Row>

       <h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='px-md-5'>Professional help in writing CDR for 
the skill assessment of EA</h3>
      <p style={{color:"#666"}} className='px-md-5'>Engineers writing CDR without a professional’s help 
are prone to make various mistakes. EA will reject 
skill assessment if CDR is not written in accordance 
with guidelines. A dedicated engineering team with 
years of experience in CDR writing services will walk 
you through the process and ensure a high approval 
rate of CDR from Engineers Australia..</p>
      </Container>
    </div>
  )
}

export default Guarenteed