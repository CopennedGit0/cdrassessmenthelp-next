
import { Col, Container, Row ,Button} from 'react-bootstrap'

const Writingcdr = () => {
  return (
    <div>
        <Container>
        <h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='px-md-5 pt-5 pb-5'>Writing CDR reports for engineers is not so easy. Make sure your CDR service 
provider checks to Australian standards.</h3>

     <Row className='pb-3'>
         <Col md={2} className='d-flex justify-content-md-center justify-content-start'>
             <img src="/images/cdrwriting/absp.png" alt="australia standard" className='img-fluid mt-md-4 ms-md-5 mb-4 mb-md-0' style={{height:"100px",width:"100px"}}/>
         </Col>
         <Col md={10}>
             <h5 style={{color:"#000",fontWeight:"700"}}>Australian based service provider</h5>
             <p style={{color:"#666"}}>Most of the CDR writing service providers are not based in Australia. CDR report written by such consultants may be accepted. 
However, they may not frequently keep up with Australian Engineering Scenarios because they are headquartered outside Australia. 
CDRskillassessment provides you with an edge in this regard as we are located in Australia. We help you choose the best engineering 
career in the Australian Engineering scene. Furthermore, our CDR Writing Service is based in Australia; we ensure that it meets 
Australian standards.</p>
         </Col>
     </Row>

     <Row className='pb-3'>
         <Col md={2} className='d-flex justify-content-md-center justify-content-start' >
             <img src="/images/cdrwriting/ewcdr.png" alt="australia standard" className='img-fluid mt-md-4 ms-md-5 mb-4 mb-md-0' style={{height:"100px",width:"100px"}}/>
         </Col>
         <Col md={10}>
             <h5 style={{color:"#000",fontWeight:"700"}}>Engineering writer prepares better CDR</h5>
             <p style={{color:"#666"}}>Nowadays, several CDR Consultants provide CDR Writing Services. However, many are academic writers rather than engineers or 
scientists. An engineer is required to pass an engineering evaluation. You must be cautious not to jeopardise your application by 
hiring a writer rather than an engineer with writing abilities. A writer with an engineering background well understands engineers 
Australia&apos;s CDR criteria. We have skilled and experienced engineer writers that will help and guide you in the proper direction while 
producing high-quality material tailored to your unique requirements.</p>
         </Col>
     </Row>
    
     <Row>
         <Col md={2} className='d-flex justify-content-md-center justify-content-start'>
             <img src="/images/cdrwriting/absp.png" alt="australia standard" className='img-fluid mt-md-4 ms-md-5 mb-4 mb-md-0' style={{height:"100px",width:"100px"}}/>
         </Col>
         <Col md={10}>
             <h5 style={{color:"#000",fontWeight:"700"}}>CDR writing service providers must be familiar with immigration in Australia</h5>
             <p style={{color:"#666"}}>Every CDR writing service provider should be familiar with the immigration procedure followed by the Australian government, 
especially relating to the skilled migration of engineers. They should know how the immigration process is carried out from the 
beginning to the end of the visa application process and successful visa approval. 
Although CDR writing service mainly deals with 
getting a positive assessment from Engineers Australia in the migration skill assessment process, they need to consider the other 
processes of the immigration application process. They should be aware of all the requirements and criteria that must be met before 
the visa applicationprocess, such as determining the talents in demand, the kind of visa appropriate for the applicant&apos;s eligibility, skill 
assessment, and IELTS score, and the filing of an Expression of Interest (EOI). 
After the EOI is approved, an invitation to apply for a 
visa is issued. They must understand the significance of a solid CDR to receive a successful visa acceptance letter. 
</p>
         </Col>
     </Row>

     <h3 style={{color:"#000",fontWeight:"700",textAlign:""}} className='px-md-5 pt-5 ms-md-5 '>Experts are ready to clear your doubts on CDR report writing for Engineers</h3>
      <p style={{color:"#666",textAlign:"center"}} className='px-md-5 pb-2 ms-md-5'>We are here to answer any of your questions and to offer you the most satisfactory service possible. 
In case of any inconvenience, feel free to contact our experts.
</p>
<div className='d-flex justify-content-center  justify-content-md-center'>
<Button href='/contact-us' style={{backgroundColor:"#970012" ,fontWeight:"600",border:"none"}} className="mb-5 ps-md-2">
    Contact an Expert
    </Button> 
 
</div>

    
        </Container>
    </div>
  )
}

export default Writingcdr