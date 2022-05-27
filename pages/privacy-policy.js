import React from 'react'
import { Container } from 'react-bootstrap'
import Headings from '../Components/Headings'
import Paragraphs from '../Components/Paragraphs'
import {useRouter} from 'next/router'
import  Head  from 'next/head';

const PrivacyPolicy = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
       <Head>
        <title>Privacy Policy | CDR Assessment Help</title>
        <meta name="description" content="Privacy Policy | CDR Assessment Help" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Container>
         <h4 style={{fontWeight:"600",textAlign:"center"}} className="pt-5">Privacy policy @ CDRassessmenthelp</h4> 
         <p style={{color:"#666"}} className="pt-4" > At cdrassessmenthelp.com, we strictly adhere to the privacy policy. In keeping with our commitment to protecting the privacy of our users&apos; data, all of the 
information we receive/collect is kept securely within our organisation, and we do not have access to any of our users&apos; financial information. </p>
 <p style={{color:"#666"}}>We have been granted permission to use your personal information for the following purposes: </p>
 <p style={{color:"#666"}}>
a)	Charge and collect bills.<br/>
b)	Resolve disagreements.<br/>
c)	Store all communications sent through the site.<br/>
d)	Personalise, evaluate, and improve our services and the content and advertising on the site. <br/>
e)	Preventing potentially forbidden or unlawful activity and enforcing our rules are two of our top priorities.
</p>
<p style={{color:"#666"}}>
We also reserve the right to reveal personally identifying information about you if and when required by law. Also, we may disclose the information if
we believe it is necessary to protect our rights and comply with a judicial proceeding, court order, or legal demand served on our website.
</p>

<h5 style={{fontWeight:"600"}} className="pt-3">Updates</h5>
<p style={{color:"#666"}}>
Cdrassessmenthelp.com maintains the right to change it at any moment. We recommend you examine this privacy policy regularly. Any changes to the preceding policy 
will be posted here, and your continued use of the site and services after that will signify your acceptance of those changes.</p>

<h5 style={{fontWeight:"600"}} className="pt-3">Privacy</h5>
<p style={{color:"#666"}}>
The above privacy policy is integral to this legal agreement&apos;s terms and conditions.
</p>

<h5 style={{fontWeight:"600"}} className="pt-3">Privacy</h5>
<p style={{color:"#666"}}>
The above privacy policy is integral to this legal agreement&apos;s terms and conditions.
</p>

<h5 style={{fontWeight:"600"}} className="pt-3">Jurisdiction:</h5>
<p style={{color:"#666"}}>
All of the terms and conditions of the legal agreement are only applicable to the jurisdiction governed.
</p>

<h5 style={{fontWeight:"600"}} className="pt-3">Contact Us</h5>
<p style={{color:"#666"}}>
Don’t hesitate to contact us if you would like to know more information about our privacy practices, if you have any queries, or if you would like to 
file a complaint.
</p>


      </Container>
    </div>
  )
}

export default PrivacyPolicy