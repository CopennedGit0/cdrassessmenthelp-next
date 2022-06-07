import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Anz6 = ({tasks, tasksTitle}) => {
  return (
    <div>
        <div>

<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{tasksTitle}</h3>

{tasks.map((t,index)=>
    <Row key={index} className='pb-2'>
    <Col md={1} xs={2}>
        <img src="/vector1.png" alt="vector1" className='img-fluid ms-md-5 ms-4'/>
    </Col>

    <Col md={11} xs={10} style={{color:"#666"}}>
   {t}
    </Col>
</Row>

)}

</div>
    </div>
  )
}

export default Anz6