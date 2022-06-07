import React from 'react'
import { Col, Row ,Button } from 'react-bootstrap'
import Headings from '../Headings'
import Paragraphs from '../Paragraphs'

const Samp1 = ({title,description,image}) => {
  return (
    <div>
         <Row className=''>
            <Col md={5} className="py-5">
              <div className=''>


            <Headings title={title} align="potato"/>

            </div>
  <div className='pt-3'>              
<Paragraphs
 data={description} align="potato"/>
   </div>         
<div style={{}} className='pt-4'>
<Button style={{backgroundColor:"#970012",fontWeight:"600",color:"#fff",borderRadius:"4px",border:"none"}} className="px-4">
  Contact Us
</Button>
<Button style={{backgroundColor:"#fff",color:"#970012",fontWeight:"600",border:"1px solid #970012"}} className='px-3 ms-4'>
GET INSTANT HELP
</Button>
</div>
<p style={{color:"#000",fontWeight:"500"}} className='pt-4'>Trusted by thousand of Engineers from around the world</p>

</Col>

<Col md={7}>
  <img src={image} alt={title} className='img-fluid'/>
</Col>
</Row>


    </div>
  )
}

export default Samp1