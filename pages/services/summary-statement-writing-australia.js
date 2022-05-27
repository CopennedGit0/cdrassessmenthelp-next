import React from 'react'
import Summaryfirst from '../../Components/summarystatementwriting/Summaryfirst'
import Summarysecond from '../../Components/summarystatementwriting/Summarysecond'
import {useRouter} from 'next/router'
import  Head  from 'next/head';

const SummaryStatementWriting = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
       <Head>
      <title>Complete Best Summary Statement Writing for Engineers Australia63,156534,9154Stage</title>
      <meta name='description' content='Our Professional CDR Report writers help you with Best Summary Statement Writing Services to showcase your all skills, qualifications in MSA Format by EA .'/>
      <link rel="canonical" href={canonicalUrl} />

    </Head>
      <Summaryfirst/>
      <Summarysecond/>
    </div>
  )
}

export default SummaryStatementWriting