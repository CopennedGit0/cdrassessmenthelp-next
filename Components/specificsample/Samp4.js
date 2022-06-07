import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Samp4 = ({cerSampletitle , cerSampleDescription , careerEpisode1title , careerEpisode1Description ,careerEpisode1List,
    careerEpisode2title , careerEpisode2Description ,careerEpisode2List,
    careerEpisode3title , careerEpisode3Description ,careerEpisode3List  }) => {
  return (
    <div>
        <h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-5 pb-0'>{cerSampletitle} </h3>

<p style={{color:"#666"}}>{cerSampleDescription}
</p>





<h5 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-5 pb-0'>{careerEpisode1title}</h5>

<p style={{color:"#666"}}>{careerEpisode1Description} 
</p>

{careerEpisode1List.map((c,index) => 


<Row key={index} className='ps-0 pb-2'>
    <Col md={1} >
        <img src="/tick.png" alt="vector arrow" className='img-fluid ms-5'/>
    </Col>
    <Col md={11}  style={{color:"#666"}}>
    {c}
    </Col>
    </Row>


)}






<h5 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-5 pb-0'>{careerEpisode2title}</h5>

<p style={{color:"#666"}}>{careerEpisode2Description} 
</p>

{careerEpisode2List.map((d,index) => 


<Row key={index} className='ps-0 pb-2'>
    <Col md={1} >
        <img src="/tick.png" alt="vector arrow" className='img-fluid ms-5'/>
    </Col>
    <Col md={11}  style={{color:"#666"}}>
    {d}
    </Col>
    </Row>


)}





<h5 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-5 pb-0'>{careerEpisode3title}</h5>

<p style={{color:"#666"}}>{careerEpisode3Description} 
</p>

{careerEpisode3List.map((e,index) => 


<Row key={index} className='ps-0 pb-2'>
    <Col md={1} >
        <img src="/tick.png" alt="vector arrow" className='img-fluid ms-5'/>
    </Col>
    <Col md={11}  style={{color:"#666"}}>
    {e}
    </Col>
    </Row>


)}


    </div>
  )
}

export default Samp4