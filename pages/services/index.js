import React from 'react'
import CEs from '../../Components/OurServices/CEs'
import Common from '../../Components/OurServices/Common'
import Guarenteed from '../../Components/OurServices/Guarenteed'
import Help from '../../Components/OurServices/Help'
import Weoffer from '../../Components/OurServices/Weoffer'
import  Head  from 'next/head';

const Ourservices = () => {
  return (
    <div>
      <Guarenteed/>
      <Common/>
      <Help/>
      <Weoffer/>
      <CEs/>
    </div>
  )
}

export default Ourservices