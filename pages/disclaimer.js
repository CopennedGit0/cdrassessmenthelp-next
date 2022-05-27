import React from 'react'
import { Container } from 'react-bootstrap'
import Headings from '../Components/Headings'
import Paragraphs from '../Components/Paragraphs'
import {useRouter} from 'next/router'
import  Head  from 'next/head';

const Disclaimer = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
       <Head>
      <title>Disclaimer | CDR Assessment Help</title>
      <meta name='description' content='Disclaimer |  CDR Assessment Help'/>
      <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Container>
      <div className="pt-5 m-1">
          
          <span style={{color:"#970012",fontWeight:"400" ,fontSize:"25px"}}>Home</span><span style={{color:"#676767",fontSize:"25px"}}>/Disclaimer </span>
          </div>
        
          <div className="pt-5">
        <Headings title="Disclaimer" align="left"/>
        <Paragraphs data="The information provided by Cdrassessmenthelp on cdrassessmenthelp.com is for general informational purposes only. All information on the site is provided in good faith. However, 
we make no representation or warranty about this information's completeness, reliability, and accuracy. Any action you take upon the information you find on 
this website (CDR assessment Help) is strictly at your own risk. CDR assessment Help will not be liable for any losses and damages from using our website.
The site may contain (or 
you may be sent through the site) links to other websites. While we make a concerted effort to provide only high-quality links to 
helpful and trustworthy websites, we have no control over the content or nature of these websites. These links to other websites do not constitute an 
endorsement of the information on other sites. Site owners and content may change without notification, which may occur before we can remove a 'bad' 
link.
When you depart our website, you should know that other sites may have different privacy policies and conditions beyond our control. Before engaging 
in any business or sharing any information, kindly review these sites' Privacy Policies and Terms of Service."
 align="left"/>

</div>
<div className='pt-3'>
<Headings title="Consent" align="left"/>
<Paragraphs data="You agree to our disclaimer and adhere to its conditions using our website." align="df"/>
</div>
     <div className='py-3'> 
<Headings title="Update" align="left"/>
<Paragraphs data="Any updates, amendments, or changes to this document will be prominently displayed here." align="dskfn"/>
</div>
     </Container>


    </div>
  )
}

export default Disclaimer