import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Anz3 = ({occupationListTitle, occupationList, visaProvisionTitle2, visaProvisionDescription2}) => {
  return (
    <div>

       
<div>

<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-1'>{occupationListTitle}</h3>
 {occupationList.map((o,index)=>
    <Row key={index} className='ps-md-5 pb-2'>
    <Col md={1} xs={2} >
        <img src="/vector.png" alt="vector arrow" className='img-fluid ms-md-5 ms-4'/>
    </Col>
    <Col md={11} xs={10}  style={{color:"#666"}}>
    {o}
    
    </Col>
</Row>


 )}
 
 <h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{visaProvisionTitle2 && visaProvisionTitle2 }</h3>
 <p style={{color:"#666"}}>{visaProvisionDescription2 && visaProvisionDescription2}</p>
 
 
 
 
 </div>




    </div>
  )
}

export default Anz3