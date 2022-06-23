import React,{useState} from 'react'
import { Container, Table ,Button, Col, Row} from 'react-bootstrap'
import Headings from '../Headings'

const Summarysecond = () => {
  const [showTable1Data,setShowTable1Data] = useState(false)
  const [showTable2Data,setShowTable2Data] = useState(false)
  const [showTable3Data,setShowTable3Data] = useState(false)
  return (
    <div>
        <Container>

       
        <Headings title="CDR Summary Statement writing format for skill assessment of Engineers Australia" />
        <div className='mx-md-5'>
        <Table bordered hover className="ourCDRServicesParagraph">
          <thead>
            <tr
              style={{
                backgroundColor: "#970012"
                ,
                color: "#FFF",
                padding: "10px ",
              }}
              className="p-md-5"
            >
              <th>#</th>
              <th>Competency Element</th>
              <th>A brief summary of how you have applied for the element</th>
              <th>
                Paragraph number in the career episodes(s) where the element is
                addressed
              </th>
            </tr>
          </thead>
          <tbody>
            <tr  onClick={()=>setShowTable1Data(!showTable1Data)}>
              <td>1</td>
              <td><strong>PE1 KNOWLEDGE AND SKILL BASE</strong></td>
              <td></td>
              <td></td>
            </tr>
            {showTable1Data && 
            <>
            <tr >
              <td></td>
              <td>PE1.1 Theory-based, Comprehensive understanding of the underpinning natural and physical sciences and the engineering fundamentals applicable to the engineering discipline</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE1.2 Conceptual understanding of numerical analysis, mathematics, statistics, and computer and information sciences under pin the engineering discipline.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE1.3 In-depth understanding of specialist bodies of knowledge within the engineering discipline.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE1.4 Discernment of knowledge development and research directions within the engineering discipline.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE1.5 Knowledge of contextual factors impacting the engineering discipline.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE1.6 Understanding the scope, principles, norms, accountabilities, and bounds of contemporary engineering practice in the specific discipline.</td>
              <td></td>
              <td></td>
            </tr>
            </>}
            <tr onClick={()=>setShowTable2Data(!showTable2Data)}>
              <td>2</td>
              <td><strong>PE2 ENGINEERING APPLICATION ABILITY</strong></td>
              <td></td>
              <td></td>
            </tr>
            {showTable2Data && <>
              <tr >
              <td></td>
              <td>PE2.1 Application of established engineering methods to complex engineering problem-solving.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE2.2 Fluent application of engineering techniques, tools, and resources.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE2.3 Application of systematic engineering synthesis and design processes</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE2.4 Application of systematic approaches to the conduct and management of engineering projects.</td>
              <td></td>
              <td></td>
            </tr>
            </>}
            <tr onClick={()=>setShowTable3Data(!showTable3Data)}>
              <td>3</td>
              <td><strong>PE3 PROFESSIONAL AND PERSONAL ATTRIBUTES</strong></td>
              <td></td>
            </tr>
            {showTable3Data && <>
              <tr >
              <td></td>
              <td>PE3.1 Ethical conduct and professional accountability.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE3.2 Effective oral and written communication in professional and lay domains.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE3.4 Professional use and management of information.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE3.5 Orderly management of self and professional conduct.</td>
              <td></td>
              <td></td>
            </tr>
            <tr >
              <td></td>
              <td>PE3.6 Effective team leadership and team membership</td>
              <td></td>
              <td></td>
            </tr>
           
            </>}
          </tbody>
        </Table>
        </div>
        <h3 style={{color:"#000",fontWeight:"700",textAlign:"center"}} className='px-0 pt-5 ms-0 mt-3'>We guarantee a positive Skill Assessment from Engineers Australia</h3>
      <p style={{color:"#666",textAlign:"center"}} className='px-md-3 pb-2 ms-0'>CDR assessment help provides the best summary statement writing service for engineers in Australia. We know common mistakes people make in CDR 
Summary Statement writing for Engineers Australia. Prepare a Summary Statement that will get CDR approved by Engineers Australia. 
</p>
<div className='d-flex justify-content-center justify-content-md-center'>
<Button href='/pricing' style={{backgroundColor:"#970012" ,fontWeight:"600",border:"none"}} className="mb-md-5 ">
Check our Pricing
</Button>
</div>

<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-5 pb-1'>Pro tips on writing CDR Summary Statement for Skill Assessment of EA</h3>
<p style={{color:"#666"}}>The following are the three types of indications that must be included in the Competency Element column: </p>
     <div className='desktopScreen'>
      <Row>
          <Col md={6} className='px-md-5 mt-4'>
      
      <h5 style={{color:"#203546",fontWeight:"700",textAlign:""}} className="mt-md-5 pt-md-5">1.	Summary Statement Writing is based on Skill and 
     Knowledge: </h5>
      <p style={{color:"#666"}} className='px-md-3'>Summary Statement writing is based on the knowledge and 
skill competency unit; it establishes the tone for the summary 
statement by asking the applicant to offer examples of broad 
engineering knowledge and skill. Looking at the many parts, it 
is clear that a comprehensive understanding of the abilities is 
essential. </p>


      
      </Col>
      
      <Col md={6}>
          <img src="/images/summary/ssw.png" alt="Summary Statement Writing" className='img-fluid'/>
      </Col>
      </Row>
      <Row className="pt-5">
      <Col md={6}>
          <img src="/images/summary/swe.png" alt="Summary writing engineer" className='img-fluid'/>
      </Col>
          <Col md={6} className='px-md-5 mt-4'>
      
      <h5 style={{color:"#203546",fontWeight:"700",textAlign:""}}> 

      2.	Summary Statement Writing requires applicability 
      to Engineering: 
</h5>
      <p style={{color:"#666"}}>This is a crucial component that allows you to demonstrate your 
technical expertise and engineering skills. While writing a 
summary statement, you should carefully study each description 
to distinguish the signs and link them to the appropriate instances 
in your Career Episodes. 
The first element in this section can be used to demonstrate 
engineering problem-solving methods; the second element can 
be used to mention the tools, techniques, and resources used in 
the projects; the third element can be used to demonstrate the 
application of design processes, and the fourth element can be 
used to mention project management experience.
 </p>

                
      
      </Col>
      
     
      </Row>
      <Row>
          <Col md={6} className='px-md-5 mt-5 pt-5 '>
      
      <h5 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-5 mt-5'> 3.	Personal and Professional Traits</h5>
      <p style={{color:"#666"}}>The professional and personal attributes competence 
unit focuses on soft factors such as communication, 
behavioural, social, and leadership aspects, such as 
ethics, team membership, creativity, and team 
leadership.

 </p>


      </Col>
      
      <Col md={6} className='mt-5 pt-5'>
          <img src="/images/summary/ppt.png" alt="Personal and Professional traits" className='img-fluid'/>
      </Col>
      </Row>
      <Row className="pt-5">
      <Col md={6}>
          <img src="/images/summary/genuine.png" alt="introduction" className='img-fluid'/>
      </Col>
          <Col md={6} className='px-5 mt-5 pt-5'>
      
      <h5 style={{color:"#203546",fontWeight:"700",textAlign:""}}> 
      4. 100% Genuine Content in Summary Statement 
      Writing: 
</h5>
      <p style={{color:"#666"}}>Our professionals can create a grand CDR with accurate 
data that can be readily verified. We make sure that your 
report is always one-of-a-kind so that Engineers Australia 
will assess it. </p>

                
      
      </Col>
      
     
      </Row>
      </div>

      <div className='mobileScreen'>
      <Row>
      <Col md={6}>
          <img src="/images/summary/ssw.png" alt="Summary Statement Writing" className='img-fluid'/>
      </Col>
          <Col md={6} className='px-md-5 mt-4'>
      
      <h5 style={{color:"#203546",fontWeight:"700",textAlign:""}} className="mt-md-5 pt-md-5">1.	Summary Statement Writing is based on Skill and 
     Knowledge: </h5>
      <p style={{color:"#666"}} className='px-md-3'>Summary Statement writing is based on the knowledge and 
skill competency unit; it establishes the tone for the summary 
statement by asking the applicant to offer examples of broad 
engineering knowledge and skill. Looking at the many parts, it 
is clear that a comprehensive understanding of the abilities is 
essential. </p>


      
      </Col>
      
    
      </Row>
      <Row className="pt-md-5">
      <Col md={6}>
          <img src="/images/summary/swe.png" alt="Summary writing engineer" className='img-fluid'/>
      </Col>
          <Col md={6} className='px-md-5 mt-md-4'>
      
      <h5 style={{color:"#203546",fontWeight:"700",textAlign:""}}> 

      2.	Summary Statement Writing requires applicability 
      to Engineering: 
</h5>
      <p style={{color:"#666"}}>This is a crucial component that allows you to demonstrate your 
technical expertise and engineering skills. While writing a 
summary statement, you should carefully study each description 
to distinguish the signs and link them to the appropriate instances 
in your Career Episodes. 
The first element in this section can be used to demonstrate 
engineering problem-solving methods; the second element can 
be used to mention the tools, techniques, and resources used in 
the projects; the third element can be used to demonstrate the 
application of design processes, and the fourth element can be 
used to mention project management experience.
 </p>

                
      
      </Col>
      
     
      </Row>
      <Row>
              
      <Col md={6} className='mt-md-5 pt-md-5'>
          <img src="/images/summary/ppt.png" alt="Personal and Professional traits" className='img-fluid'/>
      </Col>
          <Col md={6} className='px-md-5 mt-md-5 pt-md-5 '>
      
      <h5 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-5 mt-5'> 3.	Personal and Professional Traits</h5>
      <p style={{color:"#666"}}>The professional and personal attributes competence 
unit focuses on soft factors such as communication, 
behavioural, social, and leadership aspects, such as 
ethics, team membership, creativity, and team 
leadership.

 </p>


      </Col>

      </Row>
      <Row className="pt-md-5">
      <Col md={6}>
          <img src="/images/summary/genuine.png" alt="introduction" className='img-fluid'/>
      </Col>
          <Col md={6} className='px-md-5 mt-md-5 pt-md-5'>
      
      <h5 style={{color:"#203546",fontWeight:"700",textAlign:""}}> 
      4. 100% Genuine Content in Summary Statement 
      Writing: 
</h5>
      <p style={{color:"#666"}}>Our professionals can create a grand CDR with accurate 
data that can be readily verified. We make sure that your 
report is always one-of-a-kind so that Engineers Australia 
will assess it. </p>

                
      
      </Col>
      
     
      </Row>
      </div>

      <h3 style={{color:"#000",fontWeight:"700",textAlign:"center"}} className='px-0 pt-md-5 ms-0 mt-3'>Want to know more? Our experts will clear your Doubt</h3>
      <p style={{color:"#666",textAlign:"center"}} className='px-md-5 pb-2 ms-0'>We are here to answer any of your questions and to offer you the most satisfactory service possible. In case of any inconvenience, feel 
free to contact our experts. 
</p>
<div  className='d-flex justify-content-center'>
<Button href='/our-agents' style={{backgroundColor:"#970012" ,fontWeight:"600",border:"none"}} className="mb-5 ">
Contact an Expert
</Button>
</div>
        </Container>
    </div>
  )
}

export default Summarysecond