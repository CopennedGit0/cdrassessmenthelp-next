
import { Col, Container, Row,Form,Button } from 'react-bootstrap'
import Headings from '../Components/Headings'
import Paragraphs from '../Components/Paragraphs'
import { useRouter } from "next/router";
import React,{useRef,useState} from 'react'
import emailjs from "@emailjs/browser"
import  Head  from 'next/head';
import PhoneInput from 'react-phone-number-input';



const Contactus = () => {

  const form = useRef();
  const router = useRouter();
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
      <Head>
      <title>Contact Us | CDR Assessment Help</title>
      <meta name='description' content='We are available 24 hours 7 days and you can reach to us through different medium like phone email  | CDR For Engineer'/>
      <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Container className='py-5'>
        <div className="pt-4">
        <Headings title="Contact Us"/> </div>
        <Paragraphs data="Any questions or remarks? Just write us a Message"/>

        <Row>
        <Col md={6} className="px-md-5 py-md-4" style={{background:"#FFECEC"}}>
          <Form
              ref={form}
              onSubmit={submitFormhandler}
              className=" py-4 ps-md-5 ms-md-5 formContainer"
              
            >
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h2>Get in touch</h2>
                <Paragraphs data="Fill the form and our team wil get back to you in 24 Hours"/>
              </div>
              <Form.Group className="mb-3" controlId="fullName" style={{display:"none"}}>
              <Form.Control
                placeholder="Site Name"
                value="Contact Us"
                readOnly
                className="inputField"
                name="subject"
              />
            </Form.Group>

              <Form.Group className="mb-md-3 mb-1" controlId="fullName">
                <Form.Control
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="inputField"
                  name="fullName"
                />
              </Form.Group>

              <Form.Group className="mb-md-3 mb-1" controlId="email">
                <Form.Control
                  type="text"
                  placeholder="Email"
                  value={email}
                  className="inputField"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                />
              </Form.Group>

                <Form.Group controlId="contactNumber">
                  <PhoneInput
                    className="inputField"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={setPhone}
                    name="phone"
                  />
          </Form.Group>

              <Form.Group className="mb-md-3 mb-1" controlId="message">
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Go ahead, leave your queries"
                  value={message}
                  className="inputField"
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                />
              </Form.Group>
              <Row className="d-flex align-items-center justify-content-center  mt-4 mx-5">
                <Button
                  className="formSubmitButton p-3 "
                  type="submit"
                  style={{backgroundColor:"#AE081C",fontFamily:"Barlow",fontWeight:"700",borderRadius:"10px"}}
                >
                  Submit
                </Button>
              </Row>
            </Form>

          </Col>
          
          <Col md={6}>
            <img src="/contact.png" alt="contact us" className="img-fluid ms-md-2 contactImage" style={{height:"595px",width:"500px",float:""}}/>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Contactus