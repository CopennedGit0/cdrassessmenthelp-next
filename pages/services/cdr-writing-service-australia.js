import React from 'react'
import Features from '../../Components/CDRwriting/Features'
import Forguarenteed from '../../Components/CDRwriting/Forguarenteed'
import Toinclude from '../../Components/CDRwriting/Toinclude'
import Writingcdr from '../../Components/CDRwriting/Writingcdr'
import {useRouter} from 'next/router'
import  Head  from 'next/head';
import Script from 'next/script'


const CDRWriting = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  const  schemaData= {
    "@context": "http://schema.org",
    "@type": "Product",
    name: "CDR Report Writing Services for Engineers Australia",
    image: "https://cdrskillassessment.com/images/n2.png",
    description:
      "We provide personalised CDR reports prepared by CDR experts based on your degree and career.",
    url: "https://www.cdrassessmenthelp.com/services/cdr-writing-service-australia/",
    brand: {
      "@type": "Brand",
      name: "cdrskillassessment",
      logo: "https://www.cdrassessmenthelp.com/logo.png",
    },
    offers: {
      "@type": "Offer",
      price: "Negotiable",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 10,
      bestRating: 10,
      worstRating: 7,
      ratingCount: 20,
    },
  }

  return (
    <div>
<Head>
        <title>High-Quality CDR Report Writing Service for Engineers Australia</title>
        <meta name='description' content="Engineering Applicants seeking the best service provider for CDR Writing? Grab your high-quality CDR Report to get 100 % Approval from Engineers Australia."/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Script type="application/ld+json">
      {JSON.stringify(schemaData)}
</Script>
      <Forguarenteed/>
      <Toinclude/>
      <Features/>
      <Writingcdr/>
    </div>
  )
}

export default CDRWriting