import React from 'react'

const Samp2 = ({cdrsampletitle,cdrsampleDescription}) => {
  return (
    <div>

<h3 style={{color:"#203546",fontWeight:"700",textAlign:"center"}} className='pt-4 pb-3'>{cdrsampletitle}</h3>
<p style={{color:"#666"}}>{cdrsampleDescription}
</p>

    </div>
  )
}

export default Samp2