import Headings from '../Headings'
import Paragraphs from '../Paragraphs'
import Chatra from '@chatra/chatra'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import { Col, Container, Row,Button, Form, FormLabel } from 'react-bootstrap'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-number-input'


const Forengineer = () => {
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
          <Col md={6} className='first pe-md-5 md-5 pt-5'>
             <Headings title="Professional help in CDR
 writing ensures positive skill 
 assessment from EA" align="left"  />   
 <Paragraphs  data='Professional writers with years of experience in 
CDR writing services help engineers to achieve 
positive skill assessment in Australia. Engineers 
demonstrate their engineering skills and knowledge 
through CDR for positive assessment from EA.' align="potato"/>
            

<Button href='/contact-us' style={{backgroundColor:"#970012",fontWeight:"600",marginRight:"10px",border:"none"}}>
CONTACT US
</Button>

<Button  onClick={() => Chatra("openChat", true)} style={{backgroundColor:"#fff",color:"#970012",fontWeight:"600",border:"1px solid #970012"}}>
 GET INSTANT HELP
</Button>
<p style={{color:"#434343",fontWeight:"400",textAlign:''}} className="py-3">Trusted by thousand of Engineers from around the world</p>

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
                      <img src="images/landing/lan.png" alt="Services" className='img-fluid'/>

                    </Col>


        </Row>



        </Container>
    </div>
  )
}

export default Forengineer