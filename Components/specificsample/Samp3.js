import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Samp3 = ({card , keyTitle, keyDescription  }) => {
  
  return (
    <div>

<h3 style={{color:"#203546",fontWeight:"700",textAlign:"center"}} className='pt-4 pb-3'>{keyTitle}</h3>
<p style={{color:"#666"}} className="pb-4">{keyDescription}
</p>

      <Row >
        {card.map((c,index)=>
        
        <Col
        md={4} className='pb-5 px-5'>
     <div style={{height:"400px",width:"350px",background:"#970012",borderTopLeftRadius:"50px",borderBottomRightRadius:"50px"}}>
        <img src={c.image} alt={c.title} className='img-fluid ' style={{height:"120px",width:"120px", margin:"40px 30px 0 130px"}} />
          <h5 style={{color:"#fff",textAlign:"center"}} className="p-3"> {c.title}</h5>
          <p style={{color:"#fff",textAlign:"center"}} className="px-5">{c.data}</p>
          
     </div>
     </Col>
        )}
      
      </Row>
    </div>
  )
}

export default Samp3