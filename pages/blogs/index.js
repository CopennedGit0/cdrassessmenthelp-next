import React from 'react'
import First from '../../Components/Blogs/First'
import {useRouter} from 'next/router'
import  Head  from 'next/head';


const Blogs = () => {
  const router = useRouter();
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
 
  return (
    <div>
      <Head>
        <title>Blogs | CDR Assessmet Help</title>
        <meta name='description' content="Articles on and about cdr with cdrforengineer | CDR For Engineer"/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
        <First/>


    </div>
  )
}

export default Blogs