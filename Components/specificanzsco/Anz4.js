import React from 'react'

const Anz4 = ({visaProvisionTitle2,visaProvisionDescription2,skillLevelTitle2,skillLevelDescription2}) => {
  return (
    <div>

<div>


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-md-0 pb-3'>{visaProvisionTitle2 && visaProvisionTitle2}</h3>
<p style={{color:"#666"}}>{visaProvisionDescription2 && visaProvisionDescription2}
</p>

<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-md-0 pb-3'>{skillLevelTitle2}</h3>
<p style={{color:"#666"}}>{skillLevelDescription2}
</p>




</div>



    </div>
  )
}

export default Anz4