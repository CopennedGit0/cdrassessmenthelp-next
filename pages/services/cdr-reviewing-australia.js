import React from 'react'
import Revfirst from '../../Components/cdrreviewing/Revfirst'
import Revfour from '../../Components/cdrreviewing/Revfour'
import Revsecond from '../../Components/cdrreviewing/Revsecond'
import Revthird from '../../Components/cdrreviewing/Revthird' 
import {useRouter} from 'next/router'
import  Head  from 'next/head';


const CDRReviewing = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Head>
        <title>CDR Three Career Episode Report Writing for Engineers Australia</title>
        <meta name='description' content="Get your Three Career Episode Report  for CDR migration skill Assesment for Engineers Australia from Our Professional writers of Enginnering Backgrounds."/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
         <Revfirst/>
         <Revsecond/>
         <Revthird/>
         <Revfour/>


    </div>
  )
}

export default CDRReviewing