import React from 'react'
import CEWfirst from '../../Components/careerepisodewriting/CEWfirst'
import CEWsecond from '../../Components/careerepisodewriting/CEWsecond'
import {useRouter} from 'next/router'
import  Head  from 'next/head';

const CareerEpisodeWriting = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Head>
        <title>CDR Three Career Episode Report Writing for Engineers Australia</title>
        <meta name='description' content="Get your Three Career Episode Report  for CDR migration skill Assesment for Engineers Australia from Our Professional writers of Enginnering Backgrounds."/>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <CEWfirst/>
      <CEWsecond/>
    </div>
  )
}

export default CareerEpisodeWriting