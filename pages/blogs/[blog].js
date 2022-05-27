import React from 'react'
import Buttom from '../../Components/specificblog/Buttom'
import Top from '../../Components/specificblog/Top'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Specificblog = () => {
  const router = useRouter()
  const slug = router.query.blog
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
        <Head>
        <title>{slug}</title>
        <meta name='description' content={slug}/>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
        <Top/>
        <Buttom/>
    </div>
  )
}

export default Specificblog