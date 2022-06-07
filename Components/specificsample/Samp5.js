import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Samp5 = ({eligibilityTitle , eligibilityDescription , eligibilityList}) => {
  
  return (
    <div>

<h5 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-5 pb-0'>{eligibilityTitle}</h5>

<p style={{color:"#666"}}>{eligibilityDescription} 
</p>

{eligibilityList?.map((f,index) => 


<Row key={index} className='ps-0 pb-2'>
    <Col md={1} >
        <img src="/tick.png" alt="vector arrow" className='img-fluid ms-5'/>
    </Col>
    <Col md={11}  style={{color:"#666"}}>
    {f}
    </Col>
    </Row>


)}

    </div>
  )
}

export default Samp5