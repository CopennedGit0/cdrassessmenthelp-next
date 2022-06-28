import React from 'react'

const Anz2 = ({specializationsTitle, specializationsList,unitGroupTitle1,unitGroupTitle2,unitGroupTitle2Description, skillLevelTitle,skillLevelDescription, skillAssessmentTitle,skillAssessmentDescription, visaProvisionTitle,visaProvisionDescription }) => {
  return (
    <div>

<div>

<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-5 pb-0'>{unitGroupTitle1} </h3>
<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{unitGroupTitle2} </h3>
<p style={{color:"#666"}}>{unitGroupTitle2Description}
</p>
 
<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{skillLevelTitle} </h3>
<p style={{color:"#666"}}>{skillLevelDescription}
</p>

<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-md-4 pb-3'>{specializationsTitle} </h3>

{specializationsList?.map((s,index)=>
  <p key={index} style={{color:"#666"}}>{s}
</p>
)}



<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-0 pb-3'>{skillAssessmentTitle && skillAssessmentTitle}</h3>
<p style={{color:"#666"}}>{skillAssessmentDescription && skillAssessmentDescription}
</p>

<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-md-3'>{visaProvisionTitle && visaProvisionTitle}</h3>
<p style={{color:"#666"}}>{visaProvisionDescription && visaProvisionDescription}
</p>




</div>

    </div>
  )
}

export default Anz2