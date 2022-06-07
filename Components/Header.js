import { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Col,
  Row,
} from "react-bootstrap";
import Link from "next/link";
import { useRouter } from 'next/router';


const Header = ({ scrollToTop }) => {
  const router = useRouter();
  const [show, setShow] = useState();
  const [anzscoShow, setAnzscoShow] = useState();
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const showAnzscoDropdown = (e) => {
    setAnzscoShow(!anzscoShow);
  };
  const hideAnzscoDropdown = (e) => {
    setAnzscoShow(false);
  };
  useEffect(() => { 
    scrollToTop(); 
  }, []);

  return (
    <div className="header">
      <Navbar bg="light" className="headernavbar px-5" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ marginLeft: "-80px" }}>
            <div className="headerImageContainer">
              <img src="/logo.png" className="img-fluid" alt="logo" style={{height:'150px'}} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            
              <NavDropdown
                title="CDR Services"
                id="basic-nav-dropdown"
                style={{ color: " #970012", margin: "0 1em" }}
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                onClick={() => router.push("/services")}
              >
                <NavDropdown.Item
                  href="/services/cdr-writing-service-australia"
                  style={{
                    color: "#970012",
                    background: "#fff",
                  }}
                >
                  CDR Writing
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  href=" /services/career-episode-writing-australia"
                  style={{ color: " #970012                  ", background: " #fff" }}
                >
                  Career Episode Writing
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  href="/services/summary-statement-writing-australia"
                  style={{ color: "#970012 ", background: "#fff" }}
                >
                  Summary Statement Writing
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  href="/services/stage-1-competency-assessment-australia"
                  style={{ color: "#970012 ", background: "#fff" }}
                >
                  Stage 1 Competency Assessment
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/services/stage-2-competency-assessment-australia"
                  style={{ color: "#970012 ", background: "#fff" }}
                >
                  Stage 2 Competency Assessment
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/services/cdr-reviewing-australia"
                  style={{ color: "#970012 ", background: "#fff" }}
                >
                  CDR Reviewing
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/services/cpd-writing-australia"
                  style={{ color: "#970012 ", background: "#fff" }}
                >
                  CPD Writing
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href=" /services/plagiarism-checking-and-removal"
                  style={{ color: "#970012 ", background: "#fff" }}
                >
                  CDR Plagiarism Checking & Removal
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/services/professional-resume-writing-australia"
                  style={{ color: "#970012 ", background: "#fff" }}
                >
                  CV Resume Writing
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                href="/cdr-sample"
                style={{ color: "#970012", margin: "0 1em" }}
              >
                CDR Samples
              </Nav.Link>

              <NavDropdown
                title="ANZSCO Code"
                id="basic-nav-dropdown"
                style={{ color: "#970012", margin: "0 2rem" }}
                show={anzscoShow}
                onMouseEnter={showAnzscoDropdown}
                onMouseLeave={hideAnzscoDropdown}
                onClick={() => router.push("/anzsco-codes")}
              >
                <div
                  className="headerAnzsco"
                  style={{
                    width: "1000px",
                    height: "500px",
                    background: "#fff",
                    borderRadius: "10px",
                    marginLeft: "-400px",
                    padding: "30px",
                  }}
                >
                  <Row>
                    <Col className="headerDropdownRows">
                      <strong>Unit Group 1332</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-133211-engineering-manager"
                        >
                                    <a className='headerCodes'>

                          Engineering Manager (ANZSCO 133211)
                          </a>
                        </Link>
                      </div>
                    </Col>
                    <Col className="headerDropdownRows">
                      <strong>Unit Group 2331</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233111-chemical-engineer"
                        >
                                    <a className='headerCodes'>

                          Chemical Engineer (ANZSCO 233111)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233112-materials-engineer"
                        >
                                    <a className='headerCodes'>

                          Materials Engineer (ANZSCO 233112)
                          </a>
                        </Link>
                      </div>
                    </Col>
                    <Col className="headerDropdownRows">
                      <strong>Unit Group</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233112-materials-engineer"
                        >
                                    <a className='headerCodes'>

                          Civil Engineer (ANZSCO 233211)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233212-geo-technical-engineer"
                        >
                                    <a className='headerCodes'>

                          Geotechnical Engineer (ANZSCO 233212)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233214-structural-engineer"
                        >
                                    <a className='headerCodes'>

                          Structural Engineer (ANZSCO 233214)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233214-structural-engineer"
                        >
                                    <a className='headerCodes'>

                          Transport Engineer (ANZSCO 233215)
                          </a>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col className="headerDropdownRows">
                      <strong>Unit Group 2333</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233311-electrical-engineer"
                        >
                                    <a className='headerCodes'>

                          Electrical Engineer (ANZSCO 233311)
                          </a>
                        </Link>
                      </div>
                    </Col>
                    <Col className="headerDropdownRows">
                      <strong>Unit Group 2334</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233411-electronics-engineer"
                        >
                                    <a className='headerCodes'>

                          Electronics Engineer (ANZSCO 233411)
                          </a>
                        </Link>
                      </div>
                    </Col>
                    <Col className="headerDropdownRows">
                      <strong>Unit Group 2335</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233411-electronics-engineer"
                        >
                                    <a className='headerCodes'>

                          Industrial Engineer (ANZSCO 233511)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233512-mechanical-engineer"
                        >
                                    <a className='headerCodes'>

                          Mechanical Engineer (ANZSCO 233512)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233513-production-or-plant-engineer"
                        >
                                    <a className='headerCodes'>

                          Production or Plant Engineer (ANZSCO 233513)
                          </a>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col className="headerDropdownRows">
                      <strong>Unit Group 2336</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233611-mining-engineer"
                        >
                                    <a className='headerCodes'>

                          Mining Engineer (ANZSCO 233611)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233612-petroleum-engineer"
                        >
                                    <a className='headerCodes'>

                          Petroleum Engineer (ANZSCO 233612)
                          </a>
                        </Link>
                      </div>
                    </Col>
                    <Col className="headerDropdownRows">
                      <strong>Unit Group 2339</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233911-aeronautical-engineer"
                        >
                                    <a className='headerCodes'>

                          Aeronautical Engineer (ANZSCO 233911)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233911-aeronautical-engineer"
                        >
                                    <a className='headerCodes'>

                          Agricultural Engineer (ANZSCO 233912)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233913-biomedical-engineer"
                        >
                                    <a className='headerCodes'>

                          Biomedical Engineer (ANZSCO 233913)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233914-engineering-technologist"
                        >
                                    <a className='headerCodes'>

                          Engineering Technologist (ANZSCO 233914)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233915-environmental-engineer"
                        >
                                    <a className='headerCodes'>

                          Environmental Engineer (ANZSCO 233915)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-233999-engineering-professionals-nec"
                        >
                                    <a className='headerCodes'>

                          Engineering Professionals (nec) (ANZSCO 233999)
                          </a>
                        </Link>
                      </div>
                    </Col>
                    <Col className="headerDropdownRows">
                      <strong>Unit Group 2631</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-263111-computer-networks-and-system-engineers"
                        >
                                    <a className='headerCodes'>

                          Computer Network and Systems Engineer (ANZSCO 263111)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-263311-telecommunication-engineers"
                        >
                                    <a className='headerCodes'>

                          Telecommunications Engineer (ANZSCO 263311)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-263312-telecommunication-network-engineers"
                        >
                                    <a className='headerCodes'>

                          Telecommunications Network Engineer (ANZSCO 263312)
                          </a>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col className="headerDropdownRows">
                      <strong>Unit Group 3122</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-312211-civil-engineering-draftsperson"
                        >
                                    <a className='headerCodes'>

                          Civil Engineering Draftsperson (ANZSCO 312211)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-312211-civil-engineering-draftsperson"
                        >
                                    <a className='headerCodes'>

                          Civil Engineering Technician (ANZSCO 312212)
                          </a>
                        </Link>
                      </div>
                    </Col>
                    <Col className="headerDropdownRows">
                      <strong>Unit Group 3132</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-312311-electrical-engineering-draftsperson"
                        >
                                    <a className='headerCodes'>

                          Electrical Engineering Draftsperson (ANZSCO 312311)
                          </a>
                        </Link>
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-312312-electrical-engineering-technician"
                        >
                                    <a className='headerCodes'>

                          Electrical Engineering Technician (ANZSCO 312312)
                          </a>
                        </Link>
                      </div>
                    </Col>
                    <Col className="headerDropdownRows">
                      <strong>Unit Group 3123</strong>
                      <br />
                      <div className="headerDropdownList">
                        <Link
                          className="headerDropdownLink"
                          href="/anzsco-codes/anzsco-313212-telecommunication-field-engineer"
                        >
                                    <a className='headerCodes'>

                          Telecommunications Field Engineer (ANZSCO 312311)
                          </a>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </NavDropdown>

              <Nav.Link
                href="/pricing"
                style={{ color: " #970012", margin: "0 1.5rem" }}
              >
                Pricing
              </Nav.Link>

              <Nav.Link
                href="/faq"
                style={{ color: " #970012", margin: "0 1.5rem" }}
              >
                FAQ
              </Nav.Link>
              <Nav.Link
                href="/blogs"
                style={{ color: " #970012", margin: "0 1.5rem" }}
              >
                Blogs
              </Nav.Link>

              <Button
                className="px-4"
                style={{ background: "none  ", 
              color:"#970012 ",marginRight:"10px"}}
                onClick={() => router.push(`/order-now`)}
              >
                Order Now
              </Button>
            



              <Button
                className="px-4"
                style={{ background: " #970012  " }}
                onClick={() => router.push(`/our-agents`)}
              >
                Meet Our Experts
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
