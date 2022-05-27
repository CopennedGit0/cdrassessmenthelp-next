
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { React, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


const Buttom = () => {
    const form = useRef();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

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
                <Row>
                    <Col md={5}>
                        <div>
                            <h5 style={{ color: "#373737", fontWeight: "600", textAlign: "center" }}> Share this Blog on your Socials?</h5>
                        </div>
                        <Row className='py-3 ms-5 px-3'>
                            <img src="images/specificblogs/linkdin.png" alt="linkdin" className='img-fluid' style={{ height: "58px", width: "80px" }} />
                            <img src="images/specificblogs/facebook.png" alt="linkdin" className='img-fluid' style={{ height: "58px", width: "80px" }} />
                            <img src="images/specificblogs/tweet.png" alt="linkdin" className='img-fluid' style={{ height: "58px", width: "80px" }} />
                            <img src="images/specificblogs/pint.png" alt="linkdin" className='img-fluid' style={{ height: "58px", width: "80px" }} />
                        </Row>

                        <Row>
                            <Col className="pe-5 me-4 ">
                                <Form
                                    ref={form}
                                    onSubmit={submitFormhandler}
                                    className="bg-white py-4 ps-5 ms-5 formContainer"
                                >
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <h5 style={{ color: "#373737", fontWeight: "700" }}>Add your Comments</h5>

                                    </div>

                                    <Form.Group className="mb-3" controlId="fullName">
                                        <Form.Control
                                            placeholder="Full Name"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            className="inputField"
                                            name="fullName"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Control
                                            type="text"
                                            placeholder="Email"
                                            value={email}
                                            className="inputField"
                                            onChange={(e) => setEmail(e.target.value)}
                                            name="email"
                                        />
                                    </Form.Group>

                                    <Row className="mb-3">
                                        {/* <Form.Group controlId="contactNumber">
                  <PhoneInput
                    className="inputField"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={setPhone}
                    name="phone"
                  />
          </Form.Group> */}
                                    </Row>

                                    <Form.Group className="mb-3" controlId="message">
                                        <Form.Control
                                            as="textArea"
                                            rows={6}
                                            placeholder="Feedbacks"
                                            value={message}
                                            className="inputField"
                                            onChange={(e) => setMessage(e.target.value)}
                                            name="message"
                                        />
                                    </Form.Group>
                                    <Row className="d-flex align-items-center justify-content-center  mt-4 mx-5">
                                        <Button
                                            className="formSubmitButton px-3 "
                                            type="submit"
                                            style={{ backgroundColor: "#AE081C", fontFamily: "Barlow", fontWeight: "700", borderRadius: "5px" }}
                                        >
                                            Post your Feedback
                                        </Button>
                                    </Row>
                                </Form>

                            </Col>



                        </Row>
                    </Col>

                    <Col md={7}>
                        <h5 style={{ color: "#373737", fontWeight: "600", textAlign: "center" }}> Recent Blogs</h5>


                        <Row>

                            <Col md={6}>
                                <img src="/images/specificblogs/got-rejected.png" alt="blogs" className="img-fluid" />
                                <div className='pt-3'>
                                    <span style={{ color: "#373737" }}> CDR Service</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={{ color: "#970012" }}>Sep 25,2021</span>
                                    <h6 style={{ color: "#373737", fontWeight: "600" }}> 6 Awesome and Affordable  Shirt
                                        Tsheets Alternatives</h6>

                                    <p style={{ color: "#666" }}>6 Awesome and Affordable Tsheets Alternative
                                        Awesome and Affordable Tsheets Alternatives
                                        Awesome and Affordable </p>
                                    <h6 style={{ color: "#373737", fontWeight: "600" }}> Read Full Blog</h6>

                                </div>
                            </Col>


                            <Col md={6}>

                                <img src="/images/specificblogs/Top.png" alt="blogs" className="img-fluid" />
                                <div className='pt-3'>
                                    <span style={{ color: "#373737" }}> CDR Service</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={{ color: "#970012" }}>Sep 25,2021</span>
                                    <h6 style={{ color: "#373737", fontWeight: "600" }}> 6 Awesome and Affordable  Shirt
                                        Tsheets Alternatives</h6>               
                                        
                                        <p style={{color:"#666"}}>6 Awesome and Affordable Tsheets Alternative
Awesome and Affordable Tsheets Alternatives
Awesome and Affordable </p>
<h6 style={{ color: "#373737", fontWeight: "600" }}> Read Full Blog</h6>               
                                        
                                                        </div>
 
                            </Col>
                            <p style={{color:"#AE081C",textAlign:"center",fontWeight:"600"}}>More Blogs</p>

                        </Row>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Buttom