import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";

const FAQ = () => {
  const listGroup = [
    {
      title: `How much time does it take for a CDR to be delivered?
    `,
      details: `Usually, CDR Report takes about three weeks to be completed and delivered.`,
    },
    {
      title: `Do I have to pay upfront?
    `,
      details: `Yes, payment should be made on an instalment basis, for more details do not hesitate to contact our customer support service.`,
    },
    {
      title: `Do I get to know the writers assigned to my Report? Can I talk to them?
  `,
      details: `No, you can talk with them through email; cdrassessmenthelp@writers.com or webchat.`,
    },
    {
      title: `Do I need to submit my academic project?
  `,
      details: `Yes, Academic Projects are essential for CDR preparation. You can submit your Academic projects done during your professional studies as a career episode Report.`,
    },
  ];
  return (
    <div>
      <Container>
        <Headings title="FAQ" align="djb" />
        <Row>
          <Col md={8}>
            <Row>
              <Accordion defaultActiveKey="0">
                {listGroup?.map((l, index) => (
                  <Accordion.Item className="my-4" key={index} eventKey={index}>
                    <Accordion.Header>
                      <div className="d-flex">
                        {/* <div
                style={{
                  color: "#370C64",
                  fontFamily: "Arial",
                  fontSize: "19px",
                  fontWeight: "700",
                }}
              ></div> */}
                        <div
                          style={{
                            color: "#000",
                            fontFamily: "Arial",
                            fontSize: "19px",
                            fontWeight: "700",
                            textAlign: "left",
                          }}
                        >
                          {l.title}
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p style={{ color: "#000" }}>{l.details}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}{" "}
                <Row></Row>
              </Accordion>
            </Row>
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <img
              src="images/landing/FAQ.png"
              alt="FAQ-final"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
