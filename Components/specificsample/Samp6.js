import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Samp6 = ({skillsAssessmentTitle, skillsAssessmentDescription , skillsAssessmentList , skillsAssessmentDescription2 , skillsAssessmentList2 , skillsAssessmentDescription3,
    verdictTitle, verdictDescription}) => {
  return (
    <div>
        <h5 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-5 pb-0'>{skillsAssessmentTitle}</h5>

<p style={{color:"#666"}}>{skillsAssessmentDescription} 
</p>

{skillsAssessmentList?.map((f,index) => 


<Row key={index} className='ps-0 pb-2'>
    <Col md={1} >
        <img src="/tick.png" alt="vector arrow" className='img-fluid ms-5'/>
    </Col>
    <Col md={11}  style={{color:"#666"}}>
    {f}
    </Col>
    </Row>


)}




<p style={{color:"#666"}}>{skillsAssessmentDescription2} 
</p>
{skillsAssessmentList2?.map((g,index) => 


<Row key={index} className='ps-0 pb-2'>
    <Col md={1} >
        <img src="/tick.png" alt="vector arrow" className='img-fluid ms-5'/>
    </Col>
    <Col md={11}  style={{color:"#666"}}>
    {g}
    </Col>
    </Row>


)}




<p style={{color:"#666"}} className='pt-4 px-5 '  >{skillsAssessmentDescription3 && skillsAssessmentDescription3 } 
</p>



<h5 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-0 pb-0'>{verdictTitle}</h5>
<p style={{color:"#666"}} className='pt-42'  >{verdictDescription} 
</p>


    </div>
  )
}

export default Samp6