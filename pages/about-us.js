import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Headings from '../Components/Headings'
import Paragraphs from '../Components/Paragraphs'
import {useRouter} from 'next/router'
import  Head  from 'next/head';

const Aboutus = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Head>
      <title>About Us | CDR Assessment Help</title>
      <meta name='description' content='A CDR Assessment Help website'/>
      <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Container>
        <div className="pt-5 m-1">
          
          <span style={{color:"#970012",fontWeight:"400" ,fontSize:"25px"}}>Home</span><span style={{color:"#676767",fontSize:"25px"}}>/About us </span>
          </div>
          <div className="pt-5">
        <Headings title="About us" align="left"/>
        <Paragraphs data="cdrassessmenthelp.com is an independent organisation dedicated to assisting engineers from all over the globe with their competency demonstration 
reports (CDR). We offer complete plagiarism-free CDR writing and Reviewing services, including Three career Episodes, a Summary statement, 
continuing Professional development (CPD), and a cv-Resume with an assured guarantee and a trust of satisfactory performance. Our highly 
professional team of expert writers provide the best assistance for the CDR writing and reviewing process to get a skilled migration visa to 
Australia." align="left"/>
<Paragraphs data="Our Professional writers are from an engineering background with several years of experience in the CDR preparation field. They have assisted 
1000+ Engineers worldwide to receive a positive assessment for migration skills assessment. We are result oriented organisation where 99.33% 
of our clients have already passed the Assessment on the first attempt. Many Engineers have trusted us for CDR writing. And we have always 
worked smart to provide the promised service to each of our clients. So, if you had your CDR Report Rejected for any reason, there is a high 
chance of a positive assessment on a second attempt if you rely on us and use our CDR services.
" align="left"/>
</div>
      </Container>
    </div>
  )
}

export default Aboutus