import React from 'react'
import {useRouter} from 'next/router'
import  Head  from 'next/head';

const SpecificSample = () => {
  const router = useRouter()
  const name = router.query.name
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Head>
         <title>CDR Sample For Engineering Manager | CDR Assessment Help</title>
         <meta name='description' content='CDR Sample For Engineering Manager | CDR For Engineer'/>
         <link rel="canonical" href={canonicalUrl} />

       </Head>
    </div>
  )
}

export default SpecificSample