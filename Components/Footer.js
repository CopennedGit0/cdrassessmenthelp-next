import { Button, Col, Row } from "react-bootstrap";
import  Link  from "next/link";
import { useRouter } from 'next/router';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';

const Footer = () => {
  const router = useRouter();
  return (
    <div>
      <Row className="upperFooter px-md-5 px-2">
        <Col
          xs={6}
          md={3}
          style={{
            fontFamily: "Asap",
            fontWeight: "500",
            paddingRight: "30px",
            color: "#fff",
          }}
          className="footerAboutUs"
        >
           <img
            src="/logo.png"
            alt="logo"
            style={{ height: "100px",marginTop: "-20px" }}
            className="img-fluid"
          />
          <br/>
         
          <strong style={{ color: "#fff" ,fontWeight:"600",fontSize:"30px"}}>Who we are</strong>
          <br />
          CDRskillassessment is not associated or endorsed by Engineers
          Australia. The Services we provide should be used for guideline
          purposes only or to be used to make your own reports as per your need.
          <br />
          <br />
          
          
         
        </Col>

        <Col
          xs={6}
          md={3}
          className="mb-4 "
          style={{ fontFamily: "Asap", fontWeight: "400", color: "#fff" }}
        >
          <strong className="footerTitle"> Our Services</strong>
          <br />
          <Link
          style={{color:'white'}}
            className="footerServices"
            href="/services/cdr-writing-service-australia"
          >
            <a className='footerServices'>

            CDR Writing
            </a>
          </Link>
          <br />
          <Link
            className="footerServices"
            href="/services/career-episode-writing-australia"
          >
                        <a className='footerServices'>

            Career Episode Writing
            </a>
          </Link>
          <br />
          <Link
            className="footerServices"
            href="/services/summary-statement-writing-australia"
          >
                        <a className='footerServices'>

            Summary Statement Writing
            </a>
          </Link>
          <br />
          <Link
            className="footerServices"
            href="/services/stage-1-competency-assessment-australia"
          >
                        <a className='footerServices'>

            Stage 1 Competency Assessment
            </a>
          </Link>
          <br />
          <Link
            className="footerServices"
            href="/services/stage-2-competency-assessment-australia"
          >
                        <a className='footerServices'>

            Stage 2 Competency Assessment
            </a>
          </Link>
          <br />
          <Link
            className="footerServices"
            href="/services/cdr-reviewing-australia"
          >
                        <a className='footerServices'>

            CDR Reviewing
            </a>
          </Link>
          <br />
          <Link className="footerServices" href="/services/cpd-writing-australia">
          <a className='footerServices'>

            CDR Plagiarism Checking & Removal
            </a>

          </Link>
          <br />
          <Link
            className="footerServices"
            href="/services/professional-resume-writing-australia"
          >
                      <a className='footerServices'>

            Resume Writing
            </a>
          </Link>
        </Col>
        <Col xs={6} md={3} style={{ fontFamily: "Asap", fontWeight: "400" }}>
          <strong>Quick Links</strong>
          <br />
          <Link className="footerServices" href="/blogs">
          <a className='footerServices'>

            Blogs
            </a>
          </Link>

          <br />
          <Link className="footerServices" href="/contact-us">
          <a className='footerServices'>

            Contact Us
            </a>
          </Link>

          <br />
          <Link className="footerServices" href="/our-agents">
          <a className='footerServices'>

            Meet Our Advisors
            </a>
          </Link>

          <br />
          <Link className="footerServices" href="/testimonials">
          <a className='footerServices'>

            Testimonials
            </a>
          </Link>

          <br />
          <Link className="footerServices" href="/disclaimer">
          <a className='footerServices'>

            Disclaimer
            </a>
          </Link>

          <br />
          <Link className="footerServices" href="/refund-policy">
          <a className='footerServices'>

            Refund Policy
            </a>
          </Link>

          <br />
        </Col>
        <Col xs={6} md={3} style={{ fontFamily: "Asap", fontWeight: "400" }}>
          <br />
          <strong style={{ color: "#fff" ,fontWeight:"600",fontSize:"20px"}}>Contact US</strong><br/>
          <LocationOnIcon className='text-white'/>
          &nbsp;&nbsp;&nbsp;&nbsp;Canberra, Australia
          <br />
          <a
            style={{ textDecoration: "none", color: " #fff" }}
            href="mailto:sales@cdrexpert.com"
          >
            <EmailOutlinedIcon className='text-white'/>
            &nbsp;&nbsp;
            info@cdrassessmenthelp.com
          </a>
          <br />
          <a 
            style={{ textDecoration: "none", color: "#fff" }}
            href="https://api.whatsapp.com/send?phone=61482072481"
          >
            <WhatsappOutlinedIcon className='text-white'/>
            &nbsp;&nbsp;&nbsp;+61482072481
          </a>
          <br />
          <br />
          <strong>Request a Sample</strong> <br />
          <Button style={{backgroundColor:"#970012"}}>
            <a
              href="mailto:vibek2925@gmail.com"
              style={{ textDecoration: "none", color: "white" }}
            >
              Submit
            </a>
          </Button>
          <br />
        </Col>
      </Row>
      <Row className="lowerFooter text-white">
        <p className='d-flex justify-content-md-between'>
          {" "}
          <span style={{ textAlign: "left" }}>
            All rights reserved 2022 </span>
            <span>Copyright © cdrassessmenthelp.com
          </span>
          <span
            className="me-md-4"
            style={{  cursor: "pointer" }}
          >
            <a href="" target="_blank" rel='noreferrer'>
            <TwitterIcon className='mx-md-1 mx-0 text-white'/>

            </a>
            <a href="" target="_blank" rel='noreferrer'>
            <FacebookIcon className='mx-md-1 mx-0 text-white'/>

            </a>
            <a href="" target="_blank" rel='noreferrer'>
            <InstagramIcon className='mx-md-1 mx-0 text-white'/>

            </a>
            <a href="" target="_blank" rel='noreferrer'>
            <LinkedInIcon className='mx-md-1 mx-0 text-white'/>

            </a>
          </span>
         
        </p>
      </Row>
    </div>
  );
};

export default Footer;
