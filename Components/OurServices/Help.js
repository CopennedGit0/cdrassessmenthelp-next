import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Help = () => {
    const dataList=[{image:`/images/services/freecdr.png`,title:`Plagiarism-free CDR Report`,data:`Engineers Australia does not tolerate plagiarized 
    content in skill assessment. Take professionals to 
    help in writing flawless CDR.`,alt:`Plagiarism free cdr report`},{image:`/images/services/star.png`,title:`Experienced CDR Writers`,data:`CDR writing professionals will help you to 
    demonstrate engineering skills and knowledge 
    for positive assessment from Engineers Australia.`,alt:`Experienced CDR Writers`}
    ,{image:`/images/services/truck.png`,title:`Delivery at the promised time`,data:`We help you in writing CDR based on your career 
    and degree to meet the deadline for the skill 
    assessment of Engineers Australia. `,alt:`Delivery at the promised time`},{image:`/images/services/notes.png`,title:`Positive Skill Assessment`,data:`Writers from engineering backgrounds with 
    years of experience in CDR writing services 
    will help in writing CDR for positive skill
     assessment by Engineers Australia.`,alt:`Positive Skill Assessment`},{image:`/images/services/dollar.png`,title:`Reasonable price range`,data:`Superior CDR writing help at the most reasonable 
     price. Prepare flawless CDR reports at an affordable 
     rate.`,alt:`Reasonable price range`}
,{image:`/images/services/badge.png`,title:`Genuine CDR Content`,data:`Take professionals to help in writing flawless 
CDR. Engineers Australia does not tolerate 
copied content in skill assessment.`,alt:`Genuine CDR Content`}]
  return (
    <div>
        <Container>
        <h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='px-md-5 pt-5 pb-3'>Guaranteed skill assessment from 
EA with CDR writing help. </h3>
      <p style={{color:"#666"}} className='px-md-5 pb-4' >Positive skill assessment of CDR depends on various 
factors while writing. Most of all presentation of 
engineering skills and knowledge in the right format 
and structure is important  </p>
     

     <Row className='px-md-5'>
         {dataList.map((d,i)=>
          <Col key={i} md={6}>
          <Row>
              <Col md={2} xs={2} className='p-2 mobileScreenHelpImages'>
               <img src={d.image} alt={d.alt} className='img-fluid ms-4 mt-1 ' />
              </Col>
              <Col md={10} xs={10} className="px-5">
                  <h5 style={{color:"#203546",fontWeight:"600"}}>{d.title}</h5>
                   <p style={{color:"#666"}}>{d.data}</p>   
              </Col>

          </Row>

         
      </Col>
         )}
       
     </Row>
        </Container>
    </div>
  )
}

export default Help