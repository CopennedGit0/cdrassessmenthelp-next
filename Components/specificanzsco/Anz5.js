import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Anz5 = ({exceptionsTitle,exceptionsList, languageTitle , languageList , occupationsList , occupationsTitle }) => {
  return (
    <div>

<div>

<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{exceptionsTitle}</h3>
{exceptionsList.map((e,index)=>
   <Row key={index} className='pb-2'>
   <Col md={1}xs={2} >
       <img src="/images/vector1.png" alt="vector1" className='img-fluid ms-md-5 ms-4'/>
   </Col>

   <Col md={11} xs={10} style={{color:"#666"}}>
      {e} 
   </Col>
</Row>

)}
   


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{languageTitle}</h3>

{languageList.map((l,index)=>

<Row key={index} className='pb-2'>
    <Col md={1} xs={2}>
        <img src="/images/vector1.png" alt="vector1" className='img-fluid ms-md-5 ms-4'/>
    </Col>

    <Col md={11} xs={10} style={{color:"#666"}}>
     {l}
    </Col>
</Row>

)}


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{occupationsTitle}</h3>

{occupationsList.map((o,index)=>
    <Row  key={index} className='pb-2'>
    <Col md={1} xs={2}>
        <img src="/images/vector1.png" alt="vector1" className='img-fluid ms-md-5 ms-4'/>
    </Col>

    <Col md={11} xs={10} style={{color:"#666"}}>
    {o}

</Col>
</Row>


)}
</div>
    </div>
  )
}

export default Anz5