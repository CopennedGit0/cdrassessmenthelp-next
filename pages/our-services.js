import React from 'react'
import CEs from '../Components/OurServices/CEs'
import Common from '../Components/OurServices/Common'
import Guarenteed from '../Components/OurServices/Guarenteed'
import Help from '../Components/OurServices/Help'
import Weoffer from '../Components/OurServices/Weoffer'
import {useRouter} from 'next/router'
import  Head  from 'next/head';

const Ourservices = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Head>
        <title>Our Services | CDR Assessment Help</title>
        <meta name="description" content="Our Services | CDR Assessment Help" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Guarenteed/>
      <Common/>
      <Help/>
      <Weoffer/>
      <CEs/>
    </div>
  )
}

export default Ourservices