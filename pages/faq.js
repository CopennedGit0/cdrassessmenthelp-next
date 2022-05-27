
import React from 'react'
import { Accordion, Container, Row ,Button} from 'react-bootstrap'
import Headings from '../Components/Headings'
import Paragraphs from '../Components/Paragraphs'
import {useRouter} from 'next/router'
import  Head  from 'next/head';

const FAQ = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  const listGroup=[{
    title:`What are the requirements for CDR report writing service? Do I need to submit any document?
  `,details:<div>• Your up-to-date passport size photograph<br/>
    • Bio page of Identity proof<br/>
    • English language score document<br/>
    • Degree Certificate<br/>
    • Certified Academic Transcripts<br/>
    • Three career Episodes Report<br/>
    • Summary statement Report<br/>
    • Continuing Professional Development (CPD) Report<br/>
    • CV-Resume Report</div>},
    {title:`How much time does it take for a CDR to be delivered?
  `,details:`Usually, CDR Report takes about three weeks to be completed and delivered.`},
  {title:`Do I need to submit my academic project?
  `,details:`Yes, Academic Projects are essential for CDR preparation. You can submit your Academic projects done during your professional studies as a career episode Report.`},{title:`Should I provide employment reference letter for my CDR?
  `,details:`Yes, you can submit your employment reference letter if you have a relevant work experience of one or more years and if you used the projects from CDR Report based on the experience.
  `},{title:`Do I need to provide a shred of evidence for the English language test?
  `,details:`Yes, it is essential to provide evidence for the English language test while applying for the CDR migration skill assessment.`},{title:`Do i have to pay upfront?
  `,details:`Yes, payment should be made on an instalment basis, for more details do not hesitate to contact our customer support service.`},{title:`Do I get to know the writers assigned to my Report? Can I talk to them?
  `,details:`No, you can talk with them through email; cdrassessmenthelp@writers.com or webchat.`},{title:`For How long is your service Valid?
  `,details:`Our service is valid for no more than three years.`},{title:`What if I have to cancel the service? Do you have any refund policy?
  `,details:`Sorry, there is no such policy once you agree to pay for our service.`},{title:`Do I need to have some work experience while applying for CDR?
  `,details:`No, work Experience is not mandatory. Competencies can be evaluated based on undergraduate qualifications, and your academic projects can be used for drafting the Career episodes Report.`},]
  return (
    <div className="position-relative">
       <Head>
      <title>FAQ | CDR Assessment Help</title>
      <meta name='description' content='FAQ | CDR Assessment Help'/>
      <link rel="canonical" href={canonicalUrl} />

      </Head>
      {/* <img src="/images/faq/hands.png" alt="FAQ" className="img-fluid position-absolute" style={{top:"600px"}} />
      <img src="/images/faq/handsright.png" alt="FAQ" className="img-fluid position-absolute" style={{top:"640px",right:"0"}} /> */}
      <Container>
        <div className="p-5" style={{textAlign:"center",fontWeight:"600",fontSize:"20px"}}>FAQ
        <Headings title="Frequently Asked Questions"/>
        <div className="px-5 py-3">
        <Paragraphs data="We’ve share some of our most frequently asked questions to help you out! You can also use the search 
bar for questions which are  not displayed!"/>
</div>
<div>
  <img src="/images/faq/bigfaq.png" alt="FAQ" className='img-fluid'/>
</div>
<div className='px-5'>
<Accordion defaultActiveKey="0">
      {listGroup?.map((l, index) => (
        <Accordion.Item className='my-4' key={index} eventKey={index}>
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
              <h7
                style={{
                  color: "#000",
                  
                  fontSize: "19px",
                  fontWeight: "600",
                  textAlign: "left",
                }}
              >
                {l.title}
              </h7>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <p style={{ color: "#000" ,fontSize:"16px",textAlign:"left" }}>{l.details}</p>
          </Accordion.Body>
        </Accordion.Item>
      ))} <Row>
  
</Row>
    </Accordion>

    </div>
    <div>

      <img src="/images/faq/text.png" alt="faq" className='img-fluid' style={{height:"200px",width:"235px"}}/>
      <h5 style={{color:"#373737",fontWeight:"700"}}>Frequently Asked Questions?</h5>
      <Paragraphs data="Can’t find the answer. Submit your Queries "/>
      <Button style={{backgroundColor:"#AE081C",color:"fff",fontWeight:"700",border:"none",borderRadius:"4px"}} className="py-2 px-4"> <a className='text-white text-decoration-none' href="mailto:info@cdrskillassessment.com"> Your Queries</a></Button>

    </div>

   </div>
      </Container>
    </div>
  )
}

export default FAQ