import React from 'react'
import CDRhelpadvice from '../Components/Landing/CDRhelpadvice'
import FAQ from '../Components/Landing/FAQ'
import Forengineer from '../Components/Landing/Forengineer'
import Someof from '../Components/Landing/Someof'
import {useRouter} from 'next/router'
import Whychoose from '../Components/Landing/Whychoose'
import Workflow from '../Components/Landing/Workflow'
import  Head  from 'next/head';

const Landing = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
       <Head>
        <title>CDR Assessment Help</title>
        <meta name="description" content="A CDR Assessment Help website" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Forengineer/>
       <Whychoose/>
       <CDRhelpadvice/>
       <Someof/>
       <Workflow/>
       <FAQ/>

    </div>
  )
}

export default Landing