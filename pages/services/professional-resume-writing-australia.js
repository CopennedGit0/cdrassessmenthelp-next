import React from 'react'
import { Col, Container, Row ,Button} from 'react-bootstrap'
import Headings from '../../Components/Headings'
import Paragraphs from '../../Components/Paragraphs'
import {useRouter} from 'next/router'
import  Head  from 'next/head';

const ResumeWriting = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  const dataList=[{image:`/images/resume/1.png`,title:`Use of Australian English Language`,data:`All detailed information included in the Resume 
  Writing for CDR Report should be in the Australian 
  language, as per Engineer Australia.`,alt:`Use of Australian English Language`},{image:`/images/resume/2.png`,title:`Appropriate use of keywords`,data:`Include the keywords that identify you and your 
  profession and job function while writing your 
  CDR resume for Engineers Australia.`,alt:`Appropriate use of keywords`},{image:`/images/resume/3.png`,title:`Do not mention irrelevant information`,data:`Avoid unnecessary details and only state what EA 
  is looking for and what is needed. Submission of 
  irrelevant information will result in rejection.`,alt:`Do not mention irrelevant information`},
  {image:`/images/resume/4.png`,title:`All professional careers should be 
  mentioned`,data:`Mentioning every professional achievement detail 
  in an exact format while writing a CDR resume will 
  create a good impression on  Engineers Australia.`,alt:`All professional careers should be 
  mentioned`},{image:`/images/resume/5.png`,title:`Information on Project list`,data:`It would be advantageous to describe all project's 
  work in detail so that assessors could properly 
  evaluate abilities. If you are inactive in your work, 
  you must provide a good cause for your absence.`,alt:`Information on Project list`},{image:`/images/resume/6.png`,title:`Additional Details`,data:`Along with all of this information, don't forget 
  to include your resident status, language ability, 
  computer abilities, community work, hobbies 
  and interests, and professional organisations.`,alt:`Additional Details`},
  {image:`/images/resume/7.png`,title:`Take help from Professional CDR Resume 
  writing services`,data:`Writing a perfect CDR resume plays a crucial role in 
  getting approval from EA. With help of professional 
  writers at CDRassessmenthelp, you can develop a flawless 
  resume to present along with CDR to EA.`,alt:`Take help from Professional CDR Resume 
  writing services`},{image:`/images/resume/8.png`,title:`Academic achievements `,data:`Educational details and information are essential 
  in expressing ambitions and interests in the 
  engineering field. Along with academic 
  achievements, list any courses and extracurricular 
  activities participated to further knowledge.`,alt:`Academic achievements `},{image:`/images/resume/9.png`,title:`Personal Information`,data:`Name, contact information, address, email address, 
  skill details, capabilities, and achievements to date 
  are included in personal information on resume 
  writing for EA. While writing a CDR Resume personal 
  data should be presented clearly and appropriately to 
  receive a good assessment from EA.`,alt:`Personal Information`}
,{image:`/images/resume/10.png`,title:`Make it Professional`,data:`Resume should be written in proper format; if 
your CDR Resume is in the proper setup, you will 
have the best chance of acceptance from EA. We 
have already written a high-Quality CDR Resume. 
Our Professional writers from an engineering 
background with years of experience in CDR 
writing make CDRskillassessment the best 
resume writing service provider in Australia.`,alt:`Make it Professional`}]
  return (
    <div>
      <Head>
        <title>professional CV-Resume Writing services for Engineers Australia.</title>
        <meta name='description' content="Searching for Best cv-Resume Writing service provider in Australia? Our professional writers help you with Best Cv-Resume Report for Engineers Australia"/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Container> 
      <Row>
            <Col md={5} className="py-5">
                <Headings title="Writing CDR Resume for 
Engineers Australia" align="potato"/>
<Paragraphs data="Reduce your chance of getting rejected by Engineers Australia 
to 0%. Expert writers with years of experience in CDR Resume 
writing will make your CDR report professional. 
Our team of expert writers are ready to assist you; you are just 
a click away.

      " align="potato"/>
            

<Button style={{backgroundColor:"#970012",fontWeight:"600",color:"#fff",borderRadius:"4px",border:"none"}}>
  Contact Us
</Button>
<Button style={{backgroundColor:"#fff",marginLeft:"10px",color:"#970012",fontWeight:"600",border:"1px solid #970012"}}>
GET INSTANT HELP
</Button>
<p className='text-center text-md-start' style={{color:"#434343",fontWeight:"400"}}>Trusted by thousand of Engineers from around the world</p>

</Col>

<Col md={7}>
  <img src="/images/resume/resume.png" alt="checking and removing plagiarism" className='img-fluid'/>
</Col> 
</Row>


<h4 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-5'>Typical errors engineers make while writing a CDR Resume in Australia</h4>
            <Row className='pt-3'>
                <Col md={1} xs={2}>
                    <img src="/images/cdrreviewing/tick.png" alt="tick" className='img-fluid mt-2' style={{height:"20px",width:"20px",float:"right"}}/>
                </Col>
                <Col md={11} xs={10}>
                    <p style={{color:"#666"}}>Excluding measurable achievements.
</p>
                </Col>
            </Row>
            <Row className=''>
                <Col md={1} xs={2}>
                    <img src="/images/cdrreviewing/tick.png" alt="tick" className='img-fluid mt-2' style={{height:"20px",width:"20px",float:"right"}}/>
                </Col>
                <Col md={11} xs={10}>
                    <p style={{color:"#666"}}>Writing a CDR resume that is not relevant to the job.
</p>
                </Col>
            </Row>
            <Row className=''>
                <Col md={1} xs={2}>
                    <img src="/images/cdrreviewing/tick.png" alt="tick" className='img-fluid mt-2' style={{height:"20px",width:"20px",float:"right"}}/>
                </Col>
                <Col md={11} xs={10}>
                    <p style={{color:"#666"}}>Writing CDR resume in an improper format containing spelling and grammatical errors.
</p>
                </Col>
            </Row>


            <Row className=''>
                <Col md={1} xs={2}>
                    <img src="/images/cdrreviewing/tick.png" alt="tick" className='img-fluid mt-2' style={{height:"20px",width:"20px",float:"right"}}/>
                </Col>
                <Col md={11} xs={10}>
                    <p style={{color:"#666"}}>Writing CDR resume without dates of work and list of skills acquired. 

</p>
                </Col>
            </Row>

            <Row className=''>
                <Col md={1} xs={2}>
                    <img src="/images/cdrreviewing/tick.png" alt="tick" className='img-fluid mt-2' style={{height:"20px",width:"20px",float:"right"}}/>
                </Col>
                <Col md={11} xs={10}>
                    <p style={{color:"#666"}}>Applications that do not provide important information in an orderly fashion.
 

</p>
                </Col>
            </Row>



            <h4 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-md-5'>Things to keep in mind while writing a CDR resume for Engineers Australia</h4>
            <Row>
              {dataList.map((d,index)=>
               <Col md={6} key={index} className="py-3">
               <Row>
                 <Col md={3} xs={3}>
               
               <img src={d.image} alt={d.alt} className='img-fluid plagiarismVectorImage'  style={{height:"100px",width:"100px"}} />
               </Col>
               <Col md={9} xs={9}>
               <strong style={{color:"#000",fontSize:"18px"}}>{d.title}</strong>
               <p style={{color:"#000",textAlign:"justify"}}>{d.data}</p>
        </Col>
        
        </Row>
             </Col>
            
              
              )}
            </Row>

            <h3 style={{color:"#000",fontWeight:"700",textAlign:"center"}} className='px-0 pt-5 ms-0'>Choose the best reviewing service provider to review your CDR for EA</h3>
      <p style={{color:"#666",textAlign:"center"}} className='px-md-3 pb-2 ms-0'>Engineers who wish to pursue an engineering career in Australia should write a CDR report to demonstrate skills, knowledge and 
experience to Engineers Australia. We have dedicated engineering teams with years of experience in CDR Reviewing Service for engineers 
in Australia.
</p>
<div className='d-flex justify-content-center'>
<Button style={{backgroundColor:"#970012" ,fontWeight:"600",border:"none"}} className="mb-md-5 ">
    Check Our Pricing
    </Button> 
</div>


    <h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='px-0 pt-5 ms-0'>Advantages of using a reputable service provider for CDR Resume writing before presenting to Engineers Australia</h3>
    <Row className='px-5'>
       <img src="/images/resume/mc.png" alt="multilevel checking" className='img-fluid my-2 my-md-2' style={{width:"320px",height:"350px"}}/>
       <img src="/images/resume/pg.png" alt="proper guidance" className='img-fluid my-2 my-md-2' style={{width:"320px",height:"350px"}}/>
       <img src="/images/resume/pes.png" alt="provide electroniv service" className='img-fluid my-2 my-md-2' style={{width:"320px",height:"350px"}}/>
    </Row>

    <h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='px-0 pt-5 ms-0'>CDRassessmenthelp’s professional CDR resume writing service ensures approval from EA</h3>
    <p tyle={{color:"#666"}}>Resume writing is an essential component of the CDR Report. Thus, any Engineering Applicants who wish to travel to Australia via 
CDR Skill Assessment must write a high-quality CDR resume that makes a favourable impression on Engineers Australia.
Writing a 
high-quality CDR resume is such laborious work for novice writers or applicants that there is a significant chance of making a 
catastrophic error and getting rejected by Engineers Australia. Keeping this in mind, CDRskillassessment will assist you with CDR 
resume writing for Engineers Australia. <br/>
We have a team of expert writers who can provide resume writing services at very low pricing. From our years of experience, we 
prepare flawless resumes. Engineers Australia (EA) has already Approved our CDR reports, and many engineering Applicants are
happy with our services; please stay connected with us for CDR Resume writing help.
</p>



<h3 style={{color:"#000",fontWeight:"700",textAlign:"center"}} className='px-0 pt-md-5 ms-0'>Want to know more? Our experts will clear your Doubt</h3>
      <p style={{color:"#666",textAlign:"center"}} className='px-md-3 pb-2 ms-0'>We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel 
free to contact our experts.
</p>
<div className='d-flex justify-content-center'>
<Button style={{backgroundColor:"#970012" ,fontWeight:"600",border:"none"}} className="mb-5 ">
    Contact an Expert
    </Button> 
</div>


      </Container>
    </div>
  )
}

export default ResumeWriting