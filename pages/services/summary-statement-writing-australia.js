import React from 'react'
import Summaryfirst from '../../Components/summarystatementwriting/Summaryfirst'
import Summarysecond from '../../Components/summarystatementwriting/Summarysecond'
import {useRouter} from 'next/router'
import  Head  from 'next/head';
import Script from 'next/script'

const SummaryStatementWriting = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  const  schemaData= {
    "@context": "http://schema.org",
    "@type": "Product",
    name: "CDR Report Writing Services for Engineers Australia",
    image: "https://cdrskillassessment.com/images/n2.png",
    description:
      "We provide personalised CDR reports prepared by CDR experts based on your degree and career.",
    url: "https://www.cdrassessmenthelp.com/services/summary-statement-writing-australia",
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
      <title>Complete Best Summary Statement Writing for Engineers Australia63,156534,9154Stage</title>
      <meta name='description' content='Our Professional CDR Report writers help you with Best Summary Statement Writing Services to showcase your all skills, qualifications in MSA Format by EA .'/>
      <link rel="canonical" href={canonicalUrl} />

    </Head>
    <Script type="application/ld+json">
      {JSON.stringify(schemaData)}
</Script>
      <Summaryfirst/>
      <Summarysecond/>
    </div>
  )
}

export default SummaryStatementWriting