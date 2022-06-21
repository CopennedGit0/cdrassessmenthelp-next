import React, { useState } from 'react'
import { Col, Container, Row ,Button, Form, FormLabel} from 'react-bootstrap'
import  {useRouter}  from "next/router";
import {useRef} from 'react'
import PhoneInput from 'react-phone-number-input'
import emailjs from "@emailjs/browser";
import  Head  from 'next/head';


const Ordernow = () => {
  const [activeForm,setActiveForm]=useState("first")
  const form = useRef();
  const router = useRouter();
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

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
     <Head>
        <title >Order Now | CDR Assessment Help</title>
        <meta name="description" content="Order Now | CDR Assessment Help" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
        <Row>
          <Col md={6} className="p-md-5">
            <img src="/order.png" alt="Order now" className='img-fluid ordernowImage' style={{height:"500px",width:"550px",float:"right",marginRight:"-100px"}}/>
          </Col>
          <Col md={6} className="pt-md-5 pt-2">
         <div className='ps-md-5'>
          <Button style={{background:"#970012",borderTopRightRadius:"20px",borderBottomRightRadius:"20px" ,border:"none"}} onClick={()=>setActiveForm("first")} className="px-md-5 "><strong>Your Requirements</strong></Button>
          <Button style={{color:"#D38E97",background:"#fff",border:"none"}} onClick={()=>setActiveForm("second")} className="px-md-5"><strong>Your Details</strong></Button>
          </div>
              {activeForm==="first" ?
              
          

              <Form
              ref={form}
              onSubmit={submitFormhandler}
              className="bg-white py-4 ps-md-5 ms-md-5 formContainer"
            >
             <Form.Group className="mb-3" controlId="fullName" style={{display:"none"}}>
              <Form.Control
                placeholder="Site Name"
                value="CDR Assessment Help"
                readonly
                className="inputField"
                name="subject"
              />
            </Form.Group>
              <Form.Group className="mb-3" controlId="engineeringDiscipline">
                <FormLabel style={{color:"000"}}>
                  Engineering Discipline 

                </FormLabel>
                <Form.Control
                  placeholder="Engineering Discipline"
                  value={engineeringDiscipline}
                  onChange={(e) => setengineeringDiscipline(e.target.value)}
                  className="inputField"
                  name="engineeringDiscipline"
                />
              </Form.Group>
              

              <Row>
                <Col>
                <FormLabel>Requirement</FormLabel>
              <Form.Group className="mb-3" controlId="requirement">
                <Form.Control
                  type="text"PhoneInputCountryIconImg
                  placeholder="Full CDR Report"
                  value={requirement}
                  className="inputField"
                  onChange={(e) => setrequirement(e.target.value)}
                  name="requirement"
                />
              </Form.Group>
              </Col>
              <Col>
              <FormLabel>Submission Date</FormLabel>
              <Form.Group className="mb-3" controlId="date">
                <Form.Control
                  type="text"
                  placeholder="MM/DD/YYYY"
                  value={submissionDate}
                  className="inputField"
                  onChange={(e) => setsubmissionDate(e.target.value)}
                  name="submissionDate"
                />
              </Form.Group>
              </Col>
              </Row>
              <Row>
                <Col>
                <FormLabel>Work Experience</FormLabel>
              <Form.Group className="mb-3" controlId="Work Experience">
                <Form.Control
                  type="text"
                  placeholder="0-1 years"
                  value={workExperience}
                  className="inputField"
                  onChange={(e) => setworkExperience(e.target.value)}
                  name="Work Experience"
                />
              </Form.Group>
              </Col>
              <Col>
              <FormLabel>Attach Resume/CV</FormLabel>
              <Form.Group className="mb-3" controlId="date">
                <Form.Control
                  type="file"
                  
                  value={attachResume}
                  className="inputField"
                  onChange={(e) => setattachResume(e.target.value)}
                  name="attachResume"
                />
              </Form.Group>
              </Col>
              </Row>
            
              <Form.Group className="mb-3" controlId="message">
                <FormLabel>Enter your Comments</FormLabel>
                <Form.Control
                  as="textArea"
                  rows={6}
                  placeholder="Extra Details,Any comments"
                  value={message}
                  className="inputField"
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                />
              </Form.Group>
              <Row className=" m-4 ms-5 ps-5">
                <Button
                onClick={()=>setActiveForm("second")}
                  className="formSubmitButton "
                  type="submit"
                  style={{backgroundColor:"#970012",fontFamily:"Barlow",fontWeight:"700",borderRadius:"2px", float:"right",marginLeft:"20px",paddingTop:"5px",width:"fit-contain"}}
                >
                  Next Stage
                </Button>
              </Row>
            </Form> :
            <Form>
                 <Form
              ref={form}
              onSubmit={submitFormhandler}
              className="bg-white py-4 ps-md-5 ms-md-5 formContainer"
            >
               <Form.Group className="mb-3" controlId="site name" style={{display:"none"}}>
              <Form.Control
                placeholder="Site Name"
                value="Order Now"
                readOnly
                className="inputField"
                name="subject"
              />
            </Form.Group>
             
              <Form.Group className="mb-3" controlId="fullName">
              <FormLabel>Full Name</FormLabel>
                <Form.Control
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="inputField"
                  name="fullName"
                />
              </Form.Group>
<Row>
  <Col>
              <Form.Group className="mb-3" controlId="email">
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
              </Col>
              <Col>
              <Form.Group className="mb-3" controlId="country">
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
              </Col>


              </Row>
              <Row className="mb-3">
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

              <Row className="d-flex align-items-center justify-content-center  mt-4 mx-5">
                <Button
                  className="formSubmitButton p-1"
                  type="submit"
                  style={{backgroundColor:"#970012",fontFamily:"Barlow",fontWeight:"700",borderRadius:"2px"}}
                >
                  Submit
                </Button>
              </Row>
            </Form>
            </Form>
            }
          </Col>
        </Row>
     </Container>


    </div>
  )
}

export default Ordernow