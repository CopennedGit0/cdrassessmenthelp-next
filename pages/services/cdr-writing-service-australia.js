import React from 'react'
import Features from '../../Components/CDRwriting/Features'
import Forguarenteed from '../../Components/CDRwriting/Forguarenteed'
import Toinclude from '../../Components/CDRwriting/Toinclude'
import Writingcdr from '../../Components/CDRwriting/Writingcdr'
import {useRouter} from 'next/router'
import  Head  from 'next/head';

const CDRWriting = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
<Head>
        <title>High-Quality CDR Report Writing Service for Engineers Australia</title>
        <meta name='description' content="Engineering Applicants seeking the best service provider for CDR Writing? Grab your high-quality CDR Report to get 100 % Approval from Engineers Australia."/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Forguarenteed/>
      <Toinclude/>
      <Features/>
      <Writingcdr/>
    </div>
  )
}

export default CDRWriting